import BigNumber from './bignumber.min.js';
const bigNumberMethod = () => {
  function big(val) {
    return new BigNumber(val);
  }

  // 加法
  const accB = (a, b) => {
    const accBToNumber = Number(big(a).plus(b).toString());

    return accBToNumber;
  };

  // 減法
  const minB = (a, b) => {
    const minBToNumber = Number(big(a).minus(b).toString());
    return minBToNumber;
  };
  
  // 乘法
  const mulB = (a, b) => {
    const mulBToNumber = Number(big(a).times(b).toString());
    return mulBToNumber;
  };

  return { accB, mulB, minB };
};

export default bigNumberMethod;
