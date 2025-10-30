import { createAsyncThunk } from "@reduxjs/toolkit";
import loginRepo from "../../../repositories/loginRepo";

export const setNewPasswordUseCase = createAsyncThunk(
  "login/setNewPassword",
  async (_, { getState, rejectWithValue }) => {
    const inputs = getState().login.inputs;
    try {
      const response = await loginRepo.setNewPassword(inputs.email);
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
