import { createAsyncThunk } from "@reduxjs/toolkit";
import videosRepo from "../../../../repositories/videosRepo";

export const editVideoUseCase = createAsyncThunk(
  "videos/editVideo",
  async (_, { rejectWithValue }) => {
    try {
      const response = await videosRepo.editVideo();
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
