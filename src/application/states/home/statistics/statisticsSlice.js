import { createSlice } from "@reduxjs/toolkit";
import { getAppDetailsUseCase } from "../../../useCases/home/statistics/getAppDetailsUseCase";
import { getCouponsStatusUseCase } from "../../../useCases/home/statistics/getCouponsStatusUseCase";
import { getVideosSectionsUseCase } from "../../../useCases/home/statistics/getVideosSectionsUseCase";
import { getLatestActivitiesUseCase } from "../../../useCases/home/statistics/getLastestActivitiesUseCase";
//
const initialState = {
  isLoading: {
    appDetails: false,
    couponsStatus: false,
    videosSections: false,
    latestActivities: false,
    mostViewedVideos: false,
  },
  appDetails: {},
  couponsStatus: {},
  videosSections: [],
  latestActivities: [],
  mostViewedVideos: [],
};
//
export const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  // ==REDUCERS==
  reducers: {},
  // ==EXTRA REDUCERS==
  extraReducers(builder) {
    builder
      .addCase(getAppDetailsUseCase.pending, (state) => {
        state.isLoading.appDetails = true;
      })
      .addCase(getAppDetailsUseCase.fulfilled, (state, actions) => {
        state.isLoading.appDetails = false;
        state.appDetails = actions.payload.response;
      })
      .addCase(getAppDetailsUseCase.rejected, (state) => {
        state.isLoading.appDetails = false;
      });
    builder
      .addCase(getCouponsStatusUseCase.pending, (state) => {
        state.isLoading.couponsStatus = true;
      })
      .addCase(getCouponsStatusUseCase.fulfilled, (state, actions) => {
        state.isLoading.couponsStatus = false;
        state.couponsStatus = actions.payload.response;
      })
      .addCase(getCouponsStatusUseCase.rejected, (state) => {
        state.isLoading.couponsStatus = false;
      });
    builder
      .addCase(getVideosSectionsUseCase.pending, (state) => {
        state.isLoading.videosSections = true;
      })
      .addCase(getVideosSectionsUseCase.fulfilled, (state, actions) => {
        state.isLoading.videosSections = false;
        state.videosSections = actions.payload.response;
      })
      .addCase(getVideosSectionsUseCase.rejected, (state) => {
        state.isLoading.videosSections = false;
      });
    builder
      .addCase(getLatestActivitiesUseCase.pending, (state) => {
        state.isLoading.latestActivities = true;
      })
      .addCase(getLatestActivitiesUseCase.fulfilled, (state, actions) => {
        state.isLoading.latestActivities = false;
        state.latestActivities = actions.payload.response;
      })
      .addCase(getLatestActivitiesUseCase.rejected, (state) => {
        state.isLoading.latestActivities = false;
      });
  },
});
//
// export const {} = statisticsSlice.actions;

export default statisticsSlice.reducer;
