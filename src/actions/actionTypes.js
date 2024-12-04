//cricket quote api - GET
export const GET_TO_WIN_THE_TOSS = 'GET_TO_WIN_THE_TOSS';

// exchange order api - GET
export const GET_USERS_PLACE_ORDERS = 'GET_USERS_PLACE_ORDERS';
export const GET_USERS_CANCEL_ORDERS = 'GET_USERS_CANCEL_ORDERS';
export const GET_USERS_UNMATCHED_ORDERS = 'GET_USERS_UNMATCHED_ORDERS';
export const GET_USERS_MATCHED_ORDERS = 'GET_USERS_MATCHED_ORDERS';
export const GET_USERS_SETTLE_ORDERS = 'GET_USERS_SETTLE_ORDERS';

// exchange order for statement api - GET
export const GET_USERS_STATEMENT_PLACE_ORDERS =
  'GET_USERS_STATEMENT_PLACE_ORDERS';
export const GET_USERS_STATEMENT_MATCHED_ORDERS =
  'GET_USERS_STATEMENT_MATCHED_ORDERS';
export const GET_USERS_STATEMENT_SETTLE_ORDERS =
  'GET_USERS_STATEMENT_SETTLE_ORDERS';
export const GET_USERS_PAYOUT = 'GET_USERS_PAYOUT';

// exchange order api - POST
export const POST_CREATE_ORDER = 'POST_CREATE_ORDER';
export const POST_USER_CANCEL_ORDER = 'POST_USER_CANCEL_ORDER';

// bookmaker h2h order api - GET
export const GET_USERS_H2H_PLACE_ORDERS = 'GET_USERS_H2H_PLACE_ORDERS';
export const GET_USERS_H2H_SETTLE_ORDERS = 'GET_USERS_H2H_SETTLE_ORDERS';

// bookmaker h2h order for statement api - GET
export const GET_USERS_STATEMENT_H2H_PLACE_ORDERS =
  'GET_USERS_STATEMENT_H2H_PLACE_ORDERS';
export const GET_USERS_STATEMENT_H2H_SETTLE_ORDERS =
  'GET_USERS_STATEMENT_H2H_SETTLE_ORDERS';
export const GET_USERS_H2H_PAYOUT = 'GET_USERS_H2H_PAYOUT';

// bookmaker h2h order api - POST
export const POST_CREATE_BOOK_MAKER_PLACE_ORDER =
  'POST_CREATE_BOOK_MAKER_PLACE_ORDER';

// 3.0 c product order api - POST
export const POST_CREATE_MANY_PLACE_ORDER = 'POST_CREATE_MANY_PLACE_ORDER';
export const RESET_CREATE_MANY_PLACE_ORDER = 'RESET_CREATE_MANY_PLACE_ORDER';

// 國際版下單 parlay and single 用  api - POST
export const POST_CRATE_ORDER_INTERNATIONAL = 'POST_CRATE_ORDER_INTERNATIONAL';
export const RESET_CRATE_ORDER_INTERNATIONAL =
  'RESET_CRATE_ORDER_INTERNATIONAL';

// fancy t3 order api - GET
export const GET_USERS_T3_PLACE_ORDERS = 'GET_USERS_T3_PLACE_ORDERS';
export const GET_USERS_T3_SETTLE_ORDERS = 'GET_USERS_T3_SETTLE_ORDERS';

// fancy t3 order for statement api - GET
export const GET_USERS_STATEMENT_T3_PLACE_ORDERS =
  'GET_USERS_STATEMENT_T3_PLACE_ORDERS';
export const GET_USERS_STATEMENT_T3_SETTLE_ORDERS =
  'GET_USERS_STATEMENT_T3_SETTLE_ORDERS';
export const GET_USERS_T3_PAYOUT = 'GET_USERS_T3_PAYOUT';

// fancy t3 order api - POST
export const POST_CREATE_FANCY_ORDER = 'POST_CREATE_FANCY_ORDER';

// wallet api - GET
export const GET_USERS_WALLET = 'GET_USERS_WALLET';
export const GET_USERS_WALLET_LOG_ALL = 'GET_USERS_WALLET_LOG_ALL';
export const GET_USERS_WALLET_LOG_DEPOSIT_WITHDRAW =
  'GET_USERS_WALLET_LOG_DEPOSIT_WITHDRAW';
export const GET_USER_MAX_EXPOSURE = 'GET_USER_MAX_EXPOSURE';
export const GET_USER_POTENTIAL_WINNINGS = 'GET_USER_POTENTIAL_WINNINGS';

// top-traders, copy-trading api - GET
export const GET_TOP_TRADERS = 'GET_TOP_TRADERS';

// order book websocket api
export const GET_ORDERBOOK = 'GET_ORDERBOOK';

// order book homepage api for v3
export const GET_ALL_ORDERBOOK_V3 = 'GET_ALL_ORDERBOOK_V3';
// order book homepage api for v3
export const SET_ALL_ORDERBOOK_V3 = 'SET_ALL_ORDERBOOK_V3';
// order book homepage api for v3
export const UPDATE_ALL_ORDERBOOK_V3 = 'UPDATE_ALL_ORDERBOOK_V3';
export const SAVE_TO_EXCHANGE_ORDERBOOK = 'SAVE_TO_EXCHANGE_ORDERBOOK';
export const SAVE_TO_BOOKMAKER_ORDERBOOK = 'SAVE_TO_BOOKMAKER_ORDERBOOK';

// bookmaker h2h order book websocket api
export const GET_BOOK_MAKER_ORDERBOOK = 'GET_BOOK_MAKER_ORDERBOOK';

// fancy t3 order book websocket api
export const GET_FANCY_ORDERBOOK = 'GET_FANCY_ORDERBOOK';

// c markets order book websocket api
export const GET_C_MARKET_ORDERBOOK = 'GET_C_MARKET_ORDERBOOK';

//v3 Orderslip 取得status and price
export const SET_STATUS_AND_PRICE = 'SET_STATUS_AND_PRICE';
export const SET_EX_STATUS_AND_PRICE = 'SET_EX_STATUS_AND_PRICE';

//點擊 Product 儲存該筆資料到OrderSlip
export const SAVE_TO_ORDERSLIP = 'SAVE_TO_ORDERSLIP';
export const SAVE_TO_EXCHANGE_ORDERSLIP = 'SAVE_TO_EXCHANGE_ORDERSLIP';

//設定 single or parlay 模式
export const SET_PLACE_ORDER_MODE = 'SET_PLACE_ORDER_MODE';
export const SET_PLACE_ORDER_MODE1 = 'SET_PLACE_ORDER_MODE1';
export const SET_TARGET_PARLAY_STAKE = 'SET_TARGET_PARLAY_STAKE';
export const RESET_TARGET_PARLAY_STAKE = 'RESET_TARGET_PARLAY_STAKE';

// 點擊 confirm 回傳 confirm boolean
export const SET_ORDERSLIP_CONFIRM = 'SET_ORDERSLIP_CONFIRM';
export const SET_EXORDERSLIP_CONFIRM = 'SET_EXORDERSLIP_CONFIRM';

//點擊後傳送該筆資料到頁面或元件
export const SEND_INFO = 'SEND_INFO';

// 設定state 當state改變，資料會回傳給cricket page的 event裡面去改變 array，讓資料重新渲染
export const SET_STARTED_MATCHLIST_STATE = 'SET_STARTED_MATCHLIST_STATE';
export const SET_NOTSTARTED_MATCHLIST_STATE = 'SET_NOTSTARTED_MATCHLIST_STATE';

//設定state 點擊confirm ，傳送Stack資料到notification
export const SAVE_TO_NOTIFICATION = 'SAVE_TO_NOTIFICATION';
export const SAVE_TO_EXCHANGE_NOTIFICATION = 'SAVE_TO_EXCHANGE_NOTIFICATION';
export const NOTIFICATION_OPEN = 'NOTIFICATION_OPEN';
export const SET_SECURITY_STATUS = 'SET_SECURITY_STATUS';

//設定 state 裝取要給ExchangeProduct 曝險用的資料Fst,sec,Third 是選到第幾隊伍
export const SAVE_TO_EXCHANGE_PRODUCT_FST = 'SAVE_TO_EXCHANGE_PRODUCT_FST';
export const SAVE_TO_EXCHANGE_PRODUCT_SEC = 'SAVE_TO_EXCHANGE_PRODUCT_SEC';
export const SAVE_TO_EXCHANGE_PRODUCT_THIRD = 'SAVE_TO_EXCHANGE_PRODUCT_THIRD';

//設定 state 控制exchangeProdcut 的orderslipopen的顯示
export const SET_PRODUCT_ORDERSLIP_OPEN_FST = 'SET_PRODUCT_ORDERSLIP_OPEN_FST';
export const SET_PRODUCT_ORDERSLIP_OPEN_SEC = 'SET_PRODUCT_ORDERSLIP_OPEN_SEC';
export const SET_PRODUCT_ORDERSLIP_OPEN_THIRD =
  'SET_PRODUCT_ORDERSLIP_OPEN_THIRD';

// 點擊星號後，儲存當筆資料到 watchlist
export const SAVE_TO_WATCHLIST = 'SAVE_TO_WATCHLIST';

// 當state改變，exchage的fetch重新fetch一次
export const SET_EXCHANGE_EXPOSURE_UPDATE = 'SET_EXCHANGE_EXPOSURE_UPDATE';

// to-win-the-toss 下單 - POST
export const POST_TO_WIN_THE_TOSS = 'POST_TO_WIN_THE_TOSS';

// to-win-the-toss settle order ORDERLIST 用 - GET
export const GET_TO_WIN_THE_TOSS_LIST_SETTLE_ORDER =
  'GET_TO_WIN_THE_TOSS_LIST_SETTLE_ORDER';

// to-win-the-toss place order ORDERLIST 用 - GET
export const GET_TO_WIN_THE_TOSS_LIST_PLACE_ORDER =
  'GET_TO_WIN_THE_TOSS_LIST_PLACE_ORDER';

// x h2h and t3 的 profit loss or exposure and potential winning 都用這隻
export const GET_P_AND_L_TO_MARKET = 'GET_P_AND_L_TO_MARKET';
// to-win-the-toss payout STATEMENT 用 - GET
export const GET_TO_WIN_THE_TOSS_STATEMENT_LIST_PAYOUT =
  'GET_TO_WIN_THE_TOSS_STATEMENT_LIST_PAYOUT';

// to-win-the-toss place order STATEMENT 用 - GET
export const GET_TO_WIN_THE_TOSS_STATEMENT_LIST_PLACE_ORDER =
  'GET_TO_WIN_THE_TOSS_STATEMENT_LIST_PLACE_ORDER';

export const TOKEN_INVALID = 'TOKEN_INVALID';
export const TOKEN_EXPIRED = 'TOKEN_EXPIRED';
export const SET_MIN_BET = 'SET_MIN_BET';
//set device pixel
export const SET_DEVICE_PIXEL = 'SET_DEVICE_PIXEL';
//set device pixel
export const SET_MAIN_CONTAINER_PIXEL = 'SET_MAIN_CONTAINER_PIXEL';

// set sortedType
export const SET_SORTED_TYPE = 'SET_SORTED_TYPE';

// set firebase performance status
export const SET_PERFORMANCE_INFO = 'SET_PERFORMANCE_INFO';

// set SEON response / config state
export const SET_SEON_RESPONSE_STATE = 'SET_SEON_RESPONSE_STATE';
export const SET_SEON_CONFIG_STATE = 'SET_SEON_CONFIG_STATE';
export const RESET_SEON_RESPONSE_STATE = 'RESET_SEON_RESPONSE_STATE';
// export const SET_SEON_SECURITY_STATUS = 'SET_SEON_SECURITY_STATUS';
export const SET_V1_BUTTON_ONCLICK = 'SET_V1_BUTTON_ONCLICK';
export const SET_ORDER_FORM_DATA_INFO_TO_V1 = 'SET_ORDER_FORM_DATA_INFO_TO_V1';

// save/clear inplayStreaming 影片 404 的 event ID List
export const SAVE_INPLAY_STREAM_FAILED_EVENT_ID_LIST =
  'SAVE_INPLAY_STREAM_FAILED_EVENT_ID_LIST';
export const CLEAR_INPLAY_STREAM_FAILED_EVENT_ID_LIST =
  'CLEAR_INPLAY_STREAM_FAILED_EVENT_ID_LIST';

// get quicklink filter - GET
export const GET_QUICKLINK_FILTER = 'GET_QUICKLINK_FILTER';
// set streaming fullscreen
export const SET_STREAMING_FULLSCREEN = 'SET_STREAMING_FULLSCREEN';
// set lmt footer V3
export const SET_LMT_FOOTER_V3 = 'SET_LMT_FOOTER_V3';

// createOrderHandler
export const SET_CREATE_ORDER_HANDLER = 'SET_CREATE_ORDER_HANDLER';
export const CLEAN_ORDER_HANDLER = 'CLEAN_ORDER_HANDLER';

// set vci priceWS res
export const SET_VCI_PRICE_RES = 'SET_VCI_PRICE_RES';
