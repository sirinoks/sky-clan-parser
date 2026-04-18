import parsed, { parseLogs } from "./parser";

type ParseRequestBody = {
  logs?: string;
};

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    if (request.method === "GET" && url.pathname === "/") {
      return Response.json({ ok: true, message: "API is running" });
    }

    if (request.method === "GET" && url.pathname === "/data") {
      return Response.json({ ok: true, data: parsed });
    }

    if (request.method === "POST" && url.pathname === "/parse") {
      const body = (await request.json().catch(() => null)) as ParseRequestBody | null;

      if (!body || typeof body.logs !== "string") {
        return Response.json(
          { error: 'Request body must contain a string field called "logs"' },
          { status: 400 },
        );
      }

      try {
        const fights = parseLogs(body.logs);
        return Response.json(fights);
      } catch (error) {
        return Response.json(
          {
            error:
              error instanceof Error ? error.message : "Unknown parsing error",
          },
          { status: 400 },
        );
      }
    }

    return new Response("Not found", { status: 404 });
  },
};
