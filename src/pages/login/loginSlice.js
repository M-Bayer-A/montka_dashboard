import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { showToast } from "../../providers/toastProvider";
//
export const checkCredentials = createAsyncThunk(
  "loginPage/checkCredentials",
  async (_, { getState, rejectWithValue }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const credentials = getState().loginPage.inputs;
      if (credentials.email != "kmtsm1692004@gmail.com") {
        throw new Error("Data is not valid!");
      } else {
        return "Success!";
      }
    } catch (err) {
      // return rejectWithValue(err.response?.data || "Something went wrong");
      return rejectWithValue(err.message);
    }
  }
);
//
const initialState = {
  isLoading: false,
  currentFormID: 1,
  inputs: {
    email: "",
    password: "",
    otp: "",
  },
};
//
export const loginSlice = createSlice({
  name: "loginPage",
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
      .addCase(checkCredentials.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkCredentials.fulfilled, (state) => {
        state.isLoading = false;
        showToast("success", "نجاح");
        state.currentFormID = 2;
      })
      .addCase(checkCredentials.rejected, (state) => {
        state.isLoading = false;
        showToast("error", "فشل");
      });
  },
});
// SELECTORS
export const selectLoginInputs = (state) => state.loginPage.inputs;
export const selectLoginCurrentFormID = (state) =>
  state.loginPage.currentFormID;
export const selectIsLoginLoading = (state) => state.loginPage.isLoading;
//
export const { setInputs, resetInputs, setCurrentFormID } = loginSlice.actions;

export default loginSlice.reducer;
