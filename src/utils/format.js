// 四捨五入到小數點第二位
export const roundToTwo = (num) => {
  return +(Math.round(num + 'e+2') + 'e-2');
};

// 千位分隔符
export const numFormat = (num) => {
  if (num === 0) return 0;
  if (!num) return;
  let res = num.toString().replace(/\d+/, function (n) {
    // 先提取整数部分
    return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
      return $1 + ',';
    });
  });
  return res;
};

// 首字大寫
export const capitalize = (str) => {
  if (str === 'NFL') return str;
  if (str) return str[0].toUpperCase() + str.slice(1).toLowerCase();
  return '';
};
export const trimPath = (str) => decodeURI(str);
export const trimPathUpper = (str) => decodeURI(str).toUpperCase();

export const fstStrCapital = (str) =>
  str ? str[0]?.toUpperCase() + str?.slice(1)?.toLowerCase() : '';
