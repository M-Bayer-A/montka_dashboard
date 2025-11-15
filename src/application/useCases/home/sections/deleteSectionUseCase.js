import { createAsyncThunk } from "@reduxjs/toolkit";
import sectionsRepo from "../../../../repositories/sectionsRepo";

export const deleteSectionUseCase = createAsyncThunk(
  "sections/deleteSection",
  async (_, { rejectWithValue }) => {
    try {
      const response = await sectionsRepo.delete();
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
