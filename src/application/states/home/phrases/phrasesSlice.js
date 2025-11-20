import { createSlice } from "@reduxjs/toolkit";
import { getPhrasesTableInfoUseCase } from "../../../useCases/home/phrases/getPhrasesTableInfoUseCase";
import { addPhraseUseCase } from "../../../useCases/home/phrases/addPhraseUseCase";
import { editPhraseUseCase } from "../../../useCases/home/phrases/editPhraseUseCase";
import { deletePhraseUseCase } from "../../../useCases/home/phrases/deletePhraseUseCase";
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
  searchInput: "",
  tableInfo: {
    columns: [],
    data: [],
  },
  paginationInfo: {
    rowsPerPage: 5,
    totalPages: null,
    currentPage: null,
    nextPage: null,
    previousPage: null,
  },
  phraseInfo: {
    phrase: "",
    isActive: false,
  },
};
//
export const phrasesSlice = createSlice({
  name: "phrases",
  initialState,
  // ==REDUCERS==
  reducers: {
    setNumberOfRowsPerPage: (state, actions) => {
      const { number } = actions.payload;
      state.paginationInfo.rowsPerPage = number;
    },
    setSearchInput: (state, actions) => {
      const { input } = actions.payload;
      state.searchInput = input;
    },
    setPhraseInfo: (state, actions) => {
      const { phrase, isActive } = actions.payload;
      state.phraseInfo.phrase =
        phrase || phrase == "" ? phrase : state.phraseInfo.phrase;

      state.phraseInfo.isActive =
        isActive || isActive == "" ? isActive : state.phraseInfo.isActive;
    },
    toggleAddPopupOpen: (state) => {
      state.isAddPopupOpen = !state.isAddPopupOpen;
      state.phraseInfo = initialState.phraseInfo;
    },
    toggleEditPopupOpen: (state, { payload = {} }) => {
      const { phrase, isActive } = payload;
      state.isEditPopupOpen = !state.isEditPopupOpen;
      //
      state.phraseInfo.phrase = phrase || "";
      state.phraseInfo.isActive = isActive || false;
    },
    toggleDeletePopupOpen: (state) => {
      state.isDeletePopupOpen = !state.isDeletePopupOpen;
    },
  },
  // ==EXTRA REDUCERS==
  extraReducers(builder) {
    builder
      .addCase(getPhrasesTableInfoUseCase.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(getPhrasesTableInfoUseCase.fulfilled, (state, actions) => {
        state.isDataLoading = false;
        state.tableInfo = actions.payload.response;
      })
      .addCase(getPhrasesTableInfoUseCase.rejected, (state) => {
        state.isDataLoading = false;
      });
    builder
      .addCase(addPhraseUseCase.pending, (state) => {
        state.isActionLoading = true;
      })
      .addCase(addPhraseUseCase.fulfilled, (state) => {
        state.isActionLoading = false;
        state.isAddPopupOpen = false;
        state.phraseInfo = initialState.phraseInfo;
        showToast("success", "تمت إضافة العبارة بنجاح");
      })
      .addCase(addPhraseUseCase.rejected, (state) => {
        state.isActionLoading = false;
      });
    builder
      .addCase(editPhraseUseCase.pending, (state) => {
        state.isActionLoading = true;
      })
      .addCase(editPhraseUseCase.fulfilled, (state) => {
        state.isActionLoading = false;
        state.isEditPopupOpen = false;
        showToast("success", "تمت تعديل العبارة بنجاح");
      })
      .addCase(editPhraseUseCase.rejected, (state) => {
        state.isActionLoading = false;
      });
    builder
      .addCase(deletePhraseUseCase.pending, (state) => {
        state.isActionLoading = true;
      })
      .addCase(deletePhraseUseCase.fulfilled, (state) => {
        state.isActionLoading = false;
        state.isDeletePopupOpen = false;
        showToast("success", "تمت حذف العبارة بنجاح");
      })
      .addCase(deletePhraseUseCase.rejected, (state) => {
        state.isActionLoading = false;
      });
  },
});
//
export const {
  setNumberOfRowsPerPage,
  setSearchInput,
  setPhraseInfo,
  toggleAddPopupOpen,
  toggleDeletePopupOpen,
  toggleEditPopupOpen,
} = phrasesSlice.actions;

export default phrasesSlice.reducer;
