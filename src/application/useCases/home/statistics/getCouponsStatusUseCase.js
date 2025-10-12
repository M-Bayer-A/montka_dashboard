import { createAsyncThunk } from "@reduxjs/toolkit";
import statisticsRepo from "../../../../repositories/statisticsRepo";

export const getCouponsStatusUseCase = createAsyncThunk(
  "statistics/getCouponsStatus",
  async (_, { rejectWithValue }) => {
    try {
      const response = await statisticsRepo.getCouponsStatus();
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
