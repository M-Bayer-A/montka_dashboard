const statisticsRepo = {
  getAppDetails: async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return {
      allUsers: 5,
      activeSubsicribs: 6,
      allVideos: 7,
      allSections: 8,
    };
  },
  getCouponsStatus: async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return {
      used: 5,
      avilable: 6,
      terminated: 7,
    };
  },
  getVideosSections: async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return [
      { label: "تطوير الذات", videosNumber: 3 },
      { label: "ريادة الأعمال", videosNumber: 3 },
      { label: "التقنية والبرمجة", videosNumber: 3 },
      { label: "الصحة واللياقة", videosNumber: 3 },
      { label: "المال والإستثمار", videosNumber: 3 },
      { label: "اللغات والآداب", videosNumber: 3 },
    ];
  },
  getLatestActivities: async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return [
      { name: "Big bayer", action: "قام برفع فيديو", date: "10-10-2025" },
      { name: "Big bayer", action: "قام برفع فيديو", date: "10-10-2025" },
      { name: "Big bayer", action: "قام برفع فيديو", date: "10-10-2025" },
      { name: "Big bayer", action: "قام برفع فيديو", date: "10-10-2025" },
      { name: "Big bayer", action: "قام برفع فيديو", date: "10-10-2025" },
      { name: "Big bayer", action: "قام برفع فيديو", date: "10-10-2025" },
    ];
  },
  getMostViewedVideos: async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  },
};
export default statisticsRepo;
