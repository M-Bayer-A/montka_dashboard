export const notificationsSelectors = {
  isLoading: (state) => state.notifications.isLoading,
  searchInputValue: (state) => state.notifications.searchInput,
  tableInfo: (state) => state.notifications.tableInfo,
  paginationInfo: (state) => state.notifications.paginationInfo,
};
