export const usersSelectors = {
  isLoading: (state) => state.users.isLoading,
  searchInputValue: (state) => state.users.searchInput,
  tableInfo: (state) => state.users.tableInfo,
  paginationInfo: (state) => state.users.paginationInfo,
};
