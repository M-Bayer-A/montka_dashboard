import { createSlice } from "@reduxjs/toolkit";
import { getCouponsTableInfoUseCase } from "../../../useCases/home/coupons/getCouponsTableInfoUseCase";
import { addNewCouponUseCase } from "../../../useCases/home/coupons/addNewCouponUseCase";
//
const initialState = {
  isDataLoading: false,
  isActionLoading: false,
  //
  isPopupOpen: false,
  popupProcess: null,
  couponInfo: {
    code: "",
    validity: "",
  },
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
export const couponsSlice = createSlice({
  name: "coupons",
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
    togglePopupOpen: (state, { payload = {} }) => {
      const { process, code, validity } = payload;
      state.isPopupOpen = !state.isPopupOpen;
      state.popupProcess = process || "";
      state.couponInfo.code = code || "";
      state.couponInfo.validity = validity || "";
    },
    setCouponInfo: (state, actions) => {
      const { code, validity } = actions.payload;
      state.couponInfo.code = code || code == "" ? code : state.couponInfo.code;
      state.couponInfo.validity =
        validity || validity == "" ? validity : state.couponInfo.validity;
    },
  },
  // ==EXTRA REDUCERS==
  extraReducers(builder) {
    builder
      .addCase(getCouponsTableInfoUseCase.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(getCouponsTableInfoUseCase.fulfilled, (state, actions) => {
        state.isDataLoading = false;
        state.tableInfo = actions.payload.response;
      })
      .addCase(getCouponsTableInfoUseCase.rejected, (state) => {
        state.isDataLoading = false;
      });
    builder
      .addCase(addNewCouponUseCase.pending, (state) => {
        state.isActionLoading = true;
      })
      .addCase(addNewCouponUseCase.fulfilled, (state) => {
        state.isActionLoading = false;
      })
      .addCase(addNewCouponUseCase.rejected, (state) => {
        state.isActionLoading = false;
      });
  },
});
//
export const {
  setNumberOfRowsPerPage,
  setSearchInput,
  setCouponInfo,
  setPopupClose,
  setPopupOpen,
  togglePopupOpen,
} = couponsSlice.actions;

export default couponsSlice.reducer;
