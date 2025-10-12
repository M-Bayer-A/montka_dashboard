import { createAsyncThunk } from "@reduxjs/toolkit";
import loginRepo from "../../../repositories/loginRepo";

export const checkCredentialsUseCase = createAsyncThunk(
  "login/checkCredentials",
  async (_, { getState, rejectWithValue }) => {
    const inputs = getState().login.inputs;
    try {
      const response = await loginRepo.checkCredentials(
        inputs.email,
        inputs.password
      );
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
