const phrasesRepo = {
  getTableInfo: async (page) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log(page);
    return {
      columns: [
        // {
        //   accessorKey: "id",
        //   header: "المعرف",
        //   isVisible: true,
        // },
        {
          accessorKey: "phrase",
          header: "العبارة",
          isVisible: true,
        },
        {
          accessorKey: "isActive",
          header: "الحالة",
          isVisible: true,
        },
      ],
      data: [
        {
          id: "0",
          phrase:
            "« لعمرك ما الرزيَّة فقدُ مالٍ ولا شاةٌ تموتُ ولا بعيرُ ولكنَّ الرزيَّة فقدُ حُرًّ يموتُ بموتهِ خلقٌ كثير»",
          isActive: false,
        },
        {
          id: "1",
          phrase: "بدل هواك كما شئت فإنما ... ما الحب إلا للحبيب الأول",
          isActive: true,
        },
        {
          id: "2",
          phrase: "كم منزل في الأرض يألفه الفتى ... وحنينه دوماً لأول منزل",
          isActive: true,
        },
      ],
    };
  },
  add: async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
  },
  edit: async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
  },
  delete: async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
  },
};
export default phrasesRepo;
