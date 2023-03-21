// ../../atreyu/edge/lib/env-local.js
var appKey = Deno.env.get("appKey");
var homeDir = Deno.env.get("HOME");
var envName = Deno.env.get("env");
var conf = JSON.parse(Deno.readTextFileSync(homeDir + `/.atreyu/${appKey}.json`));
conf.env = envName;
function getEnv(keys) {
  const env2 = {};
  keys.forEach((key) => {
    env2[key] = conf[key];
  });
  return env2;
}

// ../../atreyu/edge/lib/kvs-local.js
var devCache = {};
var devKV = {
  put: async (key, value, metadata = {}) => {
  },
  get: (key) => devCache[key] ? devCache[key].value : null,
  getWithMetadata: (key) => devCache[key] ? devCache[key] : { value: null, metadata: null }
};
function getKvStore(name) {
  return devKV;
}

// ../../atreyu/edge/lib/wait.js
var event;
var getWait = (newEvent) => {
  if (newEvent) {
    event = newEvent;
  }
  return { waitUntil, event };
};
function waitUntil(fn) {
  if (event && event.waitUntil) {
    return event.waitUntil(fn);
  } else {
    return fn.catch(console.error);
  }
}

// ../../atreyu/edge/lib/env.js
function getEnv2(keys) {
  const env2 = {};
  keys.forEach((key) => {
    env2[key] = self[key];
  });
  return env2;
}

// ../../atreyu/app/src/lib/url-logger.js
function urlLogger({ missing, continued, scope, method, url, origUrl, cached, corsConf, body, duration, res, richConsole = true, verbose }) {
  let badgeColor = "";
  if (!verbose) {
    if (cached && !missing && method === "GET" && scope === "ipfs") {
      return;
    }
    if (continued) {
      return;
    }
  }
  if (richConsole) {
    badgeColor = "grey";
    if (cached) {
      badgeColor = "#099009";
    } else if (cached === false) {
      badgeColor = "orange";
    }
    if (method === "POST" || method === "SET") {
      badgeColor = "rgb(170, 90, 217)";
    } else if (method === "PUT") {
      badgeColor = "rgb(174, 12, 226)";
    } else if (method === "CALL") {
      badgeColor = "rgb(236 124 248)";
    } else if (method === "PRELOAD") {
      badgeColor = "#6ad4f6";
    }
  }
  let displayUrl = "";
  try {
    if (typeof location !== "undefined" && location.origin) {
      displayUrl = url.replace(location.origin, "");
    } else {
      displayUrl = url;
    }
  } catch (_e) {
    displayUrl = url;
  }
  const edgeWorker = scope?.endsWith("edge-worker");
  if (richConsole) {
    console.groupCollapsed(
      `${scope && edgeWorker ? scope + ": " : ""}%c${missing ? "route error" : ""}%c${missing ? " " : ""}%c${method}%c %c ${displayUrl}`,
      richConsole && missing ? `background-color:red;border-radius:3px;color:black;font-weight:bold;padding-left:2px;padding-right:2px` : "",
      richConsole ? "color:grey" : "",
      richConsole ? `background-color:${badgeColor};border-radius:3px;color:black;font-weight:bold;padding-left:2px;padding-right:2px` : "",
      richConsole ? "color:grey" : "",
      richConsole ? "color:grey" : ""
    );
  } else {
    console.log(`${scope && edgeWorker ? scope + ": " : ""} ${missing ? "route error" : ""} ${missing ? " " : ""} ${method}    ${displayUrl}`);
  }
  if (!edgeWorker && scope) {
    console.info(scope);
  }
  if (cached === true) {
    console.info("cache-status: hit");
  } else if (cached === false) {
    console.info("cache-status: miss");
  }
  if (origUrl && url !== origUrl) {
    console.info("rewritten from: ", origUrl);
  }
  if (corsConf && corsConf.mode === "proxy") {
    console.info("proxied through: " + corsConf.server);
  }
  if (typeof duration !== "undefined") {
    console.log(`duration: ${duration}ms`);
  }
  if (continued) {
    console.info("continued processing of previous request");
  }
  if (body) {
    console.info(body);
  }
  if (richConsole) {
    console.groupEnd();
  }
}

// ../../atreyu/edge/lib/log.js
var envConf;
async function log_default({ req: req2, body, res, response, stats, duration = null, traceId }) {
  if (!envConf) {
    envConf = getEnv2(["_ELASTIC_AUTH", "ELASTIC_URL", "env"]);
  }
  let wokerName;
  if (response) {
    let resp;
    if (response.then) {
      resp = await response;
    } else {
      resp = response;
    }
    const headers = Object.fromEntries(resp.headers.entries());
    res = {
      headers,
      status: resp.status
    };
    wokerName = headers["server"];
  }
  if (envConf.env === "dev") {
    urlLogger({ method: req2.method, scope: wokerName || "edge-worker", url: req2.url.href, duration });
  }
  if (!envConf.ELASTIC_URL) {
    return;
  }
  delete req2.headers["cf-connecting-ip"];
  delete req2.headers["x-real-ip"];
  delete req2.headers["cf-access-jwt-assertion"];
  delete req2.headers["Authorization"];
  delete req2.headers["cookie"];
  let location2;
  let cf;
  if (req2.raw.cf) {
    cf = { ...req2.raw.cf, tlsClientAuth: void 0, tlsExportedAuthenticator: void 0, tlsCipher: void 0, clientTcpRtt: void 0, edgeRequestKeepAliveStatus: void 0, requestPriority: void 0 };
    if (!isNaN(parseFloat(cf?.latitude)) && !isNaN(parseFloat(cf?.longitude))) {
      location2 = {
        lat: parseFloat(cf?.latitude),
        lon: parseFloat(cf?.longitude)
      };
    }
  }
  return fetch(envConf.ELASTIC_URL, {
    method: "POST",
    headers: new Headers({
      "Authorization": "Basic " + btoa(envConf._ELASTIC_AUTH),
      "Content-Type": "application/json"
    }),
    body: JSON.stringify({
      time: new Date().toISOString(),
      traceId,
      stats,
      cf,
      duration,
      method: req2.method,
      url: req2.url.href,
      path: req2.url.pathname,
      req: {
        headers: req2.headers,
        location: location2,
        body
      },
      res
    })
  });
}

// ../../atreyu/edge/lib/req.js
async function req(url, { method, body, headers: headersArg = {}, params, ttl, cacheKey, cacheNs, raw: rawArg, redirect = "manual" } = {}) {
  const { waitUntil: waitUntil2, event: event2 } = getWait();
  if (!method) {
    method = body ? "POST" : "GET";
  }
  if (params) {
    const paramsArray = [];
    Object.entries(params).forEach(([pKey, pValue]) => {
      if (typeof pValue === "object") {
        paramsArray.push(`${pKey}=${JSON.stringify(pValue)}`);
      } else {
        paramsArray.push(`${pKey}=${pValue}`);
      }
    });
    url += "?" + paramsArray.join("&");
  }
  const headers = new Headers(headersArg);
  if (body && !headers.get("content-type")) {
    headers.set("content-type", "application/json");
  }
  if (body && headers.get("content-type") === "application/json" && !(typeof body === "string" || typeof body.getReader === "function")) {
    body = JSON.stringify(body);
  }
  let res;
  let kvs2;
  if (cacheNs) {
    if (!cacheKey) {
      cacheKey = url;
    }
    kvs2 = getKvStore(cacheNs);
    if (headers.get("cache-control") !== "no-cache") {
      const kvRes = await kvs2.getWithMetadata(cacheKey, { type: "arrayBuffer", cacheTtl: 604800 });
      if (kvRes?.value) {
        const options = {
          headers: {
            "cache-status": `edge-kv; hit${kvRes.metadata.expiration ? "; ttl=" + (kvRes.metadata.expiration - Math.floor(Date.now() / 1e3)) : ""}`,
            "content-type": kvRes.metadata.headers?.["content-type"]
          },
          ok: true,
          statusText: "OK",
          status: 200,
          redirect: false
        };
        res = new Response(kvRes.value, options);
      }
    }
  }
  let retried;
  const reqStart = Date.now();
  const wasCached = !!res;
  if (!wasCached) {
    res = await fetch(url, { method, body, headers, redirect }).catch((fetchError) => ({ ok: false, error: fetchError }));
    if (res.ok && cacheNs) {
      waitUntil2((async () => {
        await kvs2.put(cacheKey, await res.clone().arrayBuffer(), {
          expirationTtl: ttl,
          metadata: {
            expiration: ttl ? Math.floor(Date.now() / 1e3) + ttl : void 0,
            headers: {
              "content-type": res.headers.get("content-type"),
              "content-length": res.headers.get("content-length"),
              "last-modified": res.headers.get("last-modified")
            }
          }
        });
      })());
    }
  }
  const duration = Date.now() - reqStart;
  let resHeaders;
  let json;
  let text;
  if (!rawArg && res.headers) {
    resHeaders = Object.fromEntries(res.headers.entries());
    if (!wasCached) {
      let oldCacheStatus = res.headers.get("cache-status") || "";
      if (oldCacheStatus) {
        oldCacheStatus += ", ";
      }
      resHeaders["cache-status"] = oldCacheStatus + "edge-kv; miss" + (kvs2 ? "; stored" : "");
    }
    text = await res.text();
    if (res.headers.get("content-type") === "application/json") {
      json = JSON.parse(text);
    }
  }
  const baseResponse = {
    headers: resHeaders,
    duration,
    ok: res.ok,
    redirect: res.redirected,
    status: res.status,
    statusText: res.statusText,
    retried,
    error: res.error
  };
  if (event2?._traceId) {
    headers.set("traceId", event2?._traceId);
  }
  if (!wasCached) {
    console.log(url);
    waitUntil2(log_default({
      stats: event2?._stats,
      traceId: event2?._traceId,
      req: {
        raw: {
          cf: event2?.request.cf
        },
        method,
        url: new URL(url),
        headers: Object.fromEntries(headers.entries())
      },
      res: { body: text, ...baseResponse },
      body,
      duration
    }));
  }
  return {
    raw: res,
    json,
    text,
    ...baseResponse
  };
}

// ../../atreyu/edge/handlers/_ipfs.js
var { IPFS_GATEWAY, env, appPath, appName } = getEnv(["IPFS_GATEWAY", "env", "appPath", "appName"]);
var ipfsGateway = IPFS_GATEWAY || (appPath ? "http://127.0.0.1:8080" : "https://cloudless.mypinata.cloud");
var ipfsMaps = {};
var kvs = getKvStore("ipfs");
async function handler({ req: req2, app, waitUntil: waitUntil2 }) {
  let url = "";
  let ipfsPath;
  let revalidate = false;
  let disableCache = false;
  const pinName = env === "prod" ? appName : appName + "_" + env;
  let kvPrefix = req2.url.pathname.startsWith("/_ayu") ? "ayu:" : pinName + ":";
  let ipfsMap;
  let reqHash;
  let ipfsMapCacheStatus = "";
  let appHash = req2.url.pathname.startsWith("/_ayu") ? app.ayuHash : app.Hash;
  let path = req2.url.pathname.startsWith("/_ayu") ? req2.url.pathname.replace("/_ayu", "") : req2.url.pathname;
  const preloadHeader = {};
  if (path.startsWith("/ayu@")) {
    if (path.startsWith("/ayu@latest")) {
      const folderPath = path.replace("/ayu@latest", "");
      reqHash = app.rootFolderHash + folderPath;
      ipfsPath = `/ipfs/${reqHash}`;
      url = ipfsGateway + ipfsPath;
    } else {
      const pathArray = path.replace("/ayu@", "").split("/");
      const version = pathArray.shift();
      if (version === app.ayuVersion) {
        reqHash = app.rootFolderHash + (pathArray.length ? "/" + pathArray.join("/") : "");
        ipfsPath = `/ipfs/${reqHash}`;
        url = ipfsGateway + ipfsPath;
      } else {
      }
    }
  } else {
    if (path.startsWith("/ipfs/")) {
      const maybeHash = path.replace("/ipfs/", "");
      const ipfsPathParts = maybeHash.split("/");
      if (ipfsPathParts.length === 1) {
        reqHash = ipfsPathParts[0];
        url = ipfsGateway + path;
        ipfsPath = path;
      } else {
        const folderHash = ipfsPathParts[0];
        if (folderHash === app.ayuHash) {
          kvPrefix = "ayu:";
          appHash = app.ayuHash;
          path = path.replace(`/ipfs/${folderHash}`, "");
        } else if (folderHash === app.Hash) {
          path = path.replace(`/ipfs/${folderHash}`, "");
        } else {
          return new Response("Root hash not pinned, please update your application", { status: 404, statusText: "Not Found" });
        }
      }
    }
    if (!reqHash) {
      if (path.endsWith("/")) {
        path += "index.html";
      } else if (!path) {
        path = "/index.html";
      }
      if (path.endsWith("/index.html") || path.endsWith("/ipfs-map.json") || path.endsWith("/service-worker.js") || req2.url.pathname.startsWith("/_ayu/accounts")) {
        disableCache = true;
      }
      if (!ipfsMaps[appHash]) {
        const ipfsMapPath = appHash + "/ipfs-map.json";
        ipfsMaps[appHash] = await kvs.get(kvPrefix + ipfsMapPath, { type: "json" });
        if (!ipfsMaps[appHash]) {
          ipfsMapCacheStatus = "edge-mem; miss; stored, edge-kv; miss; stored";
          const { json: mapReq, error, ok, status } = await req(ipfsGateway + "/ipfs/" + ipfsMapPath);
          if (!ok) {
            console.error({ error, status, path: ipfsMapPath, ipfsGateway });
            ipfsMaps[appHash] = {};
          } else {
            ipfsMaps[appHash] = mapReq;
          }
          if (ipfsMaps[appHash]) {
            waitUntil2(kvs.put(kvPrefix + ipfsMapPath, JSON.stringify(ipfsMaps[appHash])));
          }
        } else {
          ipfsMapCacheStatus = "edge-mem; miss; stored, edge-kv; hit";
        }
      } else {
        ipfsMapCacheStatus = "edge-mem; hit";
      }
      ipfsMap = ipfsMaps[appHash];
      const existingHash = req2.headers["if-none-match"]?.replaceAll('"', "").replace("W/", "");
      if (!ipfsMap?.[path] && !path.endsWith("/ipfs-map.json")) {
        return new Response(null, { status: 404, statusText: "Not Found" });
      }
      if (!path.endsWith("/ipfs-map.json")) {
        if (ipfsMap[path] === existingHash) {
          return new Response(null, { status: 304, statusText: "Not Modified", "cache-status": "browser-cache; hit" });
        } else {
          reqHash = ipfsMap[path];
        }
      }
      revalidate = true;
      ipfsPath = `/ipfs/${appHash}${path}`;
      url = ipfsGateway + ipfsPath;
    }
  }
  let response;
  if (path.endsWith("/ipfs-map.json")) {
    reqHash = appHash + "/ipfs-map.json";
    const bodyText = JSON.stringify(ipfsMaps[appHash]);
    response = new Response(bodyText, {
      headers: {
        "content-type": "application/json",
        "content-length": bodyText.length,
        "cache-status": ipfsMapCacheStatus
      }
    });
  } else {
    response = (await req(url, { cacheKey: kvPrefix + reqHash, cacheNs: "ipfs", raw: true })).raw;
  }
  if (!response.ok) {
    disableCache = true;
  }
  let headers;
  let contentType;
  if (path.endsWith(".js")) {
    contentType = "application/javascript";
  } else if (path.endsWith(".json")) {
    contentType = "application/json";
  } else if (path.endsWith(".ts")) {
    contentType = "application/typescript";
  }
  if (disableCache) {
    headers = new Headers({
      "content-type": contentType || response.headers.get("content-type"),
      "content-length": response.headers.get("content-length"),
      "etag": `"${reqHash}"`,
      "cache-control": "public, must-revalidate, max-age=0",
      "x-ipfs-path": ipfsPath,
      "server": "ipfs-edge-worker",
      "Service-Worker-Allowed": "/",
      "cache-status": response.headers.get("cache-status") || "edge-kv; miss",
      ...preloadHeader
    });
  } else if (revalidate) {
    headers = new Headers({
      "content-type": contentType || response.headers.get("content-type"),
      "content-length": response.headers.get("content-length"),
      "etag": `"${reqHash}"`,
      "cache-control": "public, must-revalidate, max-age=" + (env === "prod" ? 3 * 60 * 60 : 4),
      "x-ipfs-path": ipfsPath,
      "server": "ipfs-edge-worker",
      "cache-status": response.headers.get("cache-status") || "edge-kv; miss; stored",
      ...preloadHeader
    });
  } else {
    headers = new Headers({
      "etag": `"${reqHash}"`,
      "content-type": contentType || response.headers.get("content-type"),
      "cache-control": "public, max-age=29030400, immutable, private=Set-Cookie",
      "content-length": response.headers.get("content-length"),
      "last-modified": response.headers.get("last-modified"),
      "x-ipfs-path": ipfsPath,
      "server": "ipfs-edge-worker",
      "cache-status": response.headers.get("cache-status") || "edge-kv; miss; stored",
      ...preloadHeader
    });
  }
  return new Response(await response.arrayBuffer(), {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}
export {
  handler
};
//# sourceMappingURL=_ipfs.deno.js.map
