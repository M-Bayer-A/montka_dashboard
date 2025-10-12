import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./login/loginSlice";
import statisticsReducer from "./home/statistics/statisticsSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    statistics: statisticsReducer,
  },
});
