import { createSlice } from "@reduxjs/toolkit";
import { showToast } from "../../../ui/components/shared/toastProvider";
import { checkCredentialsUseCase } from "../../useCases/login/checkCredentialsUseCase";
import { checkOtpUseCase } from "../../useCases/login/checkOtpUseCase";
//
const initialState = {
  isLoading: false,
  currentFormID: 1,
  isAuth: false,
  inputs: {
    email: "",
    password: "",
    otp: "",
  },
};
//
export const loginSlice = createSlice({
  name: "login",
  initialState,
  // ==REDUCERS==
  reducers: {
    resetInputs: () => {
      return initialState;
    },
    setInputs: (state, actions) => {
      const { email, password, otp } = actions.payload;
      state.inputs.email = email || email == "" ? email : state.inputs.email;
      state.inputs.password =
        password || password == "" ? password : state.inputs.password;
      state.inputs.otp = otp || otp == "" ? otp : state.inputs.otp;
    },
    setCurrentFormID: (state, actions) => {
      const { currentFormID } = actions.payload;
      state.currentFormID = currentFormID;
    },
  },
  // ==EXTRA REDUCERS==
  extraReducers(builder) {
    builder
      .addCase(checkCredentialsUseCase.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkCredentialsUseCase.fulfilled, (state, actions) => {
        state.isLoading = false;

        showToast("success", "نجاح");
        state.currentFormID = 2;
      })
      .addCase(checkCredentialsUseCase.rejected, (state) => {
        state.isLoading = false;
        showToast("error", "فشل");
      });
    builder
      .addCase(checkOtpUseCase.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkOtpUseCase.fulfilled, (state, actions) => {
        state.isLoading = false;
        showToast("success", "نجاح");
        state.isAuth = true;
      })
      .addCase(checkOtpUseCase.rejected, (state) => {
        state.isLoading = false;
        showToast("error", "فشل");
        state.isAuth = false;
      });
  },
});
//
export const { setInputs, resetInputs, setCurrentFormID } = loginSlice.actions;

export default loginSlice.reducer;
