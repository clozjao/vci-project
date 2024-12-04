
export const stopScroll = () => {
  // 沒有遷入網站時使用
  // document.querySelector('body').style.overflow = 'hidden';
  // 遷入 f01 時，抓到 f01 homepage 為我們頁面的 scroll bar
  const rootNode = document.querySelector('#sport-root');
  rootNode?.parentNode?.setAttribute(
    'style',
    'display: block;overflow-Y:hidden'
  );
};

export const startScroll = () => {
  // document.querySelector('body').style.overflow = 'auto';
  const rootNode = document.querySelector('#sport-root');
  rootNode?.parentNode?.setAttribute('style', 'display: block;overflow-Y:auto');
};

export const streamingPhoneHeightNoScroll = (height) =>{
  //  document.querySelector('body').style.overflow = 'none';
  //  const rootNode = document.querySelector('#sport-root');
  //  rootNode?.parentNode?.setAttribute(
  //    'style',
  //    `display: block;overflow:hidden;max-height:${height}px;
  //    `
  //  );
}

// 判斷是否為PC，PC版不上遮罩
export const IsPC = () => {
  const { userAgent } = navigator;
  const Agents = [
    'Android',
    'iPhone',
    'SymbianOS',
    'Windows Phone',
    // 'iPad',
    'iPod',
  ];

  let flag = true;
  for (let v = 0; v < Agents.length; v++) {
    if (userAgent.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
};
