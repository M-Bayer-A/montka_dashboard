export const couponsSelectors = {
  isDataLoading: (state) => state.coupons.isDataLoading,
  isActionLoading: (state) => state.coupons.isActionLoading,
  isAddPopupOpen: (state) => state.coupons.isAddPopupOpen,
  isEditPopupOpen: (state) => state.coupons.isEditPopupOpen,
  searchInputValue: (state) => state.coupons.searchInput,
  tableInfo: (state) => state.coupons.tableInfo,
  paginationInfo: (state) => state.coupons.paginationInfo,
  couponInfo: (state) => state.coupons.couponInfo,
};
