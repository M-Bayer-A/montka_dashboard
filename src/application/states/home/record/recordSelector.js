export const recordSelectors = {
  isLoading: (state) => state.record.isLoading,
  searchInputValue: (state) => state.record.searchInput,
  tableInfo: (state) => state.record.tableInfo,
  paginationInfo: (state) => state.record.paginationInfo,
};
