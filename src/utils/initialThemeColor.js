import checkEmpty from './checkEmpty';

const { isEmpty } = checkEmpty();
const queryThemeByDom = document.getElementById('sport-root')?.dataset;
// 預設 wh 站台色號
const initialTheme =
  '{"theme":{"pbgc":"f5f6fa","sbgc":"fff","pc":"6cc1ff","sc":"fff","tc":"333","tpc":"333","tsc":"c4c4c4","qlbc":"eaeaea"},"navLink":{"casino":""}}';
const themeArrStringify = () => {
  // 如果沒有帶 ckProps 會變空物件，空物件會 === true，直接給預設色
  try {
    if (isEmpty(queryThemeByDom?.ckProps)) {
      if (localStorage.getItem('qlbc')) {
        return JSON.stringify({
          "theme": {
            "pbgc": localStorage.getItem('pbgc') ?? "f5f6fa",
            "sbgc": localStorage.getItem('sbgc') ?? "fff",
            "pc": localStorage.getItem('pc') ?? "6cc1ff",
            "sc": localStorage.getItem('sc') ?? "fff",
            "tc": localStorage.getItem('tc') ?? "333",
            "tpc": localStorage.getItem('tpc') ?? "333",
            "tsc": localStorage.getItem('tsc') ?? "c4c4c4",
            "qlbc": localStorage.getItem('qlbc') ?? "eaeaea"
          },
          "navLink": {
            "casino": ""
          }
        })
      } else {
        localStorage.setItem("pbgc", ("f5f6fa"));
        localStorage.setItem("sbgc", ("fff"));
        localStorage.setItem("pc", ("6cc1ff"));
        localStorage.setItem("sc", ("fff"));
        localStorage.setItem("tc", ("333"));
        localStorage.setItem("tpc", ("333"));
        localStorage.setItem("tsc", ("c4c4c4"));
        localStorage.setItem("qlbc", ("eaeaea"));
      }
      return initialTheme
    };
    if (queryThemeByDom?.ckProps) return queryThemeByDom?.ckProps;
    else return initialTheme;
  } catch (error) {
    console.log('themeObj JSON.parse error:', e);
    return initialTheme;
  }
}
let themeObj = JSON.parse(themeArrStringify());

// const themeArr = queryThemeByDom.ck
/*  urlParams 
 套色樣板：
 f01: '{"theme":{"pbgc":"000","sbgc":"1a1a1a","pc":"fcc83c","sc":"333","tc":"333","tpc":"fff","tsc":"999","qlbc":"333"}}';
 bk：'{"theme":{"pbgc":"000","sbgc":"1a1a1a","pc":"6cc1ff","sc":"333","tc":"333","tpc":"fff","tsc":"999","qlbc":"333"}}'
 wh：'{"theme":{"pbgc":"f5f6fa","sbgc":"fff","pc":"6cc1ff","sc":"fff","tc":"333","tpc":"333","tsc":"c4c4c4","qlbc":"eaeaea"}}'
 v33: '{"pbgc":"f5f6fa","sbgc":"fff","pc":"ba3032","sc":"fff","tc":"fff","tpc":"333","tsc":"c4c4c4","qlbc":"eaeaea"}'
 v02: '{"theme":{"pbgc":"123026","sbgc":"113c35","pc":"ffbA3A","sc":"3b6655","tc":"333","tpc":"fff","tsc":"c4c4c4","qlbc":"113a34"}}'
 黑金版： '{"theme":{"pbgc":"000","sbgc":"1a1a1a","pc":"d4b9a1","sc":"333","tc":"333","tpc":"fff","tsc":"999","qlbc":"333","primaryColorLinearGradientParams":{"deg":"180","color1":"F4E7D6","offset1":"","color2":"D2B79E","offset2":"","color3":"","offset3":""}}}'

 定義：
 pbgc 背景主底色, sbgc 背景副底色, pc 主色, sc 副色, tc 第三色(主色上的字或 icon 的顏色）, 
 tpc 文字主色, tsc 文字副色  qlbc quicklinkBorder 色 
 漸層色參數： deg:"", color1:"", offset1:"", color2:"", offset2:"", color3:"", offset3:""
 */

// 主底色
export const primaryBackgroundColor = (() => {
  if (themeObj?.theme?.pbgc)
    return themeObj.theme.pbgc?.toLowerCase()?.replaceAll(`"`, '');
  // 預設顏色
  else return 'f5f6fa';
})();

// 副底色
export const secondaryBackgroundColor = (() => {
  if (themeObj?.theme?.sbgc)
    return themeObj.theme.sbgc?.toLowerCase()?.replaceAll(`"`, '');
  // 預設顏色
  else return 'fff';
})();

// 主色
export const primaryColor = (() => {
  if (themeObj?.theme?.pc)
    return themeObj.theme.pc?.toLowerCase()?.replaceAll(`"`, '');
  // 預設顏色
  else return '6cc1ff';
})();

// 副色
export const secondaryColor = (() => {
  if (themeObj?.theme?.sc)
    return themeObj.theme.sc?.toLowerCase()?.replaceAll(`"`, '');
  // 預設顏色
  else return 'fff';
})();

// third color (在 primary color 上的 text color 或 icon color )
export const thirdColor = (() => {
  if (themeObj?.theme?.tc)
    return themeObj.theme.tc?.toLowerCase()?.replaceAll(`"`, '');
  // 預設顏色
  else return '333';
})();

// 文字主色
export const textPrimaryColor = (() => {
  if (themeObj?.theme?.tpc)
    return themeObj.theme.tpc?.toLowerCase()?.replaceAll(`"`, '');
  else return '333';
})();

// 文字副色
export const textSecondaryColor = (() => {
  if (themeObj?.theme?.tsc)
    return themeObj.theme.tsc?.toLowerCase()?.replaceAll(`"`, '');
  // 預設顏色
  else return 'c4c4c4';
})();

// quick link border color
export const quickLinkBorderColor = (() => {
  if (themeObj?.theme?.qlbc)
    return themeObj.theme.qlbc?.toLowerCase()?.replaceAll(`"`, '');
  // 預設顏色
  else return 'eaeaea';
})();

// primary color 漸層色參數，如果 primaryColorLinearGradientParams 不為物件回傳空字串
export const primaryColorLinearGradientParams = (() => {
  if (isEmpty(themeObj?.theme?.primaryColorLinearGradientParams)) return '';
  return themeObj?.theme?.primaryColorLinearGradientParams;
})();

// 是否顯示 casino
export const isNavLinkShowCasino = (() => {
  if (themeObj?.navLink?.casino === 'display') return true;
  return false;
})();
