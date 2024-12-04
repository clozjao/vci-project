# 介紹

## 執行開發環境

### 方法一 啟動 dev-server use taiwan or india api

```bash
npm start
```

```bash
npm run start:prod
```

### 方法二 docker 啟動 dev-server

```bash
docker compose up -d front
```

## 打包

### build production use india api

```bash
npm run build
```

### build development use taiwan api

```bash
npm run build:dev
```

### build widget use india api

```bash
npm run build-widget
```

### build widget use taiwan api

```bash
npm run build-widget:dev
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

## Commit 格式

#### 可以 google "git commit type" 會有更多詳細說明&#x20;

```bash
# Commit請依照下方格式

<type>: <subject>

<description>

Ref: <reference issue>

----------------------
types:

feat: 新增/修改功能 (feature)。
fix: 修補 bug (bug fix)。
docs: 文件 (documentation)，像是README.MD/修改註解/移除console.log。
style: 格式 (不影響程式碼運行的變動 white-space, formatting, missing semi colons, etc) 或文案調整。
refactor: 重構 (既不是新增功能，也不是修補 bug 的程式碼變動)。
perf: 改善效能 (A code change that improves performance)。
test: 增加/修改測試 (when adding missing tests)。
chore: 建構程序或輔助工具的變動 (maintain)。
revert: 撤銷回覆先前的 commit 例如：revert: type(scope): subject (回覆版本：xxxx)。
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

#### 預設的外部傳入配色表在對外 doc 上也可見，dev 可以從 localstorage 上改色

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

#### 主要是 MacOS default 語言設置下英文語系使用字體不同導致可能破版問題，如果捲軸太多，在 terminal 鍵入下方指令

```bash
defaults write com.google.Chrome AppleLanguages '(en-US)'
```

{% embed url="https://www.zhihu.com/question/22327155" %}
