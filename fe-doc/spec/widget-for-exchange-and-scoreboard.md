# Widget for Exchange and Scoreboard

更新:

2023/1/05 新增 sport book, exchange 商戶優先集群區分

2023/12/27 Feature: score info solution

2023/12/5 後端 api- 商戶比分卡聯賽群設定, 改變比分卡排序敘述

2023/10/19 _比賽優先順位 新增_

2023/09/27: 後端邏輯 新增

2023/09/28: 比分卡Widget.後端 api 進行更改

比分卡顯示的所有賽事資訊由 SportRadar Summary API 提供，後端僅控制顯示的聯賽與比賽排序。

**SR Summary API:**

[https://score.uni247.xyz/?event\_id=41420487\&summary=1\&lang=th](https://score.uni247.xyz/?event\_id=41420487\&summary=1\&lang=th)

* 語言有 th/en/vi/zh/hi
* 提供比賽的資訊：聯賽名稱、隊伍名稱、比分資訊、已進行時間

![](<../.gitbook/assets/0 (2).png>)



**後端邏輯：**

提供需要比分卡的比賽的 event\_id, 回應資料已照既定規則排序

2023/09/27 新增:

新增 sort\_type 來指定排序方式:

| query                  | 排序方式                              |
| ---------------------- | --------------------------------- |
| sort\_type=classic     | 經典排序                              |
| sort\_type=start\_date | 開始時間從小至大, 若開始時間一樣用 event\_id 從小至大 |
| 不帶                     | 經典排序                              |

**api:**

透過 quote/vsb/overall-matches/light/v1/ 傳送值, 參考 [swag](https://webapi.ckex.xyz/dev-f/quote/swagger/index.html#/auth-user/ListVsbOverallMatchesOnlyEvent)

response schema:

{

"type": "object",

"properties": {

"status\_code": {

"type": "integer"

},

"data": {

"type": "array",

"descriptions": "每個單位為一場比賽, 排序是 inplay 在最前面, 接著是否重要聯賽排序, 然後是根據 StartDate 經典排序, 最後根據 eventID 排序",

"items": {

"type": "object",

"properties": {

"tournament\_id": {

"type": "string",

"description": "聯賽 ID, 協助開發檢核資料用"

},

"event\_id": {

"type": "string",

"description": "用這個去拿對應比分卡"

},

"status": {

"type": "string",

"description": "比賽開始 or 還沒開始, 協助開發檢核資料用",

"enum": \["inplay", "notstarted"]

},

"time": {

"type": "string",

"description": "比賽開始時間, 協助開發檢核資料用",

"format": "date-time"

}

},

"required": \[

"tournament\_id",

"event\_id",

"status",

"time"

]

}

}

},

"required": \[

"status\_code",

"data"

]

}

**用 googlesheet 更新:**

於 [google sheet](https://docs.google.com/spreadsheets/d/1mYLCFBJ4XksfusjtoXdWMFonokp0dFO8MaQSPMeXNK8/edit#gid=0) 可以更新需要比分卡的聯賽 ID, 系統會每三分鐘去 google sheet 拿取最新值加入服務。

值會在服務中存活六分鐘。也就是說從 google sheet 上刪除聯賽的話, 服務會在六分鐘後實現該聯賽的刪除。(2023/06/14)

google sheet 編寫邏輯, 系統只處理第一個 columns, 第一個 columns 放需要比分卡的所有聯賽, 所以其他地方可以隨便寫

**比分卡Widget**

外包由喜馬團隊製作，內嵌該元件至LuckySports。

**外包串接文件**\
**提供給外部網站外嵌檔案**\
**2.0:** [**https://polished-candy-369.notion.site/Widget-2-0-LS-scoreboard-ea3b7eaf2d264ed48925d598faf8ce96**](https://polished-candy-369.notion.site/Widget-2-0-LS-scoreboard-ea3b7eaf2d264ed48925d598faf8ce96)

2.1:\
[https://polished-candy-369.notion.site/dbe71862493c4e659a3877356f4bd78f](https://polished-candy-369.notion.site/dbe71862493c4e659a3877356f4bd78f)

**前端改版邏輯：**

將喜馬比分卡專案加入賠率訊源，賠率API由後端新增至quote/vsb/overall-matches/light/v1/

賠率先用mockdata進行，介面顯示調整(Part A./B./C.)

[EX icon.svg](https://drive.google.com/file/d/1No18CsyU8kD31dOCV3Y9TAwqc7PeG8tT/view?usp=drive\_link)-白色icon

[EX-Black icon.svg](https://drive.google.com/file/d/1u97Os2s73A\_0AzkK8\_EzXqOUk7hmKU9G/view?usp=drive\_link)-黑色icon

![](<../.gitbook/assets/1 (1).png>)

其他球種版型：

![](<../.gitbook/assets/2 (1).png>)

套色：\
![](<../.gitbook/assets/3 (1).png>)

**後端 api-比分資料:**

1. 提供用戶要顯示比分卡相關資訊的 event\_id, 讓用戶可透過別的api 拿比分相關資料。
2. 每個event\_id 都會提供對應的 market\_id + 賠率, 顯示於比分卡中。

swag: [https://webapi.ckex.xyz/dev-f/quote/swagger/index.html#/auth-user/ListVsbOverallMatchesOnlyEvent](https://webapi.ckex.xyz/dev-f/quote/swagger/index.html#/auth-user/ListVsbOverallMatchesOnlyEvent)

request data

| field           | type   | describe                                                                                       |
| --------------- | ------ | ---------------------------------------------------------------------------------------------- |
| event\_type\_id | string | 球種 id                                                                                          |
| market\_type    | string | <p>response 攜帶的盤口種類選擇。</p><p>詳細看: 新增: Exchange match odds market for cricket (2023/11/23)</p>  |
| sort\_type      | string | <p>排序方式:</p><p>enum:</p><p>classic</p><p>start_date</p>                                        |
| count           | int    | <p>response最多的單位個數</p><p>len(response.data) &#x3C;= count</p><p>會根據賽事重要程度捉取最重要的 count 場比賽。</p> |
|                 |        |                                                                                                |

**比賽優先捉取順位**

根據request 要求數量, 以比賽的優先捉取順位進行捉取, 直到符合要求數量

若 req.sort\_type 是 start\_date 且 商戶有設定聯賽優先順序至cloudstorage.

1. 商戶設定的聯賽優先:

商戶可以設定他想要的聯賽群, 此聯賽群會優先提供比分卡。 用 後端api-商戶聯賽群設定。

1. 系統服務預設的聯賽集群

else

only 系統服務預設的聯賽集群

**比賽排序:**

根據request.sort\_type 不同有不同排序

classic:

比賽狀態-> 聯賽優先順位 -> 賽事開始時間 -> event\_id

start\_date:

賽事開始時間 -> event\_id

**response schema**

| field        | type         | describe |
| ------------ | ------------ | -------- |
| status\_code | int          |          |
| data         | \[]data\_obj |          |

data\_obj

| field          | type                                                                                | describe |
| -------------- | ----------------------------------------------------------------------------------- | -------- |
| tournament\_id | string                                                                              |          |
| event\_id      | string                                                                              |          |
| status         | string                                                                              | 比賽狀態     |
| time           | <p>string</p><p>format: timestamp to second</p><p>example: 2023-09-29T19:00:00Z</p> | 比賽開始時間   |
| m              | Market                                                                              |          |

**response 新增 M 的 field**

1. M 為一個 Market 的 object, 如同 overall\_match.Response.c\_products\[i] 的格式

可參考schema: [https://docs.google.com/document/d/1IXYTDS1\_xfPjNZalba9hn9VutXW92qaPS10I-4DOIyA/edit#heading=h.5xnbyf7i365o](https://docs.google.com/document/d/1IXYTDS1\_xfPjNZalba9hn9VutXW92qaPS10I-4DOIyA/edit#heading=h.5xnbyf7i365o)

2023/09/28 將 M 的 schema 輕量為:

| field       | type       | describe                                                                       |   |
| ----------- | ---------- | ------------------------------------------------------------------------------ | - |
| Market      |            |                                                                                |   |
| market\_id  | string     | 盤口 id                                                                          |   |
| product     | \[]Product | 盤口擁有的項目                                                                        |   |
|             |            |                                                                                |   |
| Product     |            |                                                                                |   |
| product\_id | string     | 項目 id                                                                          |   |
| status      | string     | <p>該項目狀態</p><p>enum:</p><ul><li>close</li><li>open</li><li>suspended</li></ul> |   |
| o           | float      | 賠率                                                                             |   |

賠率數值所在為 responseData.data\[i].m\[i].product\[i].o

賠率於比分卡所在位置(為 1 or X or 2), 用product\_id (outcome\_id)對應, 參考下方:

event\_type\_id 1; 抽取 1\_ 盤口;

| product\_id | display name |
| ----------- | ------------ |
| 1           | 1            |
| 2           | X            |
| 3           | 2            |
|             |              |

event\_type\_id 4;

抽取 340\_盤口 or 11\_盤口 ;

優先順位是: 340\_, 11\_

| product\_id | display name |
| ----------- | ------------ |
| 4           | 1            |
| 5           | 2            |
|             |              |

其他的 event\_type 還沒有指定要呈現的盤口

1. 如果 該比賽不存在 首頁呈現盤口, 則 response.M 為 \`{}\`。





**example response**

1. **有盤口的資料 (event\_type\_id=1, count=3):**

{ "status\_code": 200, "data": \[ { "tournament\_id": "sr:tournament:18", "event\_id": "41887813-e", "status": "notstarted", "time": "2023-09-29T19:00:00Z", "m": { "market\_id": "1\_51647013", "product": \[ { "product\_id": "1", "status": "open", "o": 3.05 }, { "product\_id": "2", "status": "open", "o": 3.5 }, { "product\_id": "3", "status": "open", "o": 2.4 } ] } }, { "tournament\_id": "sr:tournament:17", "event\_id": "41762961-e", "status": "notstarted", "time": "2023-09-30T11:30:00Z", "m": { "market\_id": "1\_51348677", "product": \[ { "product\_id": "1", "status": "open", "o": 2.52 }, { "product\_id": "2", "status": "open", "o": 3.95 }, { "product\_id": "3", "status": "open", "o": 2.64 } ] } }, { "tournament\_id": "sr:tournament:18", "event\_id": "41887817-e", "status": "notstarted", "time": "2023-09-30T11:30:00Z", "m": { "market\_id": "1\_51953142", "product": \[ { "product\_id": "1", "status": "open", "o": 2.96 }, { "product\_id": "2", "status": "open", "o": 3.7 }, { "product\_id": "3", "status": "open", "o": 2.36 } ] } } ] }

1. **有盤口資料 (event\_type=4, count=3)**

{ "status\_code": 200, "data": \[ { "tournament\_id": "sr:tournament:40981", "event\_id": "43699381-e", "status": "started", "time": "2023-09-28T01:00:00Z", "m": { "market\_id": "340\_52702376", "product": \[ { "product\_id": "4", "status": "open", "o": 1.28 }, { "product\_id": "5", "status": "open", "o": 3.9 } ] } }, { "tournament\_id": "sr:tournament:40981", "event\_id": "43699365-e", "status": "notstarted", "time": "2023-09-28T06:00:00Z", "m": { "market\_id": "340\_52701830", "product": \[ { "product\_id": "4", "status": "open", "o": 12.5 }, { "product\_id": "5", "status": "open", "o": 1.04 } ] } }, { "tournament\_id": "sr:tournament:40747", "event\_id": "43048229-e", "status": "notstarted", "time": "2023-09-28T07:30:00Z", "m": { "market\_id": "340\_52304209", "product": \[ { "product\_id": "4", "status": "open", "o": 1.72 }, { "product\_id": "5", "status": "open", "o": 2.18 } ] } } ] }

1. **沒盤口的資料**

{

"status\_code": 200,

"data": \[

{

"tournament\_id": "sr:tournament:486",

"event\_id": "43656037-e",

"status": "notstarted",

"time": "2023-09-14T00:00:00Z",

"m": {}

},

{

"tournament\_id": "sr:tournament:486",

"event\_id": "43656041-e",

"status": "notstarted",

"time": "2023-09-14T02:00:00Z",

"m": {}

}

]

}





**後端 api- 商戶比分卡聯賽群設定**

商戶設定自己想要的比分卡聯賽集群, 集群中的聯賽的比賽比分卡會優先顯示於前端。

邏輯:

若商戶設定過優先集群, 怎再取賽事時, 會有先取商戶所指定的聯賽集群。再取系統預設的聯賽集群。 ( 集群間有優先順序, 集群內沒有 )

為了與舊版本相容，設定空白為order\_class的選項之一。

**url:** /quote/merchant/tournaments/

**權限:** header 帶 商戶 token

**data:**

tournaments

type: \[]string

陣列中的每個字串為聯賽ID ex: sr:tournament:3

這個陣列代表商戶想要設定的聯賽集群

get 得取商戶的聯賽表 [swag](https://webapi.ckex.xyz/dev-f/quote/swagger/index.html#/auth-merchant/listTournamentsForScoreAPI)

request body:

| field        | type   | descript                                                |
| ------------ | ------ | ------------------------------------------------------- |
| order\_class | string | <p>提供sportbook, exchange和空白三個選項</p><p>分別對應該商戶創建的聯賽表</p> |

response:

200:

| field     | type                              | descript    |
| --------- | --------------------------------- | ----------- |
| InStore   | <p>[]string</p><p>tournaments</p> | 在靜態存儲中的聯賽集群 |
| InService | <p>[]string</p><p>tournaments</p> | 在服務中暫存的聯賽集群 |
|           |                                   |             |

post 更新商戶的聯賽表 [swag](https://webapi.ckex.xyz/dev-f/quote/swagger/index.html#/auth-merchant/updateTournamentsForScoreAPI)

商戶透過這個 api 將 想要的聯賽集群更新至 cloud storage。 在cloud storage 會以 json file 的個是進行存放。

request body:

| field        | type                              | descript                     |
| ------------ | --------------------------------- | ---------------------------- |
| tournaments  | <p>[]string</p><p>tournaments</p> |                              |
| order\_class | string                            | 提供sportbook, exchange和空白三個選項 |

request body example:

{

tournaments: \["sr:tournament:1", "sr:tournament:2"]

}

response

201

cloud storage file path:

目前並存三種路徑模式。

| file path                                                                            | description                                                    |
| ------------------------------------------------------------------------------------ | -------------------------------------------------------------- |
| merchant\_document\_for\_service/score\_card\_tournament/{merchant\_code}            | 在 下一版本前, 一個商戶只會有一種優先集群, 並沒做類別區分。 所以單用 merchant\_code 做檔案名稱的命名。 |
| 以下為 2023/1/04 後版本, 優先集群設定同商戶下會有不同的集群。                                                |                                                                |
| merchant\_document\_for\_service/score\_card\_tournament/{merchant\_code}\_sportbook | 商戶下 sport book 的優先集群檔                                          |
| merchant\_document\_for\_service/score\_card\_tournament/{merchant\_code}\_exchange  | 商戶下 exchange 的優先集群檔                                            |









**Exchange Widget**

**新增: Exchange match odds market for cricket (2023/11/23)**

**出圖：**\
[**Widget- Exchange Odds board**](https://xd.adobe.com/view/d46197fa-3eef-4404-b6b4-d9962c5ccd8d-8132/)

**欄位：**\
![](<../.gitbook/assets/4 (1).png>)

**套色：**

![](<../.gitbook/assets/5 (1).png>)

**後端 api:**

swag: [https://webapi.ckex.xyz/dev-f/quote/swagger/index.html#/auth-user/ListVsbOverallMatchesOnlyEvent](https://webapi.ckex.xyz/dev-f/quote/swagger/index.html#/auth-user/ListVsbOverallMatchesOnlyEvent)

新增 market\_type 參數。

market\_type 選項

| market\_type | descript               | example                                                                                                                             |
| ------------ | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| match\_odds  | 拿取 matches odds 的盤口與賠率 | [http://{HOST\_NAME}/{STAGE}/quote/vsb/overall-matches/light/v1/?event\_type\_id=4\&market\_type=match\_odds\&count=3](about:blank) |
| 不填           | sport book 賠率          | [http://{HOST\_NAME}/{STAGE}/quote/vsb/overall-matches/light/v1/?event\_type\_id=4\&count=3](about:blank)                           |

目前 market\_type=match\_odds 只提供板球 (event\_type\_id=4)。 若帶其他event\_type 會直接給 sport book 盤口與賠率(在此更新前的版本)。

market\_type=match\_odds 情況下, 回傳資料會有新增欄位:

新增位置: data\[i].m.product\[i]

| 欄位 | descript |
| -- | -------- |
| lo | lay 的賠率  |
| bq | back 的量  |
| lq | lay的量    |
|    |          |
|    |          |

data example:

request GET

[http://{HOST\_NAME}/{STAGE}/quote/vsb/overall-matches/light/v1/?event\_type\_id=4\&market\_type=match\_odds\&count=3](about:blank)

response 200:

{"status\_code":200,"data":\[{"tournament\_id":"sr:tournament:38239","event\_id":"45600056-e","status":"notstarted","time":"2023-11-23T07:30:00Z","m":{"market\_id":"340\_56891931","product":\[{"product\_id":"4","status":"open","o":1.69,"lo":1.71,"bq":"5917","lq":"17100"},{"product\_id":"5","status":"open","o":2.4,"lo":2.46,"bq":"4166","lq":"24600"}]\}},{"tournament\_id":"sr:tournament:21570","event\_id":"42343671-e","status":"notstarted","time":"2023-11-23T08:10:00Z","m":{"market\_id":"340\_56725107","product":\[{"product\_id":"4","status":"open","o":1.77,"lo":1.79,"bq":"5649","lq":"17900"},{"product\_id":"5","status":"open","o":2.26,"lo":2.3,"bq":"4424","lq":"23000"}]\}},{"tournament\_id":"sr:tournament:36027","event\_id":"45560430-e","status":"notstarted","time":"2023-11-23T09:30:00Z","m":{"market\_id":"340\_56895182","product":\[{"product\_id":"4","status":"open","o":2.06,"lo":2.1,"bq":"4854","lq":"21000"},{"product\_id":"5","status":"open","o":1.91,"lo":1.93,"bq":"5235","lq":"19300"}]\}}]}

