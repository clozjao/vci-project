import { useEffect, useState } from 'react';

const useListenerLmtHeightV3 = () => {
  // --------------- 跨域監聽部分 -------------------
  // 設定 state 來儲存 iframe 是否變高的高度，給 LmtHeightListener.js 來跨域監聽

  const [iframeBodyHeight, setIframeBodyHeight] = useState(0);
  useEffect(() => {
    const helpGetIframeHeight = (e) => {
      if (e.origin === `https://lmtloader.ckex.xyz`) {
        // 如果子域回傳的字串不是 'false'，即是回傳 height
        if (e.data === '!_{"h":""}') return
        // if (e.data === 'false') {
        //   return;
        // }
        if (e.data !== 'false') {
          const iframeInfo = JSON.stringify(e.data);
          const parseIframeInfo = JSON.parse(JSON.parse(iframeInfo));
          const { bodyHeight } = parseIframeInfo;
          setIframeBodyHeight(bodyHeight);
          return;
        }
      }
    };

    // 監聽從跨域 iframe 回傳的高度
    window.onmessage = (e) => helpGetIframeHeight(e);

    // 解除監聽
    return () => {
      window.onmessage = (e) => helpGetIframeHeight(e);
    };
  }, [window.onmessage]);
  const hash = window.location.hash;
  useEffect(() => {
    return () => {
      setIframeBodyHeight(0);
    };
  }, [hash]);
  return {
    iframeBodyHeight,
  };
};
export default useListenerLmtHeightV3;
