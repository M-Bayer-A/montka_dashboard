import { createSlice } from "@reduxjs/toolkit";
import { getPhrasesTableInfoUseCase } from "../../../useCases/home/phrases/getPhrasesTableInfoUseCase";

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
  },
  // ==EXTRA REDUCERS==
  extraReducers(builder) {
    builder
      .addCase(getPhrasesTableInfoUseCase.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPhrasesTableInfoUseCase.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.tableInfo = actions.payload.response;
      })
      .addCase(getPhrasesTableInfoUseCase.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
//
export const { setNumberOfRowsPerPage, setSearchInput } = phrasesSlice.actions;

export default phrasesSlice.reducer;
