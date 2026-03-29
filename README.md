# sport-front

## 本地開發

這個專案目前最常用的本地開發方式是：

- 前端使用 Vite，支援熱更新
- API 與 WebSocket 使用本地 mock server
- 在本機直接開啟畫面驗證功能

## 需求

- Node `22.12.0`
- npm

專案內有 `.nvmrc`，建議先切到對應版本：

```bash
nvm use
```

如果你本機還沒安裝這個版本：

```bash
nvm install 22.12.0
nvm use
```

第一次啟動前先安裝依賴：

```bash
npm install
```

## 啟動方式

需要開兩個 terminal。

### Terminal 1：啟動 mock server

```bash
npm run mock:vci
```

啟動後 mock server 會跑在：

- `http://localhost:4014`

## Terminal 2：啟動前端開發模式

```bash
npm run start:mock
```

這個模式會：

- 啟動 Vite dev server
- 支援熱更新
- 自動載入 `.env.vci-mock`
- 自動連到本地 mock server

前端網址：

- `http://localhost:3009`

## 本地連線設定

`start:mock` 會讀取 [`.env.vci-mock`](e:\Desktop\code\vci-project\.env.vci-mock)：

- HTTP: `http://localhost:4014/api/app-order/`
- WebSocket: `ws://localhost:4014/api/app-order/`

## 日常開發流程

1. 開一個 terminal 執行 `npm run mock:vci`
2. 再開一個 terminal 執行 `npm run start:mock`
3. 打開 `http://localhost:3009`
4. 修改程式碼後，頁面會自動熱更新

## 補充

- mock server 資料存在記憶體，重啟後會重置
- 如果 `3009` 或 `4014` 已被占用，啟動會失敗
- 如果你不需要 mock，只想單純啟動前端，可使用 `npm run dev`
