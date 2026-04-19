import parsed, { parseLogs } from "./parser";

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

export default {
  async fetch(request: Request): Promise<Response> {
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
      return withCorsHeaders(Response.json({ ok: true, message: "API is running" }));
    }

    if (request.method === "GET" && url.pathname === "/data") {
      return withCorsHeaders(Response.json({ ok: true, data: parsed }));
    }

    if (request.method === "POST" && url.pathname === "/parse") {
      const body = (await request.json().catch(() => null)) as ParseRequestBody | null;
      console.log("Received body:", body);
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
        return withCorsHeaders(Response.json(
          {
            error:
              error instanceof Error ? error.message : "Unknown parsing error",
          },
          { status: 400 },
        ));
      }
    }

    return withCorsHeaders(new Response("Not found", { status: 404 }));
  },
};
