const checkEmpty = () => {
  const isEmpty = (obj) => {
    // obj === undefined 以免報錯
    if (obj === undefined) return true
    if (Object.keys(obj).length === 0) return true;
    return false;
  };

  return {
    isEmpty,
  };
};

export default checkEmpty;
