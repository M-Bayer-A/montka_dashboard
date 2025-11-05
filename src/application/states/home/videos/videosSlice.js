import { createSlice } from "@reduxjs/toolkit";
import { getVideosTableInfoUseCase } from "../../../useCases/home/videos/getVideosTableInfoUseCase";
import { editVideoUseCase } from "../../../useCases/home/videos/editVideoUseCase";
import { addVideoUseCase } from "../../../useCases/home/videos/addVideoUseCase";
import { showToast } from "../../../../ui/components/shared/toastProvider";

//
const initialState = {
  isDataLoading: false,
  isActionLoading: false,
  //
  isAddPopupOpen: false,
  isEditPopupOpen: false,
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
  videoInfo: {
    url: "",
    title: "",
    description: "",
    mainSection: null,
    age: 18,
    notes: "",
    tags: "",
    isPinned: false,
  },
};
//
export const videosSlice = createSlice({
  name: "videos",
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
    toggleAddPopupOpen: (state) => {
      state.isAddPopupOpen = !state.isAddPopupOpen;
      state.videoInfo = initialState.videoInfo;
    },
    toggleEditPopupOpen: (state, { payload = {} }) => {
      const {
        url,
        title,
        description,
        mainSection,
        age,
        notes,
        tags,
        isPinned,
      } = payload;
      state.isEditPopupOpen = !state.isEditPopupOpen;
      //
      state.videoInfo.url = url || "";
      state.videoInfo.title = title || "";
      state.videoInfo.description = description || "";
      state.videoInfo.mainSection = mainSection || "";
      state.videoInfo.age = age || "";
      state.videoInfo.notes = notes || "";
      state.videoInfo.tags = tags || "";
      state.videoInfo.isPinned = isPinned || "";
    },
    setVideoInfo: (state, actions) => {
      const {
        url,
        title,
        description,
        mainSection,
        age,
        notes,
        tags,
        isPinned,
      } = actions.payload;
      state.videoInfo.url = url || url == "" ? url : state.videoInfo.url;

      state.videoInfo.title =
        title || title == "" ? title : state.videoInfo.title;

      state.videoInfo.description =
        description || description == ""
          ? description
          : state.videoInfo.description;

      state.videoInfo.mainSection = mainSection
        ? mainSection
        : state.videoInfo.mainSection;

      state.videoInfo.age = age || age == "" ? age : state.videoInfo.age;

      state.videoInfo.notes =
        notes || notes == "" ? notes : state.videoInfo.notes;

      state.videoInfo.tags = tags || tags == "" ? tags : state.videoInfo.tags;

      state.videoInfo.isPinned =
        isPinned != null ? isPinned : state.videoInfo.isPinned;
    },
  },
  // ==EXTRA REDUCERS==
  extraReducers(builder) {
    builder
      .addCase(getVideosTableInfoUseCase.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(getVideosTableInfoUseCase.fulfilled, (state, actions) => {
        state.isDataLoading = false;
        state.tableInfo = actions.payload.response;
      })
      .addCase(getVideosTableInfoUseCase.rejected, (state) => {
        state.isDataLoading = false;
      });
    builder
      .addCase(editVideoUseCase.pending, (state) => {
        state.isActionLoading = true;
      })
      .addCase(editVideoUseCase.fulfilled, (state) => {
        state.isActionLoading = false;
        state.isEditPopupOpen = false;
        state.videoInfo = initialState.videoInfo;
        showToast("success", "تم تعديل الفيديو بنجاح");
      })
      .addCase(editVideoUseCase.rejected, (state) => {
        state.isActionLoading = false;
      });
    builder
      .addCase(addVideoUseCase.pending, (state) => {
        state.isActionLoading = true;
      })
      .addCase(addVideoUseCase.fulfilled, (state) => {
        state.isActionLoading = false;
        state.isAddPopupOpen = false;
        state.videoInfo = initialState.videoInfo;
        showToast("success", "تم إضافة الفيديو بنجاح");
      })
      .addCase(addVideoUseCase.rejected, (state) => {
        state.isActionLoading = false;
      });
  },
});
//
export const {
  setNumberOfRowsPerPage,
  setSearchInput,
  setVideoInfo,
  toggleAddPopupOpen,
  toggleEditPopupOpen,
} = videosSlice.actions;

export default videosSlice.reducer;
