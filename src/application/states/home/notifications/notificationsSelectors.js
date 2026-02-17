export const notificationsSelectors = {
  isDataLoading: (state) => state.notifications.isDataLoading,
  isActionLoading: (state) => state.notifications.isActionLoading,
  isAddPopupOpen: (state) => state.notifications.isAddPopupOpen,
  searchInputValue: (state) => state.notifications.searchInput,
  tableInfo: (state) => state.notifications.tableInfo,
  paginationInfo: (state) => state.notifications.paginationInfo,
  notificationInfo: (state) => state.notifications.notificationInfo,
};
