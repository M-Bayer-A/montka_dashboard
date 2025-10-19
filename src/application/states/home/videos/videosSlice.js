import { createSlice } from "@reduxjs/toolkit";
import { getVideosTableInfoUseCase } from "../../../useCases/home/videos/getVideosTableInfoUseCase";

//
const initialState = {
  isLoading: false,
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
  },
  // ==EXTRA REDUCERS==
  extraReducers(builder) {
    builder
      .addCase(getVideosTableInfoUseCase.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getVideosTableInfoUseCase.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.tableInfo = actions.payload.response;
      })
      .addCase(getVideosTableInfoUseCase.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
//
export const { setNumberOfRowsPerPage, setSearchInput } = videosSlice.actions;

export default videosSlice.reducer;
