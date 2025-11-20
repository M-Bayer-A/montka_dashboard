import { createAsyncThunk } from "@reduxjs/toolkit";
import phrasesRepo from "../../../../repositories/phrasesRepo";
import { getPhrasesTableInfoUseCase } from "./getPhrasesTableInfoUseCase";

export const addPhraseUseCase = createAsyncThunk(
  "phrases/addPhrase",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await phrasesRepo.add();
      dispatch(getPhrasesTableInfoUseCase({ page: 2 }));
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
