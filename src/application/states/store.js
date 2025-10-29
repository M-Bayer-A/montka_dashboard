import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./login/loginSlice";
import statisticsReducer from "./home/statistics/statisticsSlice";
import couponsReducer from "./home/coupons/couponsSlice";
import videosReducer from "./home/videos/videosSlice";
import sectionsReducer from "./home/sections/sectionsSlice";
import phrasesReducer from "./home/phrases/phrasesSlice";
import notificationsReducer from "./home/notifications/notificationsSlice";
import usersReducer from "./home/users/usersSlice";
import recordReducer from "./home/record/recordSlice";
export const store = configureStore({
  reducer: {
    login: loginReducer,
    statistics: statisticsReducer,
    coupons: couponsReducer,
    videos: videosReducer,
    sections: sectionsReducer,
    phrases: phrasesReducer,
    notifications: notificationsReducer,
    users: usersReducer,
    record: recordReducer,
  },
});
