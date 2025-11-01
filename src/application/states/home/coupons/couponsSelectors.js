export const couponsSelectors = {
  isDataLoading: (state) => state.coupons.isDataLoading,
  isActionLoading: (state) => state.coupons.isActionLoading,
  searchInputValue: (state) => state.coupons.searchInput,
  tableInfo: (state) => state.coupons.tableInfo,
  paginationInfo: (state) => state.coupons.paginationInfo,
  isPopupOpen: (state) => state.coupons.isPopupOpen,
  popupProcess: (state) => state.coupons.popupProcess,
  couponInfo: (state) => state.coupons.couponInfo,
};
