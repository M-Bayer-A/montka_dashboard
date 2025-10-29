import { createSlice } from "@reduxjs/toolkit";
import { getUsersTableInfoUseCase } from "../../../useCases/home/users/getUsersTableInfoUseCase";
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
export const usersSlice = createSlice({
  name: "users",
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
      .addCase(getUsersTableInfoUseCase.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsersTableInfoUseCase.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.tableInfo = actions.payload.response;
      })
      .addCase(getUsersTableInfoUseCase.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
//
export const { setNumberOfRowsPerPage, setSearchInput } = usersSlice.actions;

export default usersSlice.reducer;
