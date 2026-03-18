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

## Deploy (TODO)

```
# 手動
gcloud builds submit --config ./deployments/gcp/develop/cloud-build.yaml --substitutions=TAG_NAME="{your tag}",SHORT_SHA="$(git rev-parse --short HEAD)"

gcloud builds submit --config ./deployments/gcp/production/cloud-build.yaml --substitutions=TAG_NAME="{your tag}",SHORT_SHA="$(git rev-parse --short HEAD)"

kubectl set image deployment/sport-front sport-front="asia.gcr.io/sport-319603/front:{your tag}";

kubectl rollout restart deployment sport-front (如 image tag 與原先相同需 restart)

# makefile cli (only surpport develop env currently)
make kube-deploy env={your env} tag={your tag}

make kube-restart env={your env}  (如 image tag 與原先相同需 restart)

make gcloud-build env={your env} tag={your tag}
```

## TS 回報 Commit 格式

```bash
# 務必依照以下格式回傳，推上 gitlab 後即可自動輸出在 Ts 回報表中
# 如是不需要回報的 commit，不用付上回報格式即可

<type>: <subject>

<description>
-------以下為回報格式-------
類型: <value>
編號: <value>
說明: <value>
頁面: <value>
標的: <value>
更前: <value>
更後: <value>
待修: <value>
紀錄: <value>
上版前端: <value>
API: <value>
版號: <value>
```

## Folder Structure

```markdown
    .
    ├── build
    ├── public
    ├── scripts
    └── src
        ├── actions                # redux actions
        ├── api                    # api
        ├── assets                 # 靜態檔
        │   ├── fonts              # 字型檔
        │   ├── images             # 圖檔
        ├── components             # 元件
        │   ├── Banner             # 首頁球種頁Banner
        │   ├── CenterSidebarPC    # ＰＣ版中間區域
        │   ├── DividingLine       # 分向線
        │   ├── EventList          # 比賽列表
        │   ├── EventStatus        # 比賽狀態
        │   ├── Filter             # 球種頁分類
        │   ├── Footer             # Footer
        │   ├── Header             # Header mobile
        │   ├── HeaderPC           # HeaderPC
        │   ├── IconComponent      # 重複利用性icon
        │   ├── Information        # 盤口資訊
        │   ├── LeftSidebar        # 左側邊欄(漢堡選單)
        │   ├── LeftSidebarPC      # 左側邊欄(漢堡選單)PC
        │   ├── Loading            # Loading icon
        │   ├── MainContainerPC    # PC styled component
        │   ├── Notification       # 下單通知
        │   ├── OutRight           # OutRight盤口
        │   ├── PopularStreaming   # PopularStreaming
        │   ├── QuickLink          # 快速選單
        │   ├── RightSideBarPCV3   # PC右側區域
        │   ├── RoundHead          # 比分卡
        │   ├── OrderSlip          # 下單元件
        │   ├── SortedIconBlock    # SortedIconBlock
        │   ├── Results            # 比賽結果
        │   ├── RightSidebar       # 右側邊欄
        │   ├── SwitchMarketsPages # 切換盤口模式的按鈕
        │   ├── UnderPopup         # 下方彈出視窗(orderslip,statement) 
        │   ├── UseAppLate         # 較晚執行的function集中管理處
        │   └── WidgetAnalyzeBoard # 分析板
        ├── config                 # 設定
        ├── pages                  # router
        │   └── Bonus # Bonus
        │   └── Category # 球種頁
        │   └── Markets # 盤口頁
        │   └── Promotion # 推廣頁
        │   └── RulePage # 比賽規則
        │   └── Security # Security
        │   └── Special # 主打熱門賽事
        │   └── Sports # 原today upcoming inplay 資料夾,以重整到Category資料夾
        │   └── Statement # order 結果
        │   └── Watchlist # 我的最愛
        │   └── Homepage.js # 首頁
        ├── hooks                  # 含生命週期 api ,帶有state等
        ├── utils                  # 工具類
        │   └── i18 # 翻譯套件
        └── reducers               # redux reducers
```

### Theme Color

```javascript
  secondary_background_color: theme?.sbgc ?? 'fff',
  text_primary_color: theme?.tpc ?? '333',
  primary_color: theme?.pc ?? '6cc1ff',
  secondary_color: theme?.sc ?? 'fff',
  third_color: theme?.tc ?? '333',
  primary_background_color: theme?.pbgc ?? 'f5f6fa',
  quick_link_border_color: theme?.qlbc ?? 'eaeaea',
```

### Test Language

```bash
defaults write com.google.Chrome AppleLanguages '(en-US)'
```
source: https://www.zhihu.com/question/22327155
