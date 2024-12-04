// import SuspendMarkets from '../pages/Markets/SuspendMarkets';
// import Suspend from '../components/EventList/ProductList/Suspend';

function ticRules(props) {
  const {
    matchDetail,
    backPriceNum,
    layPriceNum,
    calculateBackPrice,
    calculateLayPrice,
    toWinTheTossProductGroup,
  } = props;

  if (matchDetail?.status === 'suspended') return false;
  else if (matchDetail?.status !== 'suspended') {
    if (!backPriceNum) return false;
    // 當值不在 min-max-tick 區間上 suspend
    else if (backPriceNum && (backPriceNum < 1.01 || backPriceNum > 1000))
      return false;
    // backPriceNum 與 layPriceNum 有值，且不在 tick 區間，就 suspend，其餘情況顯示 price
    else if (backPriceNum) {
      if (Number(calculateBackPrice) && Number(calculateLayPrice)) {
        if (backPriceNum < 2 && Number(calculateBackPrice) % 1 !== 0)
          return false;
        else if (
          backPriceNum >= 2 &&
          backPriceNum <= 3 &&
          Number(calculateBackPrice) % 2 !== 0
        )
          return false;
        else if (
          layPriceNum >= 2 &&
          layPriceNum <= 3 &&
          Number(calculateLayPrice) % 2 !== 0
        )
          return false;
        else if (
          backPriceNum >= 3 &&
          backPriceNum <= 4 &&
          Number(calculateBackPrice) % 5 !== 0
        )
          return false;
        else if (
          layPriceNum >= 3 &&
          layPriceNum <= 4 &&
          Number(calculateLayPrice) % 5 !== 0
        )
          return false;
        else if (
          backPriceNum >= 4 &&
          backPriceNum <= 6 &&
          Number(calculateBackPrice) % 1 !== 0
        )
          return false;
        else if (
          layPriceNum >= 4 &&
          layPriceNum <= 6 &&
          Number(calculateLayPrice) % 1 !== 0
        )
          return false;
        else if (
          backPriceNum >= 6 &&
          backPriceNum <= 10 &&
          Number(calculateBackPrice) % 2 !== 0
        )
          return false;
        else if (
          layPriceNum >= 6 &&
          layPriceNum <= 10 &&
          Number(calculateLayPrice) % 2 !== 0
        )
          return false;
        else if (
          backPriceNum >= 10 &&
          backPriceNum <= 20 &&
          Number(calculateBackPrice) % 5 !== 0
        )
          return false;
        else if (
          layPriceNum >= 10 &&
          layPriceNum <= 20 &&
          Number(calculateLayPrice) % 5 !== 0
        )
          return false;
        else if (
          backPriceNum >= 20 &&
          backPriceNum <= 30 &&
          Number(calculateBackPrice) % 1 !== 0
        )
          return false;
        else if (
          layPriceNum >= 20 &&
          layPriceNum <= 30 &&
          Number(calculateLayPrice) % 1 !== 0
        )
          return false;
        else if (
          backPriceNum >= 30 &&
          backPriceNum <= 50 &&
          Number(calculateBackPrice) % 2 !== 0
        )
          return false;
        else if (
          layPriceNum >= 30 &&
          layPriceNum <= 50 &&
          Number(calculateLayPrice) % 2 !== 0
        )
          return false;
        else if (
          backPriceNum >= 50 &&
          backPriceNum <= 100 &&
          Number(calculateBackPrice) % 5 !== 0
        )
          return false;
        else if (
          layPriceNum >= 50 &&
          layPriceNum <= 100 &&
          Number(calculateLayPrice) % 5 !== 0
        )
          return false;
        else if (
          backPriceNum >= 100 &&
          backPriceNum <= 1000 &&
          Number(calculateBackPrice) % 10 !== 0
        )
          return false;
        else if (
          layPriceNum >= 100 &&
          layPriceNum <= 1000 &&
          Number(calculateLayPrice) % 10 !== 0
        )
          return false;
        return toWinTheTossProductGroup;
      }
    }
    // 因為 bookmaker 沒有 ask, bid 所以 edge case 就 suspend
    return toWinTheTossProductGroup;
  }
}

export default ticRules;
