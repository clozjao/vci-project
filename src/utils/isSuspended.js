import isPriceValid from './isPriceValid';

// 後端給suspended
const isSuspendedByStatus = (productInfo) => {
  if (productInfo?.status === 'suspended') return true;
  return false;
};

// back和lay相同值，suspended
const isSuspendedByEqual = (backPriceNum, layPriceNum) => {
  if (backPriceNum === layPriceNum) return true;
  return false;
};

// back和lay的price同時valid show price
const isSuspendedByValid = (backPrice, layPrice) => {
  if (isPriceValid(backPrice) || isPriceValid(layPrice)) return false;
  return true;
};

export const isExchangeSuspended = (productInfo, backPrice, layPrice) => {
  if (isSuspendedByStatus(productInfo)) return true;

  const backPriceNum = Number(backPrice);
  const layPriceNum = Number(layPrice);
  // case1: 任一price不存在
  // back和lay皆不存在: show ask & bid
  if (!backPriceNum && !layPriceNum) return false;
  if (!backPriceNum && layPriceNum) {
    // ask時驗證layPrice是否合法
    return !isPriceValid(layPrice);
  }
  if (!layPrice && backPrice) {
    // bid時驗證backPrice是否合法
    return !isPriceValid(backPrice);
  }

  // case2: price皆存在
  if (isSuspendedByEqual(backPriceNum, layPriceNum)) return true;

  // back和lay的price同時valid show price
  if (!isSuspendedByValid(backPrice, layPrice)) return false;

  return true;
};

export const isBookmakerSuspended = (productInfo, backPrice, layPrice) => {
  if (isSuspendedByStatus(productInfo)) return true;

  const backPriceNum = Number(backPrice);
  const layPriceNum = Number(layPrice);

  // case1: 任一price不存在
  if (!backPriceNum || !layPriceNum) return true;

  // case2: price皆存在
  if (isSuspendedByEqual(backPriceNum, layPriceNum)) return true;

  // back和lay的price同時valid show price
  if (!isSuspendedByValid(backPrice, layPrice)) return false;
  return true;
};

export const isFancySuspended = (
  eventInfo,
  productInfo,
  backPrice,
  layPrice
) => {
  if (isSuspendedByStatus(productInfo)) return true;

  const checkLastThreeWordsIsADV = (name) => {
    const nameSplitInArray = name.split('');
    const resultArr = [];
    resultArr.push(
      nameSplitInArray[nameSplitInArray.length - 3],
      nameSplitInArray[nameSplitInArray.length - 2],
      nameSplitInArray[nameSplitInArray.length - 1]
    );
    return resultArr.join('');
  };

  const isAdv = (name) => {
    if (typeof name === 'string' || name instanceof String) return;
    return name?.toLowerCase().includes('adv');
  };
  if (eventInfo.status === 'started' && isAdv(productInfo.name)) return true;

  const backPriceNum = Number(backPrice);
  const layPriceNum = Number(layPrice);
  // case1: 任一price不存在
  if (!backPriceNum || !layPriceNum) return true;
  // case2: price皆存在,spot說不用
  // if (isSuspendedByEqual(backPriceNum, layPriceNum)) return true;
  // back和lay的price同時valid show price
  if (!isSuspendedByValid(backPrice, layPrice)) return false;
  return true;
};

export const isCProductSuspended = (productInfo, backPrice, layPrice) => {
  if (isSuspendedByStatus(productInfo)) return true;

  const backPriceNum = Number(backPrice);
  const layPriceNum = Number(layPrice);

  // case1: 任一price不存在
  // if (!backPriceNum || !layPriceNum) return true;

  // case2: price皆存在
  if (isSuspendedByEqual(backPriceNum, layPriceNum)) return true;

  // back和lay的price同時valid show price
  if (!isSuspendedByValid(backPrice, layPrice)) return false;
  return true;
};
