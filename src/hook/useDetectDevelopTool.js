import { addDetectListener, getDetector } from 'devtool-detector';
import { useEffect } from 'react';
import { isDevMode } from '../utils/getToken';

const useDetectDevelopTool = () => {
  const pathName = window.location.pathname;

  const redirectSecurityPage = () => {
    if (pathName === '/security') {
    } else window.location.href = `${window.location.origin}/security`;
  };

  const redirectOriginPage = () => {
    if (pathName === '/security') {
      window.location.href = window.location.origin;
    }
  };

  // initial detector
  const detector = getDetector();
  detector.setEnable(true);
  // detector.setEnable(ENV !== 'development');
  const listener = (isDevtoolOpen) => {
    // devtool open or close event
    isDevtoolOpen ? redirectSecurityPage() : redirectOriginPage();
  };

  useEffect(() => {
    // 如果 localStorage 有 dev true，就不做開發者工具的監測
    if (!isDevMode) addDetectListener(listener); // regist callback
  }, []);
};
export default useDetectDevelopTool;
