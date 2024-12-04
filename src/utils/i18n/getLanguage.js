import i18n from './index';

export const urlParams = new URLSearchParams(window.location.search);

export const setLanguage = (decodeTokenObj) => {
  // 如果解析不到language 就直接設置成英文語系
  if (!decodeTokenObj?.language) {
    localStorage.setItem('language', 'en');
  }
  const languageFromLocalStorage = localStorage.getItem('language');
  // 解析出語言並且localStorage與解析的不同就設置新的語言
  // console.log('urlParams.has(access_token)', urlParams.has('access_token'));
  
  if (
    decodeTokenObj?.language &&
    languageFromLocalStorage !== decodeTokenObj?.language 
  ) {
    localStorage.setItem('language', decodeTokenObj?.language);
  }
};

export default function getLanguage() {
  // 2.網址列有token但是沒有lang
  if (urlParams.has('access_token')) {
    localStorage.setItem('language', 'en');
    return 'en';
  }

  // 3.Session Storage中儲存的lang
  if (localStorage.getItem('language')) {
    return localStorage.getItem('language');
  }

  return 'en';
}

export const currentLanguage = () => i18n.language;
