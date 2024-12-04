const checkMobile = () => {
  const isMobile = () => {
    try {
      document.createEvent('TouchEvent');
      return true;
    } catch (e) {
      return false;
    }
  };
  // if (isMobile()) {
  //   console.log('是手機');
  // } else {
  //   console.log('是電腦');
  // }
  return { isMobile };
};
export default checkMobile;
