/**
 * 單一錢包 - merchant_code 符合下方任一時為 true
 * @description cmt, backoffice-test14dec, backoffice-cw-test-0001
 * @returns {boolean}
 */
const isSeamlessWallet = () => {
  if (!localStorage.getItem('access_token')) return
  const accessToken = localStorage.getItem('access_token')
  const decodeTokenObj = JSON.parse(Buffer.from(accessToken.split('.')[1], 'base64').toString()) ?? {};
  return /cmt|backoffice-test14dec|backoffice-cw-test-0001/.test(decodeTokenObj.merchant_code)
};

export default isSeamlessWallet;