import { createSlice } from "@reduxjs/toolkit";
import { getNotificationsTableInfoUseCase } from "../../../useCases/home/notifications/getNotificationsTableInfoUseCase";
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
export const notificationsSlice = createSlice({
  name: "notifications",
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
      .addCase(getNotificationsTableInfoUseCase.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNotificationsTableInfoUseCase.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.tableInfo = actions.payload.response;
      })
      .addCase(getNotificationsTableInfoUseCase.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
//
export const { setNumberOfRowsPerPage, setSearchInput } =
  notificationsSlice.actions;

export default notificationsSlice.reducer;
