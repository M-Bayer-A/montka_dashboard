const videosRepo = {
  getDataTable: async (page) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log(page);
    return {
      columns: [
        {
          accessorKey: "id",
          header: "المعرف",
          isVisible: true,
        },
        {
          accessorKey: "video",
          header: "الفيديو",
          isVisible: true,
        },
        {
          accessorKey: "section",
          header: "القسم",
          isVisible: true,
        },
        {
          accessorKey: "pinned",
          header: "تثبيت",
          isVisible: true,
        },
      ],
      data: [
        {
          id: "0",
          video: { image: "/images/code.jpg", title: "كرة القدم" },
          section: "الرياضة",
          pinned: true,
        },
        {
          id: "1",
          video: { image: "/images/code.jpg", title: "كرة القدم" },
          section: "الرياضة",
          pinned: true,
        },
        {
          id: "2",
          video: { image: "/images/code.jpg", title: "كرة القدم" },
          section: "الرياضة",
          pinned: false,
        },
        {
          id: "3",
          video: { image: "/images/code.jpg", title: "كرة القدم" },
          section: "الرياضة",
          pinned: false,
        },
      ],
    };
  },
  editVideo: async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
  },
  addVideo: async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
  },
};
export default videosRepo;
