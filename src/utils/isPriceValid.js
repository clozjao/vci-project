const isPriceValid = (price) => {
  const priceNum = Number(Number(price).toFixed(2));
  const price100 = Math.round(priceNum * 100);

  // step是price在該區間增減一次的合法值
  switch (true) {
    case priceNum < 1.01:
      // price 最小值 1.01
      return false;
    case priceNum <= 2:
      // step = 0.01
      if (price100 % 1 === 0) return true;
      return false;
    case priceNum <= 3:
      // step = 0.02
      if (price100 % 2 === 0) return true;
      return false;
    case priceNum <= 4:
      // step = 0.05
      if (price100 % 5 === 0) return true;
      return false;
    case priceNum <= 6:
      // step = 0.1
      if (price100 % 10 === 0) return true;
      return false;
    case priceNum <= 10:
      // step = 0.2
      if (price100 % 20 === 0) return true;
      return false;
    case priceNum <= 20:
      // step = 0.5
      if (price100 % 50 === 0) return true;
      return false;
    case priceNum <= 30:
      // step = 1
      if (price100 % 100 === 0) return true;
      return false;
    case priceNum <= 50:
      // step = 2
      if (price100 % 200 === 0) return true;
      return false;
    case priceNum <= 100:
      // step = 5
      if (price100 % 500 === 0) return true;
      return false;
    case priceNum <= 1000:
      // step = 10
      if (price100 % 1000 === 0) return true;
      return false;
    case priceNum > 1000:
      // price 最大值 1000
      return false;
    default:
      return false;
  }
};

export default isPriceValid;
