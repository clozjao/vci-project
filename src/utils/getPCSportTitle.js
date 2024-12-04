//桌面版字首大寫
const getPCSportTitle = (sportTitle) => {
  return sportTitle.replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
};

export const getNoEventTitle = (sportTitle) => {
  switch (sportTitle) {
    default:
      return decodeURI(sportTitle).toLowerCase().replace(' ', '_');
  }
};

export const getNoEventIcon = (sportTitle) => {
  switch (sportTitle) {
    default:
      return decodeURI(sportTitle).replace(' ', '-');
  }
};

export default getPCSportTitle;
