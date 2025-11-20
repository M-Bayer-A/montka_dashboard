export const phrasesSelectors = {
  isDataLoading: (state) => state.phrases.isDataLoading,
  isActionLoading: (state) => state.phrases.isActionLoading,
  isAddPopupOpen: (state) => state.phrases.isAddPopupOpen,
  isEditPopupOpen: (state) => state.phrases.isEditPopupOpen,
  isDeletePopupOpen: (state) => state.phrases.isDeletePopupOpen,
  phraseInfo: (state) => state.phrases.phraseInfo,
  searchInputValue: (state) => state.phrases.searchInput,
  tableInfo: (state) => state.phrases.tableInfo,
  paginationInfo: (state) => state.phrases.paginationInfo,
};
