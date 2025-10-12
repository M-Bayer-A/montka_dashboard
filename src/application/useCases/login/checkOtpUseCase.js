import { createAsyncThunk } from "@reduxjs/toolkit";
import loginRepo from "../../../repositories/loginRepo";

export const checkOtpUseCase = createAsyncThunk(
  "login/checkOtp",
  async (_, { getState, rejectWithValue }) => {
    const inputs = getState().login.inputs;
    try {
      const response = await loginRepo.checkOtp(inputs.email, inputs.otp);

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
