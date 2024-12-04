//由新到舊排序全部orders
const SortOrders = (orders) => {
  orders.sort((a, b) => {
    const timeA =
      a.settle_order_dt ||
      a.matched_order_dt ||
      a.cancel_order_dt ||
      a.place_order_dt ||
      a.create_at;
    const timeB =
      b.settle_order_dt ||
      b.matched_order_dt ||
      b.cancel_order_dt ||
      b.place_order_dt ||
      b.create_at;
    return timeA < timeB ? 1 : timeA > timeB ? -1 : 0;
  });
};

export default SortOrders;