const sortedMatchesList = () => {
  // 依時間升序排序，如果時間相等，再依交易量降續排序
  const matchesListSortedByTime = (matchesList) => {
    matchesList.sort((a, b) => {
      const timeA = new Date(a.start_date ?? null);
      const timeB = new Date(b.start_date ?? null);
      // const timeA = a.start_date;
      // const timeB = b.start_date;
      const traded_A = a.traded;
      const traded_B = b.traded;
      const eventId_A = Number(a.event_id);
      const eventId_B = Number(b.event_id);

      if (timeA - timeB === 0) {
        if (traded_B === traded_A) {
          return eventId_A - eventId_B;
        }
        return traded_B - traded_A;
      }
      return timeA - timeB;
    });
  };
  const matchesListSortedByTrades = (matchesList) => {
    matchesList.sort((a, b) => {
      const traded_A = a.traded;
      const traded_B = b.traded;
      const timeA = new Date(a.start_date ?? null);
      const timeB = new Date(b.start_date ?? null);
      const eventId_A = Number(a.event_id);
      const eventId_B = Number(b.event_id);
      if (traded_B === traded_A) {
        if (timeA - timeB === 0) {
          return eventId_A - eventId_B;
        }
        return timeA - timeB;
      }
      return traded_B - traded_A;
    });
  };
  return { matchesListSortedByTime, matchesListSortedByTrades };
};

export default sortedMatchesList;
