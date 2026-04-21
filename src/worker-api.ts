/// <reference types="@cloudflare/workers-types" />

import parsed, { parseLogs } from "./parser";

interface Env {
  KV: KVNamespace;
}

type ParseRequestBody = {
  logs?: string;
};

function withCorsHeaders(response: Response): Response {
  const newHeaders = new Headers(response.headers);
  newHeaders.set("Access-Control-Allow-Origin", "*"); // Or your frontend URL
  newHeaders.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  newHeaders.set("Access-Control-Allow-Headers", "Content-Type");
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders,
  });
}

// Endpoints:

// Root / - check if running
async function getRoot(): Promise<Response> {
  return withCorsHeaders(
    Response.json({ ok: true, message: "API is running" }),
  );
}

// /data - get all logs
async function getData(): Promise<Response> {
  return withCorsHeaders(Response.json({ ok: true, data: parsed }));
}

// /parse - parse logs from sent string and return Fight objects
async function handleParse(request: Request): Promise<Response> {
  const body = (await request
    .json()
    .catch(() => null)) as ParseRequestBody | null;
  console.log("Received body:");
  console.log(body);
  console.log("body length: ", body?.logs?.length);
  if (body) console.log("there is a body");
  else console.log("there is no body");
  if (!body || typeof body.logs !== "string") {
    return withCorsHeaders(
      Response.json(
        { error: 'Request body must contain a string field called "logs"' },
        { status: 400 },
      ),
    );
  }

  try {
    const fights = parseLogs(body.logs);
    return withCorsHeaders(Response.json(fights));
  } catch (error) {
    return withCorsHeaders(
      Response.json(
        {
          error:
            error instanceof Error ? error.message : "Unknown parsing error",
        },
        { status: 400 },
      ),
    );
  }
}

// Write an object to KV and return a response
async function writeObjectToKV(env: Env): Promise<Response> {
  const obj = { foo: "bar", time: Date.now() };
  await env.KV.put("test-object", JSON.stringify(obj));
  return withCorsHeaders(
    Response.json({ ok: true, message: "Wrote object to KV" }),
  );
}

// Read an object from KV and return a response
async function readObjectFromKV(env: Env): Promise<Response> {
  const value = await env.KV.get("test-object");
  let obj = null;
  try {
    obj = value ? JSON.parse(value) : null;
  } catch (e) {
    obj = null;
  }
  return withCorsHeaders(Response.json({ ok: true, value: obj }));
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": "*", // Or your frontend URL
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    if (request.method === "GET" && url.pathname === "/") {
      return await getRoot();
    }

    if (request.method === "GET" && url.pathname === "/data") {
      return await getData();
    }

    if (request.method === "POST" && url.pathname === "/parse") {
      return await handleParse(request);
    }

    if (request.method === "GET" && url.pathname === "/kv-test-write-object") {
      return await writeObjectToKV(env);
    }
    if (request.method === "GET" && url.pathname === "/kv-test-read-object") {
      return await readObjectFromKV(env);
    }

    return withCorsHeaders(new Response("Not found", { status: 404 }));
  },
};
