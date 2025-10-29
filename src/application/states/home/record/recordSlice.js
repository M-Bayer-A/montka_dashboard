import { createSlice } from "@reduxjs/toolkit";
import { getRecordTableInfoUseCase } from "../../../useCases/home/record/getRecordTableInfoUseCase";
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
export const recordSlice = createSlice({
  name: "record",
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
      .addCase(getRecordTableInfoUseCase.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRecordTableInfoUseCase.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.tableInfo = actions.payload.response;
      })
      .addCase(getRecordTableInfoUseCase.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
//
export const { setNumberOfRowsPerPage, setSearchInput } = recordSlice.actions;

export default recordSlice.reducer;
