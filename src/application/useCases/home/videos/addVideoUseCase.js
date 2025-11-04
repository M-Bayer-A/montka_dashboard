import { createAsyncThunk } from "@reduxjs/toolkit";
import videosRepo from "../../../../repositories/videosRepo";

export const addVideoUseCase = createAsyncThunk(
  "videos/addVideo",
  async (_, { rejectWithValue }) => {
    try {
      const response = await videosRepo.addVideo();
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
