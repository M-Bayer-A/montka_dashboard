import { createAsyncThunk } from "@reduxjs/toolkit";
import usersRepo from "../../../../repositories/usersRepo";

export const getUsersTableInfoUseCase = createAsyncThunk(
  "users/getUsersTableInfo",
  async ({ page = 1 }, { rejectWithValue }) => {
    try {
      const response = await usersRepo.getTableInfo(page);
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
