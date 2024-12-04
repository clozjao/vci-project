import { WIDGET_MODE } from './env';

export const urlParams = new URLSearchParams(window.location.search);

const isDevFromUrlParams = urlParams.has('dev') ? urlParams.get('dev') : false;
const devInLocalStorage = localStorage.getItem('dev');
export const isDevMode = (() => {
  if (isDevFromUrlParams) {
    localStorage.setItem('dev', isDevFromUrlParams);
  }
  if (devInLocalStorage) return devInLocalStorage === 'true';
  else return false;
})();

export default function getToken() {

  // 1.來自宿主頁面的token
  if (WIDGET_MODE === 'on' && window?.CRIC?.q) {
    const token = window.CRIC.q[0][0].token;
    if (token) {
      localStorage.setItem('access_token', token);
      return token;
    }
  }

  // 2.來自網址列查詢字串的token
  if (urlParams.has('access_token')) {
    const token = urlParams.get('access_token');
    localStorage.setItem('access_token', token);
    return token;
  }

  // 3.LocalStorage中儲存的token
  if (localStorage.getItem('access_token')) {
    return localStorage.getItem('access_token');
  }

  return '';
}

export function getAutoBet() {

  // 1.來自宿主頁面的token
  // if (WIDGET_MODE === 'on' && window?.CRIC?.q) {
  //   const token = window.CRIC.q[0][0].token;
  //   if (token) {
  //     localStorage.setItem('access_token', token);
  //     return token;
  //   }
  // }

  // 2.來自網址列查詢字串的token
  if (urlParams.has('auto_bet')) {
    const token = urlParams.get('auto_bet');
    localStorage.setItem('auto_bet', token);
    return token;
  }

  // 3.LocalStorage中儲存的token
  if (localStorage.getItem('auto_bet')) {
    return localStorage.getItem('auto_bet');
  }

  return '';
}
