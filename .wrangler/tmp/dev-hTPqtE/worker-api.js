var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/fightClass.ts
var Fight = class {
  static {
    __name(this, "Fight");
  }
  location = "\u041F\u0435\u0440\u0438\u0444\u0435\u0440\u0438\u044F";
  island = "none";
  builder = "none";
  attacker = "none";
  date = "00.00.00";
  time = "00:00";
  constructor(location, island, builder, attacker, date, time) {
    this.location = location;
    this.island = island;
    this.builder = builder;
    this.attacker = attacker;
    this.date = date;
    this.time = time;
  }
};
var fightClass_default = Fight;

// src/parser.ts
var warLogs2 = `
13:10:00 \u0411\u0430\u0437\u0430 (\u041F\u043E\u044E\u0449\u0438\u0439 \u0420\u0438\u0444, [\u041B\u0430\u0431\u0438\u0440\u0438\u043D\u0442 \u0424 10:82]) \u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0430 \u043D\u0430\u0448\u0430 \u0437\u0430\u044F\u0432\u043A\u0430 \u043D\u0430 \u0430\u0442\u0430\u043A\u0443 \u043E\u0441\u0442\u0440\u043E\u0432\u0430 "\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u043C \u041C\u0435\u0442\u0430\u043C\u0444\u0435\u0442\u0430\u043C\u0438\u043D /\u0414\u043E\u0431\u044B\u0432\u0430\u044E\u0449\u0438\u0439 \u043E\u0441\u0442\u0440\u043E\u0432 [3]", \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u043E\u0433\u043E \u043A\u043B\u0430\u043D\u043E\u043C "\u043D\u0435\u0431\u0435\u0441\u043D\u044B\u0435 \u0430\u043B\u0445\u0438\u043C\u0438\u043A\u0438", 22.02.24 21:30 \u043F\u043E \u043C\u0441\u043A., \u043D\u0430\u0445\u043E\u0434\u044F\u0449\u0435\u0433\u043E\u0441\u044F \u043F\u043E\u0434 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0435\u043C \u043A\u043B\u0430\u043D\u0430 "Guard Heaven"
13:10:00 \u0411\u0430\u0437\u0430 (\u041F\u043E\u044E\u0449\u0438\u0439 \u0420\u0438\u0444, [\u041B\u0430\u0431\u0438\u0440\u0438\u043D\u0442 \u0424 33:81]) \u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0430 \u043D\u0430\u0448\u0430 \u0437\u0430\u044F\u0432\u043A\u0430 \u043D\u0430 \u0430\u0442\u0430\u043A\u0443 \u043E\u0441\u0442\u0440\u043E\u0432\u0430 "\u0414\u041A \u0438\u043C.\u0423.\u0423\u0430\u0439\u0442\u0430 \u0438 \u0414\u0436.\u041F\u0438\u043D\u043A\u043C\u0430\u043D\u0430 /\u0414\u043E\u0431\u044B\u0432\u0430\u044E\u0449\u0438\u0439 \u043E\u0441\u0442\u0440\u043E\u0432 [3]", \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u043E\u0433\u043E \u043A\u043B\u0430\u043D\u043E\u043C "\u043D\u0435\u0431\u0435\u0441\u043D\u044B\u0435 \u0430\u043B\u0445\u0438\u043C\u0438\u043A\u0438", 22.02.24 21:00 \u043F\u043E \u043C\u0441\u043A., \u043D\u0430\u0445\u043E\u0434\u044F\u0449\u0435\u0433\u043E\u0441\u044F \u043F\u043E\u0434 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0435\u043C \u043A\u043B\u0430\u043D\u0430 "Guard Heaven"
13:10:00 \u0411\u0430\u0437\u0430 (\u041F\u043E\u044E\u0449\u0438\u0439 \u0420\u0438\u0444, [\u041E\u0441\u0442\u0440\u043E\u0432 \u0441\u0432\u0451\u0440\u043D\u0443\u0442]) \u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0430 \u043D\u0430\u0448\u0430 \u0437\u0430\u044F\u0432\u043A\u0430 \u043D\u0430 \u0430\u0442\u0430\u043A\u0443 \u043E\u0441\u0442\u0440\u043E\u0432\u0430 "\u041B\u041E\u0413\u041E\u0412\u041E \u041D\u0415 \u0411\u0418\u0422\u042C! /\u0413\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u0442\u043E\u043D\u043D\u0435\u043B\u0435\u0439 \u0432\u0435\u0442\u0440\u0430 [3]" 22.02.24 22:30 \u043F\u043E \u043C\u0441\u043A., \u043D\u0430\u0445\u043E\u0434\u044F\u0449\u0438\u0439\u0441\u044F \u043F\u043E\u0434 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0435\u043C \u043A\u043B\u0430\u043D\u0430 "\u041D\u0435\u0431\u0435\u0441\u043D\u0430\u044F_\u041A\u0430\u043D\u0426\u0435\u043B\u044F\u0440\u0438\u042F"
13:10:00 \u0411\u0430\u0437\u0430 (\u041F\u043E\u044E\u0449\u0438\u0439 \u0420\u0438\u0444, [\u041E\u0441\u0442\u0440\u043E\u0432 \u0441\u0432\u0451\u0440\u043D\u0443\u0442]) \u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0430 \u043D\u0430\u0448\u0430 \u0437\u0430\u044F\u0432\u043A\u0430 \u043D\u0430 \u0430\u0442\u0430\u043A\u0443 \u043E\u0441\u0442\u0440\u043E\u0432\u0430 "\u041A\u0418\u041C \u043D\u0435 \u0441\u043C\u043E\u0433 \u043F\u043E\u043C\u0435\u043D\u044F\u0442\u044C \u043F\u0440\u0430\u0432\u0430, \u0431\u0435\u0431\u0435 /\u041E\u0441\u0442\u0440\u043E\u0432-\u0441\u043A\u043B\u0430\u0434 [3]" 22.02.24 23:00 \u043F\u043E \u043C\u0441\u043A., \u043D\u0430\u0445\u043E\u0434\u044F\u0449\u0438\u0439\u0441\u044F \u043F\u043E\u0434 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0435\u043C \u043A\u043B\u0430\u043D\u0430 "\u041D\u0435\u0431\u0435\u0441\u043D\u0430\u044F_\u041A\u0430\u043D\u0426\u0435\u043B\u044F\u0440\u0438\u042F"
13:10:00 \u0411\u0430\u0437\u0430 (\u041F\u043E\u044E\u0449\u0438\u0439 \u0420\u0438\u0444, [\u041E\u0441\u0442\u0440\u043E\u0432 \u0441\u0432\u0451\u0440\u043D\u0443\u0442]) \u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0430 \u043D\u0430\u0448\u0430 \u0437\u0430\u044F\u0432\u043A\u0430 \u043D\u0430 \u0430\u0442\u0430\u043A\u0443 \u043E\u0441\u0442\u0440\u043E\u0432\u0430 "\u0424\u0410\u0420\u041C /\u0413\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u0442\u043E\u043D\u043D\u0435\u043B\u0435\u0439 \u0432\u0435\u0442\u0440\u0430 [3]" 22.02.24 23:30 \u043F\u043E \u043C\u0441\u043A., \u043D\u0430\u0445\u043E\u0434\u044F\u0449\u0438\u0439\u0441\u044F \u043F\u043E\u0434 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0435\u043C \u043A\u043B\u0430\u043D\u0430 "\u041D\u0435\u0431\u0435\u0441\u043D\u0430\u044F_\u041A\u0430\u043D\u0426\u0435\u043B\u044F\u0440\u0438\u042F"
13:10:00 \u0411\u0430\u0437\u0430 (\u041F\u043E\u044E\u0449\u0438\u0439 \u0420\u0438\u0444, [\u041B\u0430\u0431\u0438\u0440\u0438\u043D\u0442 \u041F 64:77]) \u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0430 \u043D\u0430\u0448\u0430 \u0437\u0430\u044F\u0432\u043A\u0430 \u043D\u0430 \u0430\u0442\u0430\u043A\u0443 \u043E\u0441\u0442\u0440\u043E\u0432\u0430 "\u0416\u0410\u0420\u0410 /\u0413\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u0442\u043E\u043D\u043D\u0435\u043B\u0435\u0439 \u0432\u0435\u0442\u0440\u0430 [3]", \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u043E\u0433\u043E \u043A\u043B\u0430\u043D\u043E\u043C "Guard Heaven", 22.02.24 22:00 \u043F\u043E \u043C\u0441\u043A., \u043D\u0430\u0445\u043E\u0434\u044F\u0449\u0435\u0433\u043E\u0441\u044F \u043F\u043E\u0434 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0435\u043C \u043A\u043B\u0430\u043D\u0430 "\u041D\u0435\u0431\u0435\u0441\u043D\u0430\u044F_\u041A\u0430\u043D\u0426\u0435\u043B\u044F\u0440\u0438\u042F"
13:10:01 \u0411\u0430\u0437\u0430 (\u041F\u043E\u044E\u0449\u0438\u0439 \u0420\u0438\u0444, [\u041B\u0430\u0431\u0438\u0440\u0438\u043D\u0442 \u0420 14:36]) \u041E\u0441\u0442\u0440\u043E\u0432 "\u041F\u0435\u043B\u043E\u0442\u0430\u0441 /\u0413\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u0442\u043E\u043D\u043D\u0435\u043B\u0435\u0439 \u0432\u0435\u0442\u0440\u0430 [1]", \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u044B\u0439 \u043A\u043B\u0430\u043D\u043E\u043C "\u0418\u0441\u0442\u0438\u043D\u0430", \u0431\u0443\u0434\u0435\u0442 \u0430\u0442\u0430\u043A\u043E\u0432\u0430\u043D \u043A\u043B\u0430\u043D\u043E\u043C "Omega Rising" 24.02.24 21:30 \u043F\u043E \u043C\u0441\u043A.
13:10:01 \u0411\u0430\u0437\u0430 (\u041F\u043E\u044E\u0449\u0438\u0439 \u0420\u0438\u0444, [\u041B\u0430\u0431\u0438\u0440\u0438\u043D\u0442 \u0424 79:10]) \u041E\u0441\u0442\u0440\u043E\u0432 "\u0414\u041E\u0411\u042B\u0412\u0410\u042E\u0429\u0418\u0419 \u041E\u0421\u0422\u0420\u041E\u0412 "\u0411\u0435\u0437\u043B\u0430\u043F\u0430\u044F\u041C\u0443\u0445\u0430" /\u0414\u043E\u0431\u044B\u0432\u0430\u044E\u0449\u0438\u0439 \u043E\u0441\u0442\u0440\u043E\u0432 [3]", \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u044B\u0439 \u043A\u043B\u0430\u043D\u043E\u043C "Wizards of the Sky", \u0431\u0443\u0434\u0435\u0442 \u0430\u0442\u0430\u043A\u043E\u0432\u0430\u043D \u043A\u043B\u0430\u043D\u043E\u043C "Omega Rising" 24.02.24 22:30 \u043F\u043E \u043C\u0441\u043A.
13:10:01 \u0411\u0430\u0437\u0430 (\u041F\u043E\u044E\u0449\u0438\u0439 \u0420\u0438\u0444, [\u041B\u0430\u0431\u0438\u0440\u0438\u043D\u0442 \u0422 81:20]) \u041E\u0441\u0442\u0440\u043E\u0432 "\u0421\u043A\u043B\u0430\u0434 - \u0440\u0435\u043F\u043B\u043E\u0438\u0434\u044B /\u041E\u0441\u0442\u0440\u043E\u0432-\u0441\u043A\u043B\u0430\u0434 [3]", \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u044B\u0439 \u043A\u043B\u0430\u043D\u043E\u043C "Wizards of the Sky", \u0431\u0443\u0434\u0435\u0442 \u0430\u0442\u0430\u043A\u043E\u0432\u0430\u043D \u043A\u043B\u0430\u043D\u043E\u043C "Omega Rising" 24.02.24 22:00 \u043F\u043E \u043C\u0441\u043A.
`;
console.log("Start of parser");
function lines(text) {
  return text.split("\n");
}
__name(lines, "lines");
function removeCollectedFromData(dataString, matchString) {
  return dataString.substring(
    dataString.indexOf(matchString) + matchString.length,
    dataString.length
  );
}
__name(removeCollectedFromData, "removeCollectedFromData");
function parseDataLine(line) {
  let oneLine = line;
  let stringLocation = oneLine.slice(
    oneLine.indexOf("\u0411\u0430\u0437\u0430 (") + "\u0411\u0430\u0437\u0430 (".length,
    oneLine.indexOf(",")
  );
  let location = stringLocation;
  oneLine = removeCollectedFromData(oneLine, ", ");
  let island = oneLine.slice(
    oneLine.indexOf('\u041E\u0441\u0442\u0440\u043E\u0432 "') + '\u041E\u0441\u0442\u0440\u043E\u0432 "'.length,
    oneLine.indexOf(",") - ",".length
  );
  oneLine = removeCollectedFromData(oneLine, ", ");
  let builder = oneLine.slice(
    oneLine.indexOf('\u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u044B\u0439 \u043A\u043B\u0430\u043D\u043E\u043C "') + '\u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u044B\u0439 \u043A\u043B\u0430\u043D\u043E\u043C "'.length,
    oneLine.indexOf(",") - ",".length
  );
  oneLine = removeCollectedFromData(oneLine, ", ");
  let attackerClan = oneLine.slice(
    oneLine.indexOf('\u0430\u0442\u0430\u043A\u043E\u0432\u0430\u043D \u043A\u043B\u0430\u043D\u043E\u043C "') + '\u0430\u0442\u0430\u043A\u043E\u0432\u0430\u043D \u043A\u043B\u0430\u043D\u043E\u043C "'.length,
    oneLine.indexOf('" ')
  );
  oneLine = removeCollectedFromData(oneLine, '" ');
  let date = oneLine.slice(0, "XX.XX.XX".length);
  let time = oneLine.slice(
    "XX.XX.XX ".length,
    "XX.XX.XX ".length + "YY:YY".length
  );
  return new fightClass_default(location, island, builder, attackerClan, date, time);
}
__name(parseDataLine, "parseDataLine");
function parseDataFull(lines2) {
  console.log("Amount of lines is: " + lines2.length);
  var fights = [];
  for (let i = 0; i < lines2.length; i++) {
    if (lines2[i].length > 1) {
      fights.push(parseDataLine(lines2[i]));
    }
  }
  return fights;
}
__name(parseDataFull, "parseDataFull");
function filterDefinedAttacks(unsortedLogs) {
  let sortedLogs = [];
  for (let i = 0; i < unsortedLogs.length; i++) {
    if (unsortedLogs[i].includes("\u0431\u0443\u0434\u0435\u0442 \u0430\u0442\u0430\u043A\u043E\u0432\u0430\u043D \u043A\u043B\u0430\u043D\u043E\u043C")) {
      sortedLogs.push(unsortedLogs[i]);
    }
  }
  return sortedLogs;
}
__name(filterDefinedAttacks, "filterDefinedAttacks");
function parseLogs(text) {
  const allLines = lines(text);
  const filtered2 = filterDefinedAttacks(allLines);
  return parseDataFull(filtered2);
}
__name(parseLogs, "parseLogs");
var warLines = lines(warLogs2);
var filtered = filterDefinedAttacks(warLines);
var parsed = parseDataFull(filtered);
console.log("Parsed data in parser is: ", parsed);

// src/worker-api.ts
var worker_api_default = {
  async fetch(request) {
    const url = new URL(request.url);
    if (request.method === "GET" && url.pathname === "/data") {
      return Response.json({ ok: true, message: "API is running" });
    }
    if (request.method === "POST" && url.pathname === "/parse") {
      const body = await request.json().catch(() => null);
      if (!body || typeof body.logs !== "string") {
        return Response.json(
          { error: 'Request body must contain a string field called "logs"' },
          { status: 400 }
        );
      }
      try {
        const fights = parseLogs(body.logs);
        return Response.json(fights);
      } catch (error) {
        return Response.json(
          {
            error: error instanceof Error ? error.message : "Unknown parsing error"
          },
          { status: 400 }
        );
      }
    }
    return new Response("Not found", { status: 404 });
  }
};

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-mA8Rvh/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = worker_api_default;

// node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-mA8Rvh/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=worker-api.js.map
