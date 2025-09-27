import { createSlice } from "@reduxjs/toolkit";
//
const initialState = {
  email: "",
  password: "",
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
      const { email, password } = actions.payload;
      state.email = email || email == "" ? email : state.email;
      state.password = password || password == "" ? password : state.password;
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
