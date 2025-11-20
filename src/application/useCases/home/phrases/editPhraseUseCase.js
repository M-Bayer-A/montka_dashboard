import { createAsyncThunk } from "@reduxjs/toolkit";
import phrasesRepo from "../../../../repositories/phrasesRepo";

export const editPhraseUseCase = createAsyncThunk(
  "phrases/editPhrase",
  async (_, { rejectWithValue }) => {
    try {
      const response = await phrasesRepo.edit();
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
