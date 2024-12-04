const pauseRequest = () => {
  const rootGrandPa = document.querySelector('#sport-root')?.parentNode?.parentNode;
  const pauseReq = rootGrandPa && (window.getComputedStyle(rootGrandPa)?.display == 'none')
  return pauseReq
};

export default pauseRequest;
