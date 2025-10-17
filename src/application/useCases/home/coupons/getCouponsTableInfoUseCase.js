import { createAsyncThunk } from "@reduxjs/toolkit";
import couponsRepo from "../../../../repositories/couponsRepo";

export const getCouponsTableInfoUseCase = createAsyncThunk(
  "coupons/getCouponsTableInfo",
  async ({ page = 1 }, { rejectWithValue }) => {
    try {
      const response = await couponsRepo.getDataTable(page);
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
