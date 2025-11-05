import { createSlice } from "@reduxjs/toolkit";
import { getCouponsTableInfoUseCase } from "../../../useCases/home/coupons/getCouponsTableInfoUseCase";
import { editCouponUseCase } from "../../../useCases/home/coupons/editCouponUseCase";
import { showToast } from "../../../../ui/components/shared/toastProvider";
import { addCouponUseCase } from "../../../useCases/home/coupons/addCouponUseCase";
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
  couponInfo: {
    code: "",
    validity: "",
  },
};
//
export const couponsSlice = createSlice({
  name: "coupons",
  initialState,
  // ==REDUCERS==
  reducers: {
    setSearchInput: (state, actions) => {
      const { input } = actions.payload;
      state.searchInput = input;
    },
    setNumberOfRowsPerPage: (state, actions) => {
      const { number } = actions.payload;
      state.paginationInfo.rowsPerPage = number;
    },
    toggleAddPopupOpen: (state) => {
      state.isAddPopupOpen = !state.isAddPopupOpen;
      state.couponInfo = initialState.couponInfo;
    },
    toggleEditPopupOpen: (state, { payload = {} }) => {
      const { code, validity } = payload;
      state.isEditPopupOpen = !state.isEditPopupOpen;
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
      .addCase(editCouponUseCase.pending, (state) => {
        state.isActionLoading = true;
      })
      .addCase(editCouponUseCase.fulfilled, (state) => {
        state.isActionLoading = false;
        state.isEditPopupOpen = false;
        state.couponInfo = initialState.couponInfo;
        showToast("success", "تم تعديل الكود بنجاح");
      })
      .addCase(editCouponUseCase.rejected, (state) => {
        state.isActionLoading = false;
      });
    builder
      .addCase(addCouponUseCase.pending, (state) => {
        state.isActionLoading = true;
      })
      .addCase(addCouponUseCase.fulfilled, (state) => {
        state.isActionLoading = false;
        state.isAddPopupOpen = false;
        state.couponInfo = initialState.couponInfo;
        showToast("success", "تم توليد الكود بنجاح");
      })
      .addCase(addCouponUseCase.rejected, (state) => {
        state.isActionLoading = false;
      });
  },
});
//
export const {
  setCouponInfo,
  setNumberOfRowsPerPage,
  setSearchInput,
  toggleAddPopupOpen,
  toggleEditPopupOpen,
} = couponsSlice.actions;

export default couponsSlice.reducer;
