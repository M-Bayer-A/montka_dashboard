import { createAsyncThunk } from "@reduxjs/toolkit";
import couponsRepo from "../../../../repositories/couponsRepo";

export const addCouponUseCase = createAsyncThunk(
  "coupons/addCoupon",
  async (_, { getState, rejectWithValue }) => {
    try {
      const couponInfo = getState().coupons.couponInfo;
      const response = await couponsRepo.addCoupon(couponInfo);
      return { success: true, response: response };
    } catch (err) {
      // return rejectWithValue(err.response?.data || "Something went wrong");
      return rejectWithValue({
        success: false,
        response: err.response.data.message,
      });
    }
  }
);
