import { createAsyncThunk } from "@reduxjs/toolkit";
import notificationsRepo from "../../../../repositories/notificationsRepo";

export const addNotificationUseCase = createAsyncThunk(
  "notifications/addNotification",
  async (_, { rejectWithValue }) => {
    try {
      const response = await notificationsRepo.add();
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
