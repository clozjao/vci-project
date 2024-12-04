import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  resetSelectWidgetAnalyzeButton,
  setShowWidgetAnalyzeBoardState,
} from '../../reducers/widgetAnalyze';

const useHandleCloseAnalyzeBoard = () => {
  const href = window?.location?.href;

  const resetWidgetAnalyzeBoardState = () => {
    dispatch(setShowWidgetAnalyzeBoardState('notActive'));
    dispatch(resetSelectWidgetAnalyzeButton('matchStatistics'));
  };
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener('popstate', (state) => {
      // 監聽到返回事件，注意，只有觸發了返回才會執行這個方法
      resetWidgetAnalyzeBoardState();
    });
    return () => {
      window.removeEventListener('popstate', (state) => {});
    };
  }, []);

  useEffect(() => {
    // console.log('href', href);
    if (href?.includes('gamelobby')) {
      resetWidgetAnalyzeBoardState();
    }
  }, [href]);
};
export default useHandleCloseAnalyzeBoard;
