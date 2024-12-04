//firebase
import { initializeApp } from 'firebase/app';
import { getPerformance } from 'firebase/performance';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPerformanceInfo } from '../actions/performance';
import { firebaseConfig } from '../config/firebase';
import { ENV } from './env';

const initialFirebaseAndPerformance = () => {
  const dispatch = useDispatch();
  // firebase
  // Initialize Performance Monitoring and get a reference to the service
  const fbApp = initializeApp(firebaseConfig);
  useEffect(() => {
    // development 關掉 perf 才不會 lag
    if (ENV === 'development') dispatch(setPerformanceInfo({ perf: null }));
    if (ENV === 'production') {
      dispatch(
        setPerformanceInfo({
          perf: getPerformance(fbApp),
        })
      );
    }
    // dispatch(
    //   setPerformanceInfo({
    //     perf: getPerformance(fbApp),
    //   })
    // );
  }, []);

  // const {performance} = stat =>
  const { performance } = useSelector((state) => state.performanceReducer);
  const perf = performance?.perf ?? null;
  return perf;
};
export default initialFirebaseAndPerformance;
