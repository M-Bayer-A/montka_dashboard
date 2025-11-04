export const videosSelectors = {
  isDataLoading: (state) => state.videos.isDataLoading,
  isActionLoading: (state) => state.videos.isActionLoading,
  isEditPopupOpen: (state) => state.videos.isEditPopupOpen,
  isAddPopupOpen: (state) => state.videos.isAddPopupOpen,
  searchInputValue: (state) => state.videos.searchInput,
  tableInfo: (state) => state.videos.tableInfo,
  paginationInfo: (state) => state.videos.paginationInfo,
  videoInfo: (state) => state.videos.videoInfo,
};
