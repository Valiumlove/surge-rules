const NAME = "PingMe签到";
const CK_KEY = "pingme_capture_v3";
const SECRET = "0fOiukQq7jXZV2GRi9LGlO";
const MAX_VIDEO = 5;
const VIDEO_DELAY = 8000;
const ICON = "https://raw.githubusercontent.com/fmz200/wool_scripts/main/icons/apps/PingMe.png";

function notify(subtitle, body) {
  $notification.post(NAME, subtitle || "", body || "", { "media-url": ICON });
}

function finish(value) {
  try { $done(value || {}); } catch (e) {}
}

function readStore(key) {
  return $persistentStore.read(key);
}

function writeStore(key, value) {
  return $persistentStore.write(value, key);
}

function requestGet(url, headers) {
  return new Promise((resolve, reject) => {
    $httpClient.get({ url, headers, timeout: 30 }, (error, response, data) => {
      if (error) {
        reject(error);
      } else {
        response = response || {};
        response.body = data || "";
        response.statusCode = response.status || response.statusCode || 0;
        resolve(response);
      }
    });
  });
}

function parseRawQuery(url) {
  const query = String(url || "").split("?")[1]?.split("#")[0] || "";
  const rawMap = {};
  query.split("&").forEach(pair => {
    if (!pair) return;
    const idx = pair.indexOf("=");
    if (idx < 0) return;
    rawMap[pair.slice(0, idx)] = pair.slice(idx + 1);
  });
  return rawMap;
}

function cloneHeaders(headers) {
  const out = {};
  Object.keys(headers || {}).forEach(k => {
    const v = headers[k];
    if (v !== undefined && v !== null) out[k] = v;
  });
  return out;
}

function captureHeaders(headers) {
  const out = cloneHeaders(headers);
  delete out["Content-Length"];
  delete out["content-length"];
  delete out[":authority"];
  delete out[":method"];
  delete out[":path"];
  delete out[":scheme"];
  out.Host = "api.pingmeapp.net";
  out.Accept = out.Accept || out.accept || "application/json";
  return out;
}

function buildHeaders(capture) {
  const headers = captureHeaders(capture.headers || {});
  headers.Host = "api.pingmeapp.net";
  headers.Accept = headers.Accept || headers.accept || "application/json";
  return headers;
}

function getUTCSignDate() {
  const now = new Date();
  const pad = n => String(n).padStart(2, "0");
  return `${now.getUTCFullYear()}-${pad(now.getUTCMonth() + 1)}-${pad(now.getUTCDate())} ${pad(now.getUTCHours())}:${pad(now.getUTCMinutes())}:${pad(now.getUTCSeconds())}`;
}

function buildSignedParamsRaw(capture) {
  const params = {};
  Object.keys(capture.paramsRaw || {}).forEach(k => {
    if (k !== "sign" && k !== "signDate") params[k] = capture.paramsRaw[k];
  });
  params.signDate = getUTCSignDate();
  const signBase = Object.keys(params).sort().map(k => `${k}=${params[k]}`).join("&");
  params.sign = MD5(signBase + SECRET);
  return params;
}

function buildUrl(path, capture) {
  const params = buildSignedParamsRaw(capture);
  const qs = Object.keys(params).map(k => `${k}=${encodeURIComponent(params[k])}`).join("&");
  return `https://api.pingmeapp.net/app/${path}?${qs}`;
}

function parseJson(text) {
  try { return JSON.parse(text || "{}"); } catch (e) { return null; }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runTask() {
  const raw = readStore(CK_KEY);
  if (!raw) {
    notify("请先获取参数", "打开 PingMe App，触发一次 queryBalanceAndBonus 请求后再运行签到。");
    return;
  }

  let capture;
  try {
    capture = JSON.parse(raw);
  } catch (e) {
    notify("参数损坏", "请重新打开 PingMe App 抓取参数。");
    return;
  }

  const headers = buildHeaders(capture);
  const msgs = [];

  async function fetchApi(path) {
    const url = buildUrl(path, capture);
    return await requestGet(url, headers);
  }

  try {
    let res = await fetchApi("queryBalanceAndBonus");
    let data = parseJson(res.body);
    if (data && data.retcode === 0) {
      msgs.push(`💰 余额：${data.result?.balance ?? "?"} Coins`);
    } else {
      msgs.push(`⚠️ 查询：${data?.retmsg || `HTTP ${res.statusCode}`}`);
    }

    res = await fetchApi("checkIn");
    data = parseJson(res.body);
    if (data && data.retcode === 0) {
      msgs.push(`✅ 签到：${String(data.result?.bonusHint || data.retmsg || "成功").replace(/\n/g, " ")}`);
    } else {
      msgs.push(`⚠️ 签到：${data?.retmsg || `HTTP ${res.statusCode}`}`);
    }

    for (let i = 1; i <= MAX_VIDEO; i++) {
      await sleep(i === 1 ? 1500 : VIDEO_DELAY);
      try {
        res = await fetchApi("videoBonus");
        data = parseJson(res.body);
        if (data && data.retcode === 0) {
          msgs.push(`🎬 视频${i}：+${data.result?.bonus ?? "?"} Coins`);
        } else {
          msgs.push(`⏸ 视频${i}：${data?.retmsg || `HTTP ${res.statusCode}`}`);
          break;
        }
      } catch (e) {
        msgs.push(`❌ 视频${i}：${String(e) || "请求失败"}`);
        break;
      }
    }

    res = await fetchApi("queryBalanceAndBonus");
    data = parseJson(res.body);
    if (data && data.retcode === 0) {
      msgs.push(`💰 最新余额：${data.result?.balance ?? "?"} Coins`);
    }

    notify("🎉 任务完成", msgs.join("\n"));
  } catch (e) {
    notify("❌ 任务失败", `${msgs.join("\n")}\n${String(e && e.message ? e.message : e)}`.trim());
  }
}

function captureRequest() {
  const url = $request.url || "";
  const paramsRaw = parseRawQuery(url);
  const headers = captureHeaders($request.headers || {});

  if (!paramsRaw || Object.keys(paramsRaw).length === 0) {
    notify("参数获取失败", "未读取到 URL 参数，请重新打开 PingMe 后再试。");
    return;
  }

  const ok = writeStore(CK_KEY, JSON.stringify({
    url,
    paramsRaw,
    headers,
    capturedAt: new Date().toISOString()
  }));

  if (ok) {
    notify("参数获取成功", "PingMe 签到参数已保存。可手动运行一次脚本测试。");
  } else {
    notify("参数保存失败", "Surge 持久化存储写入失败。请检查脚本权限。");
  }
}

function MD5(string) {
