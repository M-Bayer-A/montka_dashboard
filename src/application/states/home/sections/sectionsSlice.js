import { createSlice } from "@reduxjs/toolkit";
import { getSectionsOrderUseCase } from "../../../useCases/home/sections/getSectionsInfoUseCase";
import { editSectionUseCase } from "../../../useCases/home/sections/editSectionUseCase";
import { addSectionUseCase } from "../../../useCases/home/sections/addSectionUseCase";
import { deleteSectionUseCase } from "../../../useCases/home/sections/deleteSectionUseCase";
import { showToast } from "../../../../ui/components/shared/toastProvider";

//
const initialState = {
  isDataLoading: false,
  isActionLoading: false,
  //
  isAddPopupOpen: false,
  isEditPopupOpen: false,
  isDeletePopupOpen: false,
  //
  sectionsOrder: [],
  sectionInfo: {
    name: "",
    imageUrl: "",
  },
};
//
export const sectionsSlice = createSlice({
  name: "sections",
  initialState,
  // ==REDUCERS==
  reducers: {
    moveUp: (state, actions) => {
      const { id } = actions.payload;
      const index = state.sectionsOrder.findIndex((s) => s.id === id);
      if (index > 0) {
        const temp = state.sectionsOrder[index - 1];
        state.sectionsOrder[index - 1] = state.sectionsOrder[index];
        state.sectionsOrder[index] = temp;
      }
    },
    moveDown: (state, action) => {
      const { id } = action.payload;
      const index = state.sectionsOrder.findIndex(
        (section) => section.id === id
      );
      if (index < state.sectionsOrder.length - 1 && index !== -1) {
        const temp = state.sectionsOrder[index + 1];
        state.sectionsOrder[index + 1] = state.sectionsOrder[index];
        state.sectionsOrder[index] = temp;
      }
    },
    toggleAddPopupOpen: (state) => {
      state.isAddPopupOpen = !state.isAddPopupOpen;
      state.sectionInfo = initialState.sectionInfo;
    },
    toggleEditPopupOpen: (state, { payload = {} }) => {
      const { name, imageUrl } = payload;
      state.isEditPopupOpen = !state.isEditPopupOpen;
      //
      state.sectionInfo.name = name || "";
      state.sectionInfo.imageUrl = imageUrl || "";
    },
    toggleDeletePopupOpen: (state) => {
      state.isDeletePopupOpen = !state.isDeletePopupOpen;
    },
    setSectionInfo: (state, actions) => {
      const { name, imageUrl } = actions.payload;
      state.sectionInfo.name =
        name || name == "" ? name : state.sectionInfo.name;

      state.sectionInfo.imageUrl =
        imageUrl || imageUrl == "" ? imageUrl : state.sectionInfo.imageUrl;
    },
  },
  // ==EXTRA REDUCERS==
  extraReducers(builder) {
    builder
      .addCase(getSectionsOrderUseCase.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(getSectionsOrderUseCase.fulfilled, (state, actions) => {
        state.isDataLoading = false;
        state.sectionsOrder = actions.payload.response;
      })
      .addCase(getSectionsOrderUseCase.rejected, (state) => {
        state.isDataLoading = false;
      });
    builder
      .addCase(addSectionUseCase.pending, (state) => {
        state.isActionLoading = true;
      })
      .addCase(addSectionUseCase.fulfilled, (state) => {
        state.isActionLoading = false;
        state.sectionInfo = initialState.sectionInfo;
        state.isAddPopupOpen = false;
        showToast("success", "تمت إضافة القسم بنجاح");
      })
      .addCase(addSectionUseCase.rejected, (state) => {
        state.isActionLoading = false;
      });
    builder
      .addCase(editSectionUseCase.pending, (state) => {
        state.isActionLoading = true;
      })
      .addCase(editSectionUseCase.fulfilled, (state) => {
        state.isActionLoading = false;
        state.sectionInfo = initialState.sectionInfo;
        state.isEditPopupOpen = false;
        showToast("success", "تم التعديل بنجاح");
      })
      .addCase(editSectionUseCase.rejected, (state) => {
        state.isActionLoading = false;
      });
    builder
      .addCase(deleteSectionUseCase.pending, (state) => {
        state.isActionLoading = true;
      })
      .addCase(deleteSectionUseCase.fulfilled, (state) => {
        state.isActionLoading = false;
        state.isDeletePopupOpen = false;
        showToast("success", "تم حذف القسم بنجاح");
      })
      .addCase(deleteSectionUseCase.rejected, (state) => {
        state.isActionLoading = false;
      });
  },
});
//
export const {
  moveDown,
  moveUp,
  toggleAddPopupOpen,
  toggleEditPopupOpen,
  toggleDeletePopupOpen,
  setSectionInfo,
} = sectionsSlice.actions;

export default sectionsSlice.reducer;
