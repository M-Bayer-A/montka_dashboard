export const sectionsSelectors = {
  isDataLoading: (state) => state.sections.isDataLoading,
  isActionLoading: (state) => state.sections.isActionLoading,
  isEditPopupOpen: (state) => state.sections.isEditPopupOpen,
  isAddPopupOpen: (state) => state.sections.isAddPopupOpen,
  isDeletePopupOpen: (state) => state.sections.isDeletePopupOpen,
  sectionsOrder: (state) => state.sections.sectionsOrder,
  sectionInfo: (state) => state.sections.sectionInfo,
};
