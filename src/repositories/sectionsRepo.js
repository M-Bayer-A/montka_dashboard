const sectionsRepo = {
  get: async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return [
      {
        id: 0,
        title: "الرياضة",
        image: "src/assets/images/code.jpg",
        subSections: [
          { id: 101, title: "كرة القدم", image: "src/assets/images/code.jpg" },
          { id: 102, title: "كرة السلة", image: "src/assets/images/code.jpg" },
        ],
      },
      {
        id: 1,
        title: "الطبخ",
        image: "src/assets/images/code.jpg",
        subSection: null,
      },
      {
        id: 2,
        title: "النفخ",
        image: "src/assets/images/code.jpg",
        subSection: null,
      },
      {
        id: 3,
        title: "الدراسة",
        image: "src/assets/images/code.jpg",
        subSection: null,
      },
      {
        id: 4,
        title: "إشلبدش",
        image: "src/assets/images/code.jpg",
        subSection: null,
      },
      {
        id: 5,
        title: "إشلبدش",
        image: "src/assets/images/code.jpg",
        subSection: null,
      },
    ];
  },
  edit: async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
  },
  add: async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
  },
  delete: async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
  },
};
export default sectionsRepo;
