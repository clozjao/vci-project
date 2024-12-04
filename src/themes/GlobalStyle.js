import { createGlobalStyle } from 'styled-components';

const cloudFontUrlBase = `https://sprodm.uni247.xyz/fonts/`;

const fontUrlBase = cloudFontUrlBase;

// 套用到整個app的樣式
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: AvenirNext-Medium;
    src: ${() => `local("AvenirNext-Medium"),
      url(${fontUrlBase}AvenirNext-Medium.otf) format(opentype),
      url(${fontUrlBase}AvenirNext-Medium2.otf) format(opentype)`};
  }
  @font-face {
    font-family: Demi-Bold;
    src: ${() => `local("Demi-Bold"),
      url(${fontUrlBase}AvenirNext-DemiBold.ttf) format(opentype)`}}
  @font-face {
    font-family: Next;
    src: ${() => `local("Next"),
      url(${fontUrlBase}Avenir-Next.ttc) format(opentype)`}}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding-inline-start: 0;
    padding-inline-end: 0;
    margin-block-start: 0;
    margin-block-end: 0;
    font-family: "Roboto";

  }
  :root{
    --away-blight-bg:linear-gradient(180deg, #F9D480 0%, #937D4C 100%);
    --away-dark-bg:linear-gradient(0deg, rgba(249, 212, 128, 0.26) 0%, rgba(249, 212, 128, 0.08) 97.2%);
    --home-blight-bg:linear-gradient(180deg, #CE49FE 0%, #7B2C98 100%);
    --home-dark-bg:linear-gradient(0deg, rgba(193, 55, 242, 0.26) 0%, rgba(74, 1, 100, 0.23) 97.2%);
  }
  body{
    margin:0;
  }
`;

export default GlobalStyle;
