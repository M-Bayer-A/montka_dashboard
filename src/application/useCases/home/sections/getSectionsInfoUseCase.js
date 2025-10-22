import { createAsyncThunk } from "@reduxjs/toolkit";
import sectionsRepo from "../../../../repositories/sectionsRepo";

export const getSectionsInfoUseCase = createAsyncThunk(
  "sections/getSectionsInfo",
  async (_, { rejectWithValue }) => {
    try {
      const response = await sectionsRepo.getSectionsInfo();
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
