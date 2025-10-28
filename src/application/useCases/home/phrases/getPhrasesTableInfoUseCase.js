import { createAsyncThunk } from "@reduxjs/toolkit";
import phrasesRepo from "../../../../repositories/phrasesRepo";

export const getPhrasesTableInfoUseCase = createAsyncThunk(
  "phrases/getPhrasesTableInfo",
  async ({ page = 1 }, { rejectWithValue }) => {
    try {
      const response = await phrasesRepo.getTableInfo(page);
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
