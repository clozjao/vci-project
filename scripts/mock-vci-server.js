const express = require("express");
const http = require("http");
const WebSocket = require("ws");

const PORT = Number(process.env.VCI_MOCK_PORT || 4014);
const HOST = process.env.VCI_MOCK_HOST || "127.0.0.1";

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  if (req.method === "OPTIONS") {
    res.sendStatus(204);
    return;
  }
  next();
});

const state = {
  walletBalance: 1000,
  rechargeTimeLeft: 5,
  eventId: "mock-event-001",
  marketId: "mock-market-001",
  products: [
    { id: "mock-away", name: "Away", bo: "1.82" },
    { id: "mock-home", name: "Home", bo: "2.08" },
  ],
  marketStatus: "open",
  activeBet: null,
};

const toNumber = (value, fallback = 0) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const buildEmidResponse = () => ({
  event: {
    event_id: state.eventId,
    name: "Mock Match",
  },
  market: {
    market_id: state.marketId,
    status: state.marketStatus,
  },
  products: state.products,
});

const buildOddsPayload = () => ({
  type: "odds",
  resp: {
    e: state.eventId,
    m: state.marketId,
    s: state.marketStatus,
    ps: state.products.map((product) => ({
      id: product.id,
      n: product.name,
      bo: product.bo,
    })),
  },
});

const buildCashoutPayload = () => {
  if (!state.activeBet) {
    return null;
  }

  const stake = state.activeBet.quantity;
  const price = state.activeBet.price;
  const baseProfit = stake * (price - 1);
  const profitOffset = (Math.random() * 10) - 5;
  const profit = Number((baseProfit + profitOffset).toFixed(2));
  const cashoutAmount = Number(Math.max(0, stake + profit).toFixed(2));

  return {
    type: "cashout",
    resp: {
      e: state.eventId,
      m: state.marketId,
      cp: profit,
      ca: cashoutAmount,
    },
  };
};

app.get("/api/app-order/get-token/", (req, res) => {
  res.json({ token: "mock-access-token", user_id: req.query.user_id || "mock-user" });
});

app.get("/api/app-order/get-recharge/", (req, res) => {
  res.json({ time_left: state.rechargeTimeLeft });
});

app.get("/api/app-order/wallet/", (req, res) => {
  res.json({ balance: state.walletBalance });
});

app.get("/api/app-order/user-action", (req, res) => {
  res.json({
    action: state.activeBet ? "cashout" : "bet",
    event_id: req.query.event_id || state.eventId,
    market_id: req.query.market_id || state.marketId,
  });
});

app.post("/api/app-order/recharge/", (req, res) => {
  if (state.rechargeTimeLeft > 0) {
    state.walletBalance += 100;
    state.rechargeTimeLeft -= 1;
  }

  res.json({
    balance: state.walletBalance,
    time_left: state.rechargeTimeLeft,
  });
});

app.get("/api/app-order/get-emid/", (req, res) => {
  res.json(buildEmidResponse());
});

app.post("/api/app-order/create-order/", (req, res) => {
  const stake = toNumber(req.body.quantity, 0);
  const price = toNumber(req.body.price, 0);

  state.activeBet = {
    event_id: req.body.event_id || state.eventId,
    market_id: req.body.market_id || state.marketId,
    product_id: req.body.product_id || state.products[0].id,
    quantity: stake,
    price,
  };
  state.walletBalance = Math.max(0, Number((state.walletBalance - stake).toFixed(2)));

  broadcastCashout();

  res.json({
    success: true,
    order_id: `mock-order-${Date.now()}`,
    balance: state.walletBalance,
    order: state.activeBet,
  });
});

app.post("/api/app-order/cashout/", (req, res) => {
  const amount = toNumber(req.body.amount, 0);
  state.walletBalance = Number((state.walletBalance + amount).toFixed(2));
  state.activeBet = null;

  broadcastCashout();

  res.json({
    success: true,
    balance: state.walletBalance,
    amount,
  });
});

const server = http.createServer(app);
const wss = new WebSocket.Server({ noServer: true });
const channels = {
  "market-odds": new Set(),
  "cashout-amount": new Set(),
};

const sendJson = (socket, payload) => {
  if (socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(payload));
  }
};

const broadcast = (channel, payload) => {
  channels[channel].forEach((socket) => sendJson(socket, payload));
};

const broadcastOdds = () => {
  broadcast("market-odds", buildOddsPayload());
};

const broadcastCashout = () => {
  const payload = buildCashoutPayload();
  if (!payload) {
    broadcast("cashout-amount", {});
    return;
  }
  broadcast("cashout-amount", payload);
};

server.on("upgrade", (request, socket, head) => {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const pathname = url.pathname.replace(/\/+$/, "");
  const channel = pathname.split("/").pop();

  if (!channels[channel]) {
    socket.destroy();
    return;
  }

  wss.handleUpgrade(request, socket, head, (ws) => {
    ws.channel = channel;
    channels[channel].add(ws);

    ws.on("close", () => {
      channels[channel].delete(ws);
    });

    if (channel === "market-odds") {
      sendJson(ws, buildOddsPayload());
    }
    if (channel === "cashout-amount") {
      const payload = buildCashoutPayload();
      sendJson(ws, payload || {});
    }
  });
});

let tick = 0;
setInterval(() => {
  tick += 1;

  const away = 1.8 + ((tick % 4) * 0.03);
  const home = 2.02 + ((tick % 5) * 0.02);
  state.products[0].bo = away.toFixed(2);
  state.products[1].bo = home.toFixed(2);

  if (tick % 6 === 0) {
    state.marketStatus = "suspended";
  } else {
    state.marketStatus = "open";
  }

  broadcastOdds();
  broadcastCashout();
}, 4000);

server.listen(PORT, HOST, () => {
  console.log(`VCI mock server listening on http://${HOST}:${PORT}`);
});
