export const phrasesSelectors = {
  isLoading: (state) => state.phrases.isLoading,
  searchInputValue: (state) => state.phrases.searchInput,
  tableInfo: (state) => state.phrases.tableInfo,
  paginationInfo: (state) => state.phrases.paginationInfo,
};
