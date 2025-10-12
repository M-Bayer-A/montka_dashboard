export const statisticsSelectors = {
  isLoading: (state) => state.statistics.isLoading,
  appDetails: (state) => state.statistics.appDetails,
  couponsStatus: (state) => state.statistics.couponsStatus,
  videosSections: (state) => state.statistics.videosSections,
  latestActivities: (state) => state.statistics.latestActivities,
  mostViewedVideos: (state) => state.statistics.mostViewedVideos,
};
