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
  // 1.來自網址列查詢字串的token
  if (urlParams.has('access_token')) {
    const token = urlParams.get('access_token');
    localStorage.setItem('access_token', token);
    return token;
  }

  // 2.LocalStorage中儲存的token
  if (localStorage.getItem('access_token')) {
    return localStorage.getItem('access_token');
  }

  return '';
}
