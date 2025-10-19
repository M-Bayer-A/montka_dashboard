export const videosSelectors = {
  isLoading: (state) => state.videos.isLoading,
  searchInputValue: (state) => state.videos.searchInput,
  tableInfo: (state) => state.videos.tableInfo,
  paginationInfo: (state) => state.videos.paginationInfo,
};
