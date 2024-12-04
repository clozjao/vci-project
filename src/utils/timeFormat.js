function timeFormat(props) {
  // 傳入的props物件的key必須包含start_date

  // 開賽時間，初始值先給當前時間避免methods錯誤
  const startDate = props?.start_date
    ? new Date(props?.start_date)
    : new Date();

  const currentTime = new Date();
  // 距離開賽時間
  const diffTime = new Date(startDate - currentTime);
  // 距離開賽時間(單位:小時)
  const leftHour = Math.floor(diffTime.getTime() / 3600000);
  const leftMin = diffTime.getUTCMinutes();

  // 顯示當地GMT時區
  const timezoneOffset = currentTime.getTimezoneOffset();
  const timeZone = Math.abs(timezoneOffset) / 60;
  const timeZoneSign = (() => {
    if (timezoneOffset > 0) return '-';
    return '+';
  })();

  // 只有月＋日
  const partialDate = startDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
  });

  // 只有日期
  const startDay = startDate.toLocaleDateString('en-US', {
    day: 'numeric',
  });

  // 只有月份(全大寫)
  const startMonth = startDate
    .toLocaleDateString('en-US', {
      month: 'short',
    })
    .toUpperCase();

  // 日期 + 全大寫月份
  // 日期和月份順序顛倒，所以分別使用toLocaleDateString
  const startDateEventList = `${startDay} ${startMonth}`;

  // 小時 + 分鐘
  const startTimeEventList = startDate.toLocaleTimeString('en-US', {
    hour12: false,
    hour: 'numeric',
    minute: '2-digit',
  });

  // 完整年月日時分
  const fullDateMarkets = startDate
    .toLocaleTimeString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour12: true,
      hour: 'numeric',
      minute: '2-digit',
    })
    .toUpperCase();

  // 盤口頁的完整開賽時間，包含裝置當前時區顯示
  const startDateMarketsPage = `${fullDateMarkets} GMT${timeZoneSign}${timeZone}`;

  return {
    startDate,
    currentTime,
    leftHour,
    leftMin,
    partialDate,
    startDateEventList,
    startTimeEventList,
    startDateMarketsPage,
  };
}

export default timeFormat;
