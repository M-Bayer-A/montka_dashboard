import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./login/loginSlice";
import statisticsReducer from "./home/statistics/statisticsSlice";
import couponsReducer from "./home/coupons/couponsSlice";
import videosReducer from "./home/videos/videosSlice";
import sectionsReducer from "./home/sections/sectionsSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    statistics: statisticsReducer,
    coupons: couponsReducer,
    videos: videosReducer,
    sections: sectionsReducer,
  },
});
