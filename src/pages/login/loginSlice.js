import { createSlice } from "@reduxjs/toolkit";
//
const initialState = {
  email: "",
  password: "",
  otp: "",
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
      state.email = email || email == "" ? email : state.email;
      state.password = password || password == "" ? password : state.password;
      state.otp = otp || otp == "" ? otp : state.otp;
    },
  },
  // ==EXTRA REDUCERS==
  //   extraReducers(builder) {},
});
// SELECTORS
export const selectInputsInfo = (state) => state.loginPage;
//
export const { resetDataTable, setInputs } = loginSlice.actions;

export default loginSlice.reducer;
