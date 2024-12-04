# mts order schema and Logic

[resource](https://docs.google.com/document/d/1t1WK5dY-Ugv-kHbhVmrUVJT8RlqAAiYROyLPBYlfD70/edit#heading=h.b4gu5pq60a1s)

#### Logic <a href="#gq3wkd9g0wej" id="gq3wkd9g0wej"></a>

**下單後 是否valid 邏輯**

整個結果全部都由 resultDisplay呈現。

resultDisplay.Code 代表該次下單成功或失敗 ( valid success or failed )

resultDisplay.betResultDisplay 代表該次下單的每個單位, 其中:

Code: 代表該單位是否 valid 的

showErrMsg: 該次下單錯誤時顯示在單位上面的 訊息

resultDisplay.Code 顯示錯誤有可能是 betResultDisplay 中有不valid的單位, 但也有可能是其他問題。例如 -995 代表的是 ticketID 於 mts 中重複。所以會出現 resultDisplay.Code 為負, 但是 resultDisplay.betResultDisplay中沒有出現負的code。

**交易所-主盤 lay 單轉換成 mts ticket 進行 mts valid**

mts 是針對 **sport book** 進行單的合理性與風險評估, 來判斷是否可以接收這張單。sport book 中不存在 lay 的概念。 當要將 交易所 lay 送 mts 驗證時就需要進行轉換。

lay 的概念是 “選項不會發生”, 反過來說就是其他選項中的其中一項會發生, 會發生在交易所中為 back, 也是 sport book 中的標的。 所以針對一張 lay 單, 把它拆成一個或數個 (指定選項外的其他選項) 的sport book 單送往 mts。

拆單的某些事項:

odds: 用其他選項當前的賠率

stake: 根據 賠率來比例的拆分遠本訪問中的 stake, [公式參考文件](https://docs.google.com/document/d/1h0OhejfLAp-AYjZXmc3AaGkl\_HRwIhigaczc7mTKuJI/edit). 在mts 下單驗證中的 Lay 單

**交易所-Fancy 賠率轉換**

服務中 fancy 的顯示樣式並非歐賠 ( mts 慣用的賠率格式 )。 因此要將 fancy 單送 mts 驗證, 需要把對賠率進行轉換。

公式為:

fancy back odd:

fancy lay odd

#### Schema Properties Describe <a href="#xd2293fbsvby" id="xd2293fbsvby"></a>

將 Schema 中需要特別強調的項目進行介紹

**/Order.type:**

| value       | 所屬的單種         | describe                  |
| ----------- | ------------- | ------------------------- |
| bypass      | sport book    | 不經過 mts 驗證直接進入下單流程的單      |
| ckex        | sport book    | 正式環境, 進行驗證下單全流程的單         |
| ckex-pre    | sport book    | 正式環境, 測試商戶用戶, 進行驗證下單全流程的單 |
| ckex-dev    | sport book    | 測試環境, 進行驗證下單全流程的單         |
| Fancy       | 交易所 - Fancy 單 |                           |
| Chloe order | 交易所 - 主盤 單    |                           |
|             |               |                           |

#### &#x20;<a href="#ua00bxt2h2ce" id="ua00bxt2h2ce"></a>

#### Schema <a href="#ebjjqnas134v" id="ebjjqnas134v"></a>

**/Order**

{

"type": "object",

"properties": {

"id": {

"description": "pub sub 得 msg ID",

"type": "string"

},

"type": {

"type": "string",

"description": "單字的類別, bypass 代表不送mts 驗證; Fancy 代表是 fancy 單, ckex-pre, ckex-dev, ckex 代表不同環境下面, 要送 mts 驗證的單。進入 mts service 服務前就被定義。",

"enum": \["bypass", "Fancy", "ckex-pre", "ckex-dev", "ckex"]

},

"status": {

"type": "string",

"description": "當前單所在的生命週期。 目前觀測只出現三個結果(2023/06/02): a. cancelled: 下單不成功, 所以取消。 b. completed: 下單成功, 完成。 c. pending: 還在跑mts驗證。 d. processing: mts驗證完正在跑下單。",

"enum": \[ "failed", "cancelled", "on-hold", "pending", "processing", "completed"]

},

"merchantCode": {

"type": "string"

},

"username": {

"type": "string"

},

"ip": {

"type": "string"

},

"userId": {

"type": "string"

},

"originTicket": {

"type": "object",

"description": "從 oms 訊息的 Ticket 複製的內容",

"properties": {

}

},

"ticket": {

"type": "object",

"description": "送往 mts 的 ticket",

"properties": {

}

},

"ckexOrder": {

"type": "object",

"properties": {

}

},

"details": {

"type": "array",

"description": "可能棄用",

"items": {

"type": "object",

"properties": {

},

"additionalProperties": false

}

},

"cancelledCode": {

"type": "integer",

"description": "不一定會有這個key, 若出現就代表這張單是失敗的, 當負數時, 代表是 mts 拒絕; 當數字為正時, 代表是服務錯誤或系統下單拒絕。不會有102。"

},

"createdAt": {

"type": "string",

"description": "我們 mts service 接收到注單訊息的時間" ,

"format": "date-time"

},

"updatedAt": {

"type": "string",

"format": "date-time"

},

"isAutoAcceptedOdds": {

"type": "boolean"

},

"waitProcessTime": {

"type": "integer",

"description": "不知道是幹嘛ㄉ"

},

"mtsResult": {

"type": "object",

"description": "mts 回傳的資料集合, 包括原始回傳資訊與整理過後的資訊在完全沒獲得任何 mtsResult 資訊時會呈現 /wrongResult, 但目前理論上不會出現",

"properties": {

},

"additionalProperties": false

},

"alternativeData": {

"type": "object",

"description": "過去的設計, 評估棄用中",

"properties": {

},

"additionalProperties": false

},

"Remark": {

"type": "string",

"description": "不知道是幹嘛ㄉ"

},

"betResults": {

"type": "object",

"description": "給前端顯示的下單結果資訊",

"properties": {

"$ref": "/resultDisplay"

},

"additionalProperties": false

}

}

}

**/resultDisplay**

{

"definitions": {

"betResultDisplay": {

"type": "object",

"properties": {

"betId": {

"description": "在oms 定義的 id, 每個下注都會有一個專屬的id, 同一個下單請求的所有注都會有相同的id 前綴。 id 的 格式為 ‘{下單請求的專屬ID}\_{流水號}’. 流水號從0 開始。example: 假如一個下單請求有三個注, 三個注的ID 分別會為 ‘asdjas\_0’,‘asdjas\_1’, ‘asdjas\_2’。",

"type": "string"

},

"success": {

"description": "該注於mts 判定是成功或失敗, 成功為true, 失敗為false ",

"type": "boolean"

},

"code": {

"description": "負號代表 mts 的給的否決代碼, 對應mts 文件可以找到對應代碼的意義。 ‘2048’ 代表成功的bet 。",

"type": "integer"

},

"showErrMsg": {

"description": "該注錯誤的話, 於前端顯示的訊息",

"type": "string"

},

"isAlternativeStake": {

"description": "該注是否要變動注額, 目前當 mts 給予的 cancel code 為 -308, -511, -512, -513, -701, -702, -703, -711, -712, -713, -721, -722, -723 時, isAlternativeStake 會為 true。",

"type": "boolean"

},

"alternativeStake": {

"description": "該注如果要變動注額的話, 建議注額數值。配合 isAlternativeStake",

"type": "integer"

}

}

}

},

"type": "object",

"properties": {

"betResultDisplay": {

"type": "array",

"description": "回饋給前端每個注 (bet) 的下單驗證與下單結果, **排列順序符合前端 request payload 的 bet 順序**",

"items": {

"$ref": "#/definitions/betResultDisplay"

}

},

"code": {

"type": "integer",

"description": "負號代表 mts 的給的否決代碼, 對應mts 文件可以找到對應代碼的意義。若是 code值大於1000且非2的冪, 代表為服務錯誤。參照mts 服務錯誤碼錶 [https://docs.google.com/spreadsheets/d/11CuaBZ\_68Evg-7X36k\_7O0jo0vexm\_UCVycm7Cgay4k/edit#gid=2085977763](https://docs.google.com/spreadsheets/d/11CuaBZ\_68Evg-7X36k\_7O0jo0vexm\_UCVycm7Cgay4k/edit#gid=2085977763)"

},

"detailCode": {

"type": "string",

"description": "從Order.CancelCode 與 mtsResult.CancelCode 紀錄錯誤。 將所有 >1000 且 非2的冪的 code 全部在此紀錄。 工程用 "

}

}

}

**/Ticket**

{

"type": "object",

"properties": {

"TimestampUtc": {

"type": "integer",

"format": "int64",

"description": "Timestamp in UTC"

},

"Bets": {

"type": "array",

"items": {

"type": "object",

"properties": {

"$ref": "#/definitions/Bet"

}

}

},

"TicketId": {

"type": "string",

"description": "Unique ticket ID. Must be different each time"

},

"Selections": {

"type": "array",

"items": {

"$ref": "#/definitions/Selection"

}

},

"Sender": {

"$ref": "#/definitions/Sender"

},

"Version": {

"type": "string",

"description": "Current MTS version is 2.3. Fixed: 2.3"

},

"OddsChange": {

"type": "string",

"description": "Fixed. Front-end will provide 'higher'",

"default": "higher"

}

},

"required": \["TimestampUtc", "Bets", "TicketId", "Selections", "Sender", "Version"],

"definitions": {

"Stake": {

"type": "object"

},

"SelectionRefs": {

"type": "object",

"properties": {

"SelectionIndex": {

"type": "integer"

}

},

"required": \["SelectionIndex"]

},

"Selection": {

"type": "object"

},

"Sender": {

"type": "object"

},

"Bets": {

"type": "object",

"properties": {

"Stake": {

"$ref": "#/definitions/Stake"

},

"Id": {

"type": "string",

"description": "在oms 定義的 id, 每個下注都會有一個專屬的id, 同一個下單請求的所有注都會有相同的id 前綴。 id 的 格式為 ‘{下單請求的專屬ID}\_{流水號}’. 流水號從0 開始。example: 假如一個下單請求有三個注, 三個注的ID 分別會為 ‘asdjas\_0’,‘asdjas\_1’, ‘asdjas\_2’。"

},

"SelectedSystems": {

"type": "array",

"items": {

"type": "integer"

},

"description": "表示哪一種bet 的 標的組合"

},

"SelectionRefs": {

"type": "array",

"description": "這個下單請求中, 相關盤口的資訊",

"items": {

"$ref": "#/definitions/SelectionRefs"

}

}

},

"required": \["Stake", "Id", "SelectedSystems", "SelectionRefs"]

}

}

}

**/wrongResult**

{

"type": "object",

"properties": {

"result": {

"type": "string",

"enum": \[

"mts no respond"

]

}

},

"required": \["result"]

}

**/mtsResult**

{

"type": "object",

"properties": {

"Status": {

"type": "string",

"description": "mts 驗證後整個單驗證結果狀態",

"enum": \["accepted", "rejected"]

},

"Details": {

"type": "array",

"description": "看起來沒用",

"items": {

"$ref": "#/definitions/Details"

}

},

"SourceTicket": {

"description": "看起來沒用",

"$ref": "#/definitions/Ticket"

},

"CancelledCode": {

"type": "integer",

"format": "int32",

"description": "當負數時, 代表是 mts 拒絕; 正的數字若是102 代表sport readar 回應時間超過設定時間,直接繞過mts 進行下單, 若是其他正整數代表服務出問題。0 代表mts 承認可以過, 進行下單。"

},

"ReceiveMsgTicket": {

"$ref": "/ReceiveMessageTicket"

},

"ChangeOddsOrderList": {

"type": "array",

"items": {

"$ref": "#/definitions/AutoAcceptedOddsListByMTS"

}

},

"IsValidate": {

"type": "boolean",

"descritpion": "true 代表有經過mts 驗證, false 代表沒有"

}

},

"required": \["Status", "ReceiveMsgTicket", "ChangeOddsOrderList", "IsValidate"],

"definitions": {

"Details": {

"type": "object",

"description": "看起來很奇怪, bet 不該綁定一個 empid",

"properties": {

"betId": {

"type": "string"

},

"eventId": {

"type": "string"

},

"marketId": {

"type": "string"

},

"productId": {

"type": "string"

},

"odds": {

"type": "integer",

"format": "int32"

},

"reason": {

"$ref": "#/definitions/RejectedReason"

},

"stakeValue": {

"type": "integer",

"format": "int32"

}

},

"required": \["betId", "event\_id", "market\_id", "product\_id", "odds", "reason", "stakeValue"]

},

"RejectedReason": {

"type": "object",

"properties": {

"code": {

"type": "integer",

"format": "int32"

},

"message": {

"type": "string"

}

},

"required": \["code", "message"]

},

"AutoAcceptedOddsListByMTS": {

"type": "object",

"properties": {

"event\_id": {

"type": "string",

"description": "event\_id"

},

"market\_id": {

"type": "string",

"description": "market\_id"

},

"product\_id": {

"type": "string",

"description": "product\_id"

},

"new\_odds": {

"type": "string",

"description": "new\_odds"

},

"old\_odds": {

"type": "string",

"description": "old\_odds"

}

},

"required": \["event\_id", "market\_id", "product\_id", "new\_odds", "old\_odds"]

}

}

}

**/ReceiveMessageTicket**

{

"type": "object",

"description": "從sport radar MTS 回傳的 receive ticket 原始訊息",

"properties": {

"result": {

"$ref": "#/definitions/Result"

},

"autoAcceptedOdds": {

"type": "array",

"items": {

"$ref": "#/definitions/AutoAcceptedOdds"

}

}

},

"required": \["result", "autoAcceptedOdds"],

"definitions": {

"Result": {

"type": "object",

"properties": {

"ticketId": {

"type": "string"

},

"status": {

"type": "string",

"enum": \["accept", "reject"]

},

"reason": {

"$ref": "#/definitions/Reason"

},

"betDetails": {

"type": "array",

"items": {

"$ref": "#/definitions/BetDetails"

}

}

},

"required": \["ticketId", "status", "reason", "betDetails"]

},

"Reason": {

"type": "object",

"properties": {

"code": {

"type": "integer",

"description": "mts 回傳的 驗證結果 code, 對應mts文件"

},

"message": {

"type": "string"

}

},

"required": \["code", "message"]

},

"BetDetails": {

"type": "object",

"properties": {

"betId": {

"type": "string",

"description": "在oms 定義的 id, 每個下注都會有一個專屬的id, 同一個下單請求的所有注都會有相同的id 前綴。 id 的 格式為 ‘{下單請求的專屬ID}\_{流水號}’. 流水號從0 開始。example: 假如一個下單請求有三個注, 三個注的ID 分別會為 ‘asdjas\_0’,‘asdjas\_1’, ‘asdjas\_2’。"

},

"reason": {

"$ref": "#/definitions/Reason"

},

"selectionDetails": {

"type": "array",

"items": {

"$ref": "#/definitions/SelectionDetails"

}

},

"alternativeStake": {

"$ref": "#/definitions/AlternativeStake"

}

},

"required": \["betId", "reason", "selectionDetails", "alternativeStake"]

},

"AlternativeStake": {

"type": "object",

"properties": {

"stake": {

"type": "integer"

}

},

"required": \["stake"]

},

"SelectionDetails": {

"type": "object",

"properties": {

"selectionIndex": {

"type": "integer"

},

"reason": {

"$ref": "#/definitions/Reason"

}

},

"required": \["selectionIndex", "reason"]

},

"AutoAcceptedOdds": {

"type": "object",

"properties": {

"selectionIndex": {

"type": "integer"

},

"requestedOdds": {

"type": "integer"

},

"usedOdds": {

"type": "integer"

}

},

"required": \["selectionIndex", "requestedOdds", "usedOdds"]

}

}

}

**CkexOrder**

{

"type": "object",

"properties": {

"type": {

"type": "string",

"description": "對服務下單的類型，在mts服務目前受影響的accept high odds，ToWinTheTossBookmaker，SingleOrParlay兩種類型的會接受mts回復得較高賠率。",

"oneOf": \["FullTimeResult", "FullTimeResultBookmaker", "Fancy", "Bookmaker", "Cashout", "ToWinTheTossBookmaker", "SingleOrParlay"]

},

"token": {

"type": "string",

"description": "使用者的 token"

},

"payload": {

"type": "object",

"description": "ckex order create 的 post request body，詳細參照 [ckex create order 文件](https://docs.google.com/document/d/1U6\_E7--NN2vp5LgamXifASVSIm\_6c1CuxbaFnOKG1jQ/edit)。"

},

"response": {

"type": "object",

"description": "ckex order create 的 post response，Order.CancelCode 和 Order.BetResult.Code會根據 response 給予對應的 code，詳情查詢 code 意義 對照表。response 內容詳細參照 ckex create order 文件"

}

}

}

**/附件**

[code 表](https://docs.google.com/spreadsheets/d/11CuaBZ\_68Evg-7X36k\_7O0jo0vexm\_UCVycm7Cgay4k/edit#gid=2085977763)
