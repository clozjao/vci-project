const checkNumber = () => {
  const isStringIncludeNumber = (val) => {
    let reg = /\d/;
    return reg.test(val);
  };
  return isStringIncludeNumber
};

export default checkNumber;
