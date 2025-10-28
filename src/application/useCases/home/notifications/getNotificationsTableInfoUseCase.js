import { createAsyncThunk } from "@reduxjs/toolkit";
import notificationsRepo from "../../../../repositories/notificationsRepo";

export const getNotificationsTableInfoUseCase = createAsyncThunk(
  "notifications/getNotificationsTableInfo",
  async ({ page = 1 }, { rejectWithValue }) => {
    try {
      const response = await notificationsRepo.getTableInfo(page);
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
