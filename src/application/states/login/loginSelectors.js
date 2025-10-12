export const loginSelectors = {
  inputs: (state) => state.login.inputs,
  currentFormID: (state) => state.login.currentFormID,
  isLoading: (state) => state.login.isLoading,
  isAuth: (state) => state.login.isAuth,
};
