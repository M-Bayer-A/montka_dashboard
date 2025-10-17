export const couponsSelectors = {
  isLoading: (state) => state.coupons.isLoading,
  searchInputValue: (state) => state.coupons.searchInput,
  tableInfo: (state) => state.coupons.tableInfo,
  paginationInfo: (state) => state.coupons.paginationInfo,
};
