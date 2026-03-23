# sport-front

## 本地執行

### 需求

- Node `22.12.0`
- npm

專案內已有 `.nvmrc`，建議先切到指定版本：

```bash
nvm use
```

如果本機還沒安裝 `22.12.0`，先執行：

```bash
nvm install 22.12.0
nvm use
```

### 第一次啟動

先安裝依賴：

```bash
npm install
```

### 一般前端開發

1. 切到專案目錄

```bash
cd /path/to/sport-front
```

2. 切換 Node 版本

```bash
nvm use
```

3. 啟動 Vite dev server

```bash
npm run dev
```

4. 開啟瀏覽器

- 預設網址：`http://localhost:3000`
- 因為 Vite 使用 `--host 0.0.0.0`，同網段裝置也可透過你的本機 IP 連線

### 本地預覽 build 結果

先打包，再用 preview server 檢查：

```bash
npm run build
npm run preview
```

- build 輸出目錄：`dist/`
- preview 預設網址：`http://localhost:4173`

## VCI Mock 本地測試

VCI 相關功能現在可切換到本地 mock API 與 WebSocket，方便在正式 API 無法使用時繼續開發。

### 啟動前準備

- 請使用 Node `22.12.0`
- 第一次執行前請先安裝依賴：

```bash
npm install
```

- 這個專案已提供 `.nvmrc`，可先執行：

```bash
nvm use
```

### 啟動方式

需要開兩個 terminal，分別跑 mock server 與前端。

### Terminal 1: 啟動本地 mock server

```bash
npm run mock:vci
```

- 預設位置：`http://127.0.0.1:4014`
- 提供 REST API 與 WebSocket mock

### Terminal 2: 啟動前端 mock 模式

另開一個 terminal 後執行：

```bash
nvm use
npm run start:mock
```

- 前端位置：`http://localhost:3009`
- 會自動使用 `.env.vci-mock`
- 會連到本地：
  - HTTP: `http://127.0.0.1:4014/api/app-order/`
  - WS: `ws://127.0.0.1:4014/api/app-order/`

### 目前 mock 範圍

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
- 前端已改為 Vite，可直接在 Node 22 下開發與打包
- 如果 `3000`、`3009`、`4014` 或 `4173` 已被占用，請先釋放該 port，否則啟動會失敗

## 打包

### build

```bash
npm run build
```

- 輸出目錄：`dist/`
