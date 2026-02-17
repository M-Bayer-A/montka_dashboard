import { createSlice } from "@reduxjs/toolkit";
import { getNotificationsTableInfoUseCase } from "../../../useCases/home/notifications/getNotificationsTableInfoUseCase";
import { addNotificationUseCase } from "../../../useCases/home/notifications/addNotificationUseCase";
import { showToast } from "../../../../ui/components/shared/toastProvider";
//
const initialState = {
  isDataLoading: false,
  isActionLoading: false,
  //
  isAddPopupOpen: false,
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
  notificationInfo: {
    title: "",
    message: "",
    audience: "all",
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
    toggleAddPopupOpen: (state) => {
      state.isAddPopupOpen = !state.isAddPopupOpen;
      state.notificationInfo = initialState.notificationInfo;
    },
    setNotificationInfo: (state, actions) => {
      const { title, message } = actions.payload;
      state.notificationInfo.title =
        title || title == "" ? title : state.notificationInfo.title;

      state.notificationInfo.message =
        message || message == "" ? message : state.notificationInfo.message;
    },
  },
  // ==EXTRA REDUCERS==
  extraReducers(builder) {
    builder
      .addCase(getNotificationsTableInfoUseCase.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(getNotificationsTableInfoUseCase.fulfilled, (state, actions) => {
        state.isDataLoading = false;
        state.tableInfo = actions.payload.response;
      })
      .addCase(getNotificationsTableInfoUseCase.rejected, (state) => {
        state.isDataLoading = false;
      });
    builder
      .addCase(addNotificationUseCase.pending, (state) => {
        state.isActionLoading = true;
      })
      .addCase(addNotificationUseCase.fulfilled, (state) => {
        state.isActionLoading = false;
        state.isAddPopupOpen = false;
        state.phraseInfo = initialState.phraseInfo;
        showToast("success", "تم إرسال إشعار بنجاح");
      })
      .addCase(addNotificationUseCase.rejected, (state) => {
        state.isActionLoading = false;
      });
  },
});
//
export const {
  setNumberOfRowsPerPage,
  setSearchInput,
  setNotificationInfo,
  toggleAddPopupOpen,
} = notificationsSlice.actions;

export default notificationsSlice.reducer;
