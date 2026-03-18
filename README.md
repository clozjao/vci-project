# sport-front

## 執行開發環境

### 啟動 dev-server

```bash
npm start
```

### 方法二 docker 啟動 dev-server

```bash
docker compose up -d front
```

## VCI Mock 本地測試

VCI 相關功能現在可切換到本地 mock API 與 WebSocket，方便在正式 API 無法使用時繼續開發。

### 啟動前準備

- 請使用 Node `14.21.3`
- 這個專案已提供 `.nvmrc`，可先執行：

```bash
nvm use
```

### 啟動本地 mock server

```bash
npm run mock:vci
```

- 預設位置：`http://127.0.0.1:4014`
- 提供 REST API 與 WebSocket mock

### 啟動前端 mock 模式

另開一個 terminal：

```bash
npm run start-v3w:mock
```

- 前端位置：`http://localhost:3009`
- 會自動使用 `.env.vci-mock`
- 會連到本地：
  - HTTP: `http://127.0.0.1:4014/api/app-order/`
  - WS: `ws://127.0.0.1:4014/api/app-order/`

### 目前 mock 範圍

- `get-token`
- `get-recharge`
- `wallet`
- `user-action`
- `recharge`
- `get-emid`
- `create-order`
- `cashout`
- `market-odds` WebSocket
- `cashout-amount` WebSocket

### 備註

- mock server 目前為記憶體資料，重啟後會重置
- `cashout-amount` 的 `cp` 會依下注基準值隨機波動，預設落在基準值 `±5` 內
- 若使用 Node 22 啟動前端，舊版 webpack 可能出現 OpenSSL 錯誤，請改用 Node 14

## 打包

### build

```bash
npm run build
```

