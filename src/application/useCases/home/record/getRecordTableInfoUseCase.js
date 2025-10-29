import { createAsyncThunk } from "@reduxjs/toolkit";
import recordRepo from "../../../../repositories/recordRepo";

export const getRecordTableInfoUseCase = createAsyncThunk(
  "record/getRecordTableInfo",
  async ({ page = 1 }, { rejectWithValue }) => {
    try {
      const response = await recordRepo.getTableInfo(page);
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
