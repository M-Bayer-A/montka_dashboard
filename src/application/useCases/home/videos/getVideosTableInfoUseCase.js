import { createAsyncThunk } from "@reduxjs/toolkit";
import videosRepo from "../../../../repositories/videosRepo";

export const getVideosTableInfoUseCase = createAsyncThunk(
  "videos/getVideosTableInfo",
  async ({ page = 1 }, { rejectWithValue }) => {
    try {
      const response = await videosRepo.getDataTable(page);
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
