import { numFormat, roundToTwo } from '../format';

const getReturn = (
  stake = 0,
  price = 0,
  //預設給3.0 使用 c product 不需輸入 orderFormData
  orderFormData = { type: 'BOOKMAKER' },
  productInfoListForOrderSlip = []
) => {
  let orderFormToWin;
  const type = orderFormData.type;
  const layback = orderFormData?.layback;
  if (
    type === 'FULL-TIME RESULT' ||
    type === 'FULL-TIME RESULT (BOOKMAKER)' ||
    type === 'TO WIN THE TOSS (BOOKMAKER)' ||
    type === 'BOOKMAKER'
  ) {
    orderFormToWin = numFormat(roundToTwo(stake * price - stake));
  }
  if (type === 'Fancy' && layback === 'b') {
    orderFormToWin = numFormat(
      roundToTwo(productInfoListForOrderSlip[0]?.bs1 / 100 + 1) * stake
    );
  }
  if (type === 'Fancy' && layback === 'l') {
    orderFormToWin = numFormat(
      roundToTwo(productInfoListForOrderSlip[0]?.ls1 / 100 + 1) * stake
    );
  }
  return orderFormToWin;
};
export default getReturn;
