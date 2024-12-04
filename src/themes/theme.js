import {
  primaryBackgroundColor,
  secondaryBackgroundColor,
  primaryColor,
  secondaryColor,
  textPrimaryColor,
  textSecondaryColor,
  quickLinkBorderColor,
  thirdColor,
} from '../utils/initialThemeColor';
// 全站RWD的偵測寬度

//pc版的設置
const pixel = { b: '768px', c: '1440px', d: '1920px' ,e: '2048px',f: '3840px'};

// 套用全站樣式所使用的變數
const theme = {
  // 全站主色調
  color: 'black',
  pixel,

  iconBgNoRepeat: (themeColor, icon) => {
    const iconBlack = `background: url(${icon}) no-repeat center;`;
    const whiteBackground = `background: #fff url(${icon}) no-repeat center;`;
    const backgroundColor_333 = `background: #333 url(${icon}) no-repeat center;`;
    const backgroundColor_3b6655 = `background: #3B6655 url(${icon}) no-repeat center;`;

    switch (themeColor) {
      case 'black':
      case '3':
      case 'blue':
        return iconBlack;
      case 'whiteBackground':
      case '#fff':
        return whiteBackground;
      case '333':
      case '#333':
        return backgroundColor_333;
      case '#3b6655':
        return backgroundColor_3b6655;
      default:
        break;
    }
  },

  // 背景色
  bg_total_station: '#000',

  // 文字色
  text_total_station: '#fff',

  loading: {
    // 背景色
    bg_loading: '#000',
    bg_loading_back: '#ddc08c',
    // 文字色
    text_loading_back: '#333',
  },

  // 遮罩背景色
  bg_leftSideBar_mask: 'rgba(0, 0, 0, 0.6)',
  bg_mask: '#000',
  bg_limitScreenMaskHelpClose: '#000',
  bg_userMenuMaskHelpClose: '#000',

  header: {
    bg_header: '#000',
    bg_header_mask: '#101010',
    bg_header_balance_value: '#fff',
    bg_leagueBar: '#191919',
    text_leagueBar: '#fff',
    text_seasonName: '#ddc38e',
    shadow_leagueBar: '',
    exposure_balance_title: '#8c8c8c',
    exposure_balance_value: '#fff',
    bg_header_filter_top: '#454545',
    bg_header_filter_box_shadow: '#000000EB',
    text_balance_computer: '#8C8C8C',
    filter_statement_text: '#FFF',
    filter_statement_bcg: '#333333',
    border_statement_computer: '#191919',
    exposure_balance_text: '#8c8c8c',
  },

  bg_newWindowContainerSlide: '#1A1A1A',

  breadcrumb: {
    // 背景色
    bg_page_select_menu: '#333',
    bg_select_menu_sec: '#333',
    // 文字色
    text_breadcrumb_active: '#ddc08c',
    text_breadcrumb_nav_homepage_aTag: '#fff',
    text_breadcrumb_fst_layer_selected_value_spanTag: '#fff',
    text_breadcrumb_sec_layer_selected_value_spanTag: '#fff',
    text_fst_page_select_menu_aTag: '#fff',
    text_sec_page_select_menu_aTag: '#fff',
    text_navHomepage_webkitTapHighlightColor: `rgba(0, 0, 0, 0)`,
    // 陰影色
    shadow_fst_pageSelectMenu_active: `0 0 6px rgba(0, 0, 0, 0.5)`,
    shadow_sec_pageSelectMenu_active: `0 0 6px rgba(0, 0, 0, 0.5)`,
  },

  popularBackground: {
    text_popular_title: '#ddc08c',
    text_popular_traded_spanTag: '#ddc08c',
    text_popularMaskWrapper: '#fff',
    shadow_popularMaskWrapper: '',
  },

  eventList: {
    // 背景色
    bg_event_info_container: '#1a1a1a',
    bg_eventSeasonLink: '#1a1a1a',
    bg_score_inline_block_P_Tag: '#333',
    bg_event_leader: '#ddc38e',
    // 邊框色
    border_event: '#000',
    // 文字色
    text_eventInfo_teamName: '#fff',
    text_event_traded: '#999',
    text_event_status_timeTag: '#999',
    text_event_marketsAvailable: '#999',
    text_event_traded_spanTag: '#ddc38e',
    text_event_leader: '#333',
    text_event_status_ended_time: '#e83131',
    text_event_started_timeTag: '#2a86fe',
    text_eventSeasonLink: '#a5a5a5',
    // 陰影色
    shadow_eventWrapper: '',
  },

  productList: {
    // 背景色
    bg_suspend_p_tag: '#333',
    bg_product_list_container: '#1a1a1a',
    bg_product_list_layPrice: '#f1a1bd',
    bg_product_list_backPrice: '#96dcf4',
    // 邊框色
    border_winner_loser: '#333',
    border_nth_child_team_block: '#333',
    // 文字色
    text_productName: '#fff',
    text_product_price: '#333',
    text_suspend_p_tag: '#fff',
    text_product_quantity: '#999',
    text_result_spanTag: '#999',
    text_iconWinnerStar_span: '#ddc38e',
    text_iconFavorite_span: '#ddc38e',
  },

  rightSidebar: {
    // 背景色
    bg_right_sidebar_widget: '#1a1a1a',
    shadow_rightSidebarWidget: '',
    bg_orderList_product_item: '#1e1e1e',
    bg_orderList_select_menu: '#333',
    bg_order_table_order: '#333',
    bg_orderList_multi_btn: '#333',
    bg_orderList_selectPrice_selectLanguage: '#3b3b3b',
    bg_all_activity_button_gradient_dark: '#d0ac6d',
    bg_all_activity_button_gradient_light: '#f5e7c0',
    // 邊框色
    border_orderList: '#000',
    border_orderHeaderTitle: '#f0d797',
    border_userMenuNavOptions_widget: '#666',
    // 文字色
    text_balanceTitle: '#8c8c8c',
    text_totalExposurePotential_WinningsContainer_title: '#8c8c8c',
    text_orderList_marketName: '#999',
    text_orderTableKey: '#999',
    text_rightSideBar_primary: '#fff',
    text_order_table_multiOrder_back: '#96dcf4',
    text_order_table_avg_back: '#96dcf4',
    text_order_table_border_back: '#96dcf4',
    text_order_table_multiOrder_lay: '#f1a1bd',
    text_order_table_avg_lay: '#f1a1bd',
    text_order_table_border_lay: '#f1a1bd',
    text_all_activity_button: '#333',
    text_outcome_danger: '#ff0000',
    text_danger: '#e83131',
    text_orderList_li_active: '#ddc08c',
    text_show_more_btn: '#ddc08c',
    text_show_more_btn_spanTag: '#ddc08c',
    text_outcome_gold: '#ddc08c',
    // 陰影色
    shadow_orderList_select_menu: `0px 3px 6px 0px #1a1a1a`,
    shadow_orderListProductItem: '',
    // userMenu
    bg_finance_btn_gradient_dark: '#d0ac6d',
    bg_finance_btn_gradient_light: '#f5e7c0',
    border_userMenu_finance_btns: '#666',
    border_select_container: '#4a4a4a',
    text_finance_btn: '#333',
    text_section_links_aTag: '#fff',
    text_selectTitle: '#8c8c8c',
  },

  leftSidebar: {
    // 背景色
    bg_left_sidebar: '#1a1a1a',
    bg_inPlay_number: '#666',
    bg_list_item_num: '#666',
    bg_cricketCategoriesListBack: '#313131',
    bg_leftSidebar_active: `rgba(221, 195, 142, 0.6)`,
    bg_searchBar: '#313131',
    // 文字色
    text_leftSideBar_primary: '#fff', // leftSideBar 文字基本色
    text_leftSidebar_webkitTapHighlightColor: `rgba(0, 0, 0, 0)`,
    text_categoriesTitle_quickLinksTitle: '#ddc38e', // leftSideBar active通用色
    text_cricketCategoriesListBack_aTag: '#fff',
    text_list_item_num: '#fff',
  },

  notification: {
    // 背景色
    bg_notificationWrapper: '#313131',
    bg_sessionTimeoutWrapper: '#8D2A2A',
    bg_notificationBorderMatched: '#313131',
    bg_notificationBorderUnMatched: '#313131',
    // 邊框色
    border_notification_wrapper_unMatch: '#999',
    border_notification_wrapper_received: '#999',
    border_notification_wrapper_success: '#ddc08c',
    border_notification_wrapper_matched: '#ddc08c',
    border_notification_wrapper_fail: '#ff0000',
    border_notification_border_unMatched: '#ff0000',
    border_notification_wrapper_lay: '#f1a1bd',
    border_notification_wrapper_back: '#96dcf4',
    // 文字色
    text_notification_content_header_received: '#fff',
    text_notification_msg_unmatched: '#999',
    text_notification_msg_success: '#ddc08c',
    text_notification_msg_received: '#ddd',
    text_notification_msg_fail: '#ff0000',
    text_unmatched_color: '#ff0000',
    text_notification_content_header_lay: '#f1a1bd',
    text_notification_msg_placing_lay: '#f1a1bd',
    text_notification_content_header_back: '#96dcf4',
    text_notification_msg_placing_back: '#96dcf4',
    text_matched_color: '#ddc08c',
    text_session_timeout: '#fff',
    text_notification_content_pTag: '#fff',
    text_notification_content_footer: '#999',
    // 陰影色
    shadow_notificationBorderMatched: `0px 4px 8px 0px rgba(0, 0, 0, 0.45)`,
    shadow_notificationBorderUnMatched: `0px 4px 8px 0px rgba(0, 0, 0, 0.45)`,
    shadow_notificationWrapper: `0px 4px 8px 0px rgba(0, 0, 0, 0.45)`,
    shadow_sessionTimeoutWrapper: `0px 4px 8px 0px rgba(0, 0, 0, 0.45)`,
    //expire
    guest_mode_button_bcg: '#DDC08C',
    guest_mode_button_text: '#000',
  },

  orderSlip: {
    // 背景色
    bg_orderSlip_header: '#333',
    bg_orderSlip_container: '#1a1a1a',
    bg_input_value_price: '#1a1a1a',
    bg_input_value_stake: '#1a1a1a',
    bg_quick_stake: '#1a1a1a',
    bg_place_order_button: '#999',
    bg_order_feedback_div: '#dc4750',
    bg_placeOrderButtonCanuse: '#e6cb94',
    bg_placeOrderButtonSuspend: '#333333',
    bg_inputChecked_slider: '#ddc38e',
    bg_switch_slider: '#ccc',
    // 邊框色
    border_input_param_container: '#666',
    border_input_hasChange: '#DDC08C',
    border_value_container: '#666',
    border_order_form_list: '#000',
    border_confirm_box: '#666',
    border_inputParamContainerError: '#dc4750',
    border_value_container_error: '#dc4750',
    border_orderSlip_counter: '#707070',
    border_quickStake_clear: '#999',
    border_single: '#ddc38e',
    border_valueContainerFocus: '#ddc38e',
    border_inputParamContainerFocus: '#e6cb94',
    // 文字色
    font_color: '#ddc38e',
    text_orderSlip_counter: '#fff',
    text_orderSlip_container: '#fff',
    text_input_value_price: '#fff',
    text_input_value_stake: '#fff',
    text_stake_value_spanTag: '#fff',
    text_quickStake_single: '#fff',
    text_placeOrderButtonCanuse: '#000',
    text_placeOrderButtonSuspend: '#FFFFFF',
    text_orderSlip_marketName: '#999',
    text_orderSlip_orderFormReturn_spanTag: '#999',
    text_orderSlip_valueContainer: '#999',
    text_quickStake_clear: '#999',
    text_orderForm_liability_subtitle: '#999',
    text_orderFormReturn: '#ddc38e',
    text_confirmEdit: '#e6cb94',
    text_order_feedback_div: '#fff',
    text_place_order_button: '#fff',
    text_order_side_text_lay: '#f1a1bd',
    text_orderForm_liability_num: '#f1a1bd',
    text_order_side_text_back: '#96dcf4',
    text_orderSlip_tickButton_blocked: '#999',
    text_tickButton: '#e6cb94',
    // 陰影色
    shadow_inputFocus_slider: `0 0 1px #ddc38e`,
    mini_orderslip_bcg: '#DDC08C',
  },

  widgetAnalyzeBoard: {
    bg_header_rectangle: '#c4c4c4',
  },

  // ChatRoom 暫時隱藏
  bg_chatRoom: '#333',
  bg_chat_input_container: '#1a1a1a',
  text_chat_input_button: '#1a1a1a',
  bg_chat_input: '#1a1a1a',
  bg_chat_input_button_gradient_dark: '#d0ac6d',
  bg_chat_input_button_gradient_light: '#f5e7c0',
  // Live 暫時隱藏
  bg_live: '#333',
  text_live_streaming: '#fff',
  text_live_chatroom_container: '#fff',
  // whatList 暫時隱藏

  categoryFooter: {
    bg_cateTag_active: '#333',
    bg_cateTag: '#1a1a1a',
    text_cate_aTag: '#fff',
    text_cateTag_pTag: '#fff',
    text_sportFooterContainer_webkitTapHighLightColor: `rgba(0, 0, 0, 0)`,
    shadow_cateTag: '',
  },

  warning: {
    bg_warningHeader: '#1d1d1d',
    text_warning_sub_header: '#fff',
    text_warningTitle: '#c4c4c4',
    text_warningArea: '#c4c4c4',
  },

  statement: {
    // 背景色
    bg_filter_breakdown: '#333',
    bg_card_picker_i: '#333',
    bg_heading_section: '#1a1a1a',
    bg_transaction_list_item: '#1a1a1a',
    bg_order_separate: '#000',
    bg_main_container: '#0F0F0F',
    // 邊框色
    border_statement_order_container: '#333',
    border_statement_filters: '#333',
    border_transactionListItem_increase: '#ddc38e',
    border_transactionListItem_decrease: '#a5a5a5',
    border_statement_filters_div_tag: '#666',
    border_carousel_items_wrapper_h4_tag: '#666',
    border_deposit_increase: '#ddc38e',
    // 文字色
    text_eventAndMarketName: '#ddc38e',
    text_header_row: '#999',
    text_withdraw_decrease: '#a5a5a5',
    text_filterBreakdown_label_pTag: `rgb(19, 18, 18)`,
    text_increaseProfit: '#ddc38e',
    text_decreaseProfit: '#a5a5a5',
    text_commission: '#c0f4b9',
    text_statementFilters_pTag: '#ddc38e',
    // scroll_active
    bg_scroll_active: '#000',
    border_scroll_active: `rgba(0, 0, 0, 0)`,
    // orderDetail
    bg_outside_root_container: '#000',
    border_market_status: '#a5a5a5',
    text_teamA_teamB: '#999',
    text_order_ID_title: '#999',
    text_per_history_area: '#999',
    text_orderDetail_title: '#999',
    text_per_history_content: '#cfcfcf',
    text_stake_PAndL_price_commission: '#fff',
    // 陰影色
    shadow_statement_order: '',
    // icon色
    icon_close_1: '#fff',
    icon_close_2: '#fff',

    // sidePanel 功能暫時隱藏，但不能關掉statement-header會掛掉
    bg_side_panel: '#262626',
    bg_search_input: '#262626',
    bg_select_type_container: '#3b3b3b',
    bg_side_panel_see_results_gradient_dark: '#d0ac6d',
    bg_side_panel_see_results_gradient_light: '#f5e7c0',
    border_search_input_container: '#666',
    border_predefined_ranges_li_tag: '#666',
    border_selected_dates: '#666',
    border_select_type_container: '#666',
    border_checkbox: '#707070',
    border_selectTypeContainer: '#999',
    border_sidePanelSeeResults: '#999',
    text_side_panel_see_results_a_tag: '#333',
    text_search_input: '#666',
    text_search_input_input: '#fff',
    text_selectedDates_pTag: '#999',
    text_selectTypeContainer_activityTypes: '#999',
    text_sidePanelContent_header_pTag: '#ddc38e',
  },

  // Home page
  // 背景色
  bg_pageHeader_gradient_dark: '#d0ac6d',
  bg_pageHeader_gradient_light: '#f5e7c0',
  bg_pageHeader_gradient: `90deg,#f5e7c0,#d0ac6d`,
  // 邊框色
  border_home_sportTabs_active: `rgb(229, 206, 157)`,
  // 文字色
  text_home_sportTabs_active_aTag: '#fff',
  text_home_sportTabs_aTag: '#999',

  markets: {
    // 背景色
    bg_suspend_p_tag: '#333',
    bg_market_container: '#1a1a1a',
    bg_product_fancy_container: '#333',
    bg_markets_price_lay_no: '#f1a1bd',
    bg_markets_price_back_yes: '#96dcf4',
    // 邊框色
    border_markets_product_list: '#333',
    border_fancy_group_header: '#ffffffa5',
    // 文字色
    text_marketHeader: '#fff',
    text_markets_productName: '#fff',
    text_markets_price: '#333',
    text_markets_container: '#fff',
    text_markets_quantity_fancy: '#fff',
    text_market_suspend: '#fff',
    text_product_info_title: '#999',
    text_min_max: '#999',
    text_product_fancy_min_max: '#999',
    text_market_quantity: '#999',
    text_traded_exchangeHeaderContainer: '#999',
    text_settled_winner_word: '#999',
    // marketTabs
    text_li_disable: '#333',
    text_li_active: '#fff',
    text_market_filter_li: '#999',
    border_li_active: '#ddc38e',
    //Exchange
    text_product_risk_grey: '#999',
    text_productRiskGold: '#ddc38e',
    //ExchangeProduct
    text_orderSlip_open: '#333',
    bg_orderSlip_open: '#999',
    exchange_product_border_top: '#1A1A1A',
  },

  visual: {
    bg_visual_footer_wrapper: '#191919',
    // bg_visual_footer_wrapper3: '#FFFFFF',
    shadow_visualFooterWrapper: '',
    shadow_visualFooterWrapper3: '0 1px 4px #2E2E2E29',
    bg_play_streaming_h2_tag: '#191919',
    bg_play_streaming_failedContainer: '#262626',
    text_play_streaming_failedContainer: '#fff',
    border_separate: '#333',
  },

  manual: {
    border_manual: '#c4c4c4',
    text_manual: '#c4c4c4',
    text_next_page: '#333',
    text_pre_page: '#8c8c8c',
    bg_next_page: '#ddc08c',
    text_Manual_doNotShowAgain_active: '#d0ac6d',
  },

  eventHeader: {
    bg_score: '#333',
    bg_long_score: '#333',
    bg_soccer_score: '#333',
    bg_higherScore: '#ddc38e',
    text_score: '#fff',
    text_higherScore: '#333',
    text_left_hours: '#999',
    text_event_date: '#999',
    text_markets_available: '#999',
    shadow_higherScore: '',
    shadow_score: '',
  },

  copyTrading: {
    bg_trader: '#1a1a1a',
    bg_right_back_btn: '#f1a1bd',
    bg_right_lay_btn: '#96dcf4',
    bg_best_pick: '#ddc08c',
    text_best_pick: '#333',
    text_right_lay_back_btn: '#333',
    text_returnForLastEvents: '#8c8c8c',
    text_Ex_Bm_Fancy: '#8c8c8c',
    text_name_rightPercentage: '#ddc38e',
    text_copyTrading_layBack: '#ddc38e',
    shadow_copyTrading: '',
  },

  topTraders: {
    bg_top_trader: '#1a1a1a',
    border_topTraders_subtitle: '#1a1a1a',
    text_topTraders_name: '#ddc08c',
    text_return_rate: '#ddc08c',
    text_return_rate_four_and_five: '#fff',
    text_city: '#999',
    shadow_top_trader: '',
    bg_top_traders_header_computer: '#333',
    text_top_traders_header_computer: '#ddc38e',
    top_trader_border: '#333333',
  },

  backToTop: {
    text_backToTop_button: '#ddc38e',
    border_backToTop_button: '#ddc38e',
  },

  boost: {
    back_price_button_background_color: '#96dcf4',
    new_price_button_word_color: '#333',
    old_price_button_word_color: '#999999',
    odd_boost_word_color: '#DDC08C',
    event_word_color: '#b9b9b9',
    border_animation: '#DDC08C',
    suspend_background: '#333333',
  },
  streamingUI: {
    market_list_header_bcg: 'rgba(255,255,255,.6)',
    market_list_header_text: '#1A1A1A',
    market_list_product_container_bcg: 'rgba(33, 33, 33, 0.7)',
    market_list_product_container_back: '#96DCF4',
    orderSlip_product_type: '#A5A5A5',
    orderSlip_input_border: '#C4C4C4',
    orderSlip_input_border_focus: '#D8C192',
    orderSlip_font_color_color: '#fff',
    orderSlip_input_background: 'rgb(0 0 0 / 0%);',
    orderSlip_button: '#A5A5A5',
    orderSlip_button_text: '#000',
    orderSlip_yes_button: '#f1a1bd',
    orderSlip_no_button: '#96dcf4',
    orderSlip_no_text: '#f1a1bd',
    orderSlip_yes_text: '#96dcf4',
    orderSlip_fancy_line: '#C4C4C4',
    orderSlip_option_text: '#000',
    orderSlip_option_bcg: 'rgba(255, 255, 255, .6)',
    notification: 'rgba(153, 153, 153, .5)',
    notification_success: 'rgba(221, 192, 140, .7)',
    notification_fail: 'rgba(231, 48, 48, .7)',
    quick_stack_border: '#DDC08C',
    product_name_text: '#fff',
    burger_text: '#fff',
    text_color: '#fff',
  },

  footer: {
    font_color_v2: 'white',
    background_color_v2: '#1A1A1A',
  },
  v3: {
    // 預設 F5F6FA
    primary_background_color: primaryBackgroundColor
      ? `#${primaryBackgroundColor}`
      : '#000',
    // 預設 fff
    secondary_background_color: secondaryBackgroundColor
      ? `#${secondaryBackgroundColor}`
      : '#1a1a1a',
    // 預設 8ECFFF
    primary_color: primaryColor ? `#${primaryColor}` : '#fcc83c',
    // 預設 fff
    secondary_color: secondaryColor ? `#${secondaryColor}` : '#333',
    // 預設 333
    third_color: thirdColor ? `#${thirdColor}` : '#333',
    // 預設 333
    text_primary_color: textPrimaryColor ? `#${textPrimaryColor}` : '#fff',
    // 預設 999
    text_secondary_color: textSecondaryColor
      ? `#${textSecondaryColor}`
      : '#999',
    // 預設 eaeaea
    quick_link_border_color: quickLinkBorderColor
      ? `#${quickLinkBorderColor}`
      : '#333',
    league_quick_link_border_color: '#4394e7',
    header: {
      header_page_header: '#6CC1FF',
      user_info_text: '#333333',
      wallet_bcg: '#EFEFEF',
    },
    lmt: {
      footer_shadow: '#2E2E2E29',
      text_color: '#000',
    },
    product: {
      product_header_border_color: '#C4C4C4',
      text_color: '#333333',
      text_product_info_title: '#333333',
    },
    event: {
      score_A: '#DDDDDD',
      score_B: '#8ECFFF',
    },
    productList: {
      round_head_bet: '#2E2E2E16',
      card_shadow: '#2E2E2E29',
      pc_card_shadow: '#2E2E2E33',
      OUHAD_title_color: '#C4C4C4',
      productList_title_border_and_shadow_color: '#2E2E2E1A',
      HT_light_color: '#2A86FE',
      LIVE_light_color: '#E73030',
      sport_title_HT_border: '#C4C4C4',
    },
    orderSlip: {
      shadow_color: '#2e2e2e29',
      orderslip_header_shadow: '#2E2E2E29',
      text_orderSlip_marketName: '#C4C4C4',
      input_border: '#c4c4c4',
      quick_stack_border: '#EDEDED',
      place_bet_button: '#C4C4C4',
      trash_bcg: '#C4C4C4',
      border_order_form_list: '#C4C4C4',
      text_orderFormReturn: '#999',
      mini_orderslip_count_bcg: '#DB3030',
      mini_orderslip_count_text: '#FFFFFF',
      input_price_change_text: '#9F1F25',
      input_price_change_bcg: '#fff',
      change_notice_bcg: '#fff',
      parlay_tittle_to_win: '#C4C4C4',
      input_placeholder: '#C4C4C4',
      warning_color: '#9F1F25',
    },
    statement: {
      filter_bg_white: 'white',
      filter_bg_blue: '#8ECFFF',
      click_font: 'white',
      border_color: '#A5A5A5',
      shadow: '#2E2E2E29',
      text_danger: '#ff0000'
    },
    orderDetail: {
      font_black: '#333333',
      font_and_border_grey: '#A5A5A5',
    },
    notification: {
      shadow_notificationWrapper: `0px 4px 8px 0px #2e2e2e29`,
      font_white: '#fff',
      font_black: '#000',
      font_green: '#AEC15A',
      right_status_init_color: '#C4C4C4',
      right_status_success_color: '#AEC15A',
      right_status_fail_color: '#C4C4C4',
      each_notification_border: '#C4C4C4',
      newOdd: '#FF414A',
    },
    watchList: {
      category_div_shadow: '#2E2E2E29',
      category_div_bcg: '#FFFFFF',
      category_div_bcg_active: '#8ECFFF',
      category_div_text_active: '#FFFFFF',
    },
    quicklink: {
      active_background: '#ddc38e',
    },
    footer: {
      font_color_v3: '#C4C4C4',
      background_color_v3: '#FFFFFF',
      shadow: '#2E2E2E29',
    },
    info: {
      shadow: '#2E2E2E29',
    },
  },
  v3_pc: {
    orderslip: {
      no_order_text: '#999',
      no_order_icon_color: '#999',
    },
    scrollbar: {
      color: secondaryBackgroundColor
        ? `#${secondaryBackgroundColor}`
        : '#1a1a1a',
      hover_color: '#bfbfbf',
    },
  },
};

export default theme;
