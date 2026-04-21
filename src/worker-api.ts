/// <reference types="@cloudflare/workers-types" />

import parsed, { parseLogs } from "./parser";

interface Env {
  KV: KVNamespace;
}

type ParseRequestBody = {
  logs?: string;
};

// ================= Helpers: ================

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

// Generate a unique key for a fight based on its data
async function generateFightKey(fight: any): Promise<string> {
  // Concatenate fields that uniquely identify a fight
  const keyString = [
    fight.date,
    fight.time,
    fight.location,
    fight.island,
    fight.builder,
    fight.attacker,
  ].join("|");
  // Hash using SubtleCrypto (available in Workers)
  const encoder = new TextEncoder();
  const data = encoder.encode(keyString);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  // Convert hash to hex string
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return `fight:${hashHex}`;
}

// ================= Helpers END ================

// ================= Endpoints: =================

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

async function saveFightsToKV(request: Request, env: Env): Promise<Response> {
  const fights = (await request.json().catch(() => null)) as any[];
  if (!Array.isArray(fights)) {
    return withCorsHeaders(
      Response.json({ error: "Expected an array of fights" }, { status: 400 }),
    );
  }

  let saved = 0;
  for (const fight of fights) {
    const key = await generateFightKey(fight);
    const existing = await env.KV.get(key);
    if (!existing) {
      await env.KV.put(key, JSON.stringify(fight), {
        expirationTtl: 60 * 60 * 24 * 7,
      });
      saved++;
    }
    // If you want to update existing, remove the check above
  }

  return withCorsHeaders(Response.json({ ok: true, saved }));
}

async function getAllFightsFromKV(env: Env): Promise<Response> {
  const list = await env.KV.list({ prefix: "fight:" });
  const values = await Promise.all(list.keys.map((k) => env.KV.get(k.name)));
  const fights = values.map((v) => v && JSON.parse(v)).filter(Boolean);
  return withCorsHeaders(Response.json({ ok: true, fights }));
}

// ======================= Endpoints END ================

// finally, fetch
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

    if (request.method === "POST" && url.pathname === "/save-fights") {
      return await saveFightsToKV(request, env);
    }
    if (request.method === "GET" && url.pathname === "/all-fights") {
      return await getAllFightsFromKV(env);
    }

    return withCorsHeaders(new Response("Not found", { status: 404 }));
  },
};
