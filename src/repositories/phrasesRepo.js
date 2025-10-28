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
      ],
      data: [
        {
          id: "0",
          phrase:
            "« لعمرك ما الرزيَّة فقدُ مالٍ ولا شاةٌ تموتُ ولا بعيرُ ولكنَّ الرزيَّة فقدُ حُرًّ يموتُ بموتهِ خلقٌ كثير»",
        },
        {
          id: "1",
          phrase: "بدل هواك كما شئت فإنما ... ما الحب إلا للحبيب الأول",
        },
        {
          id: "2",
          phrase: "كم منزل في الأرض يألفه الفتى ... وحنينه دوماً لأول منزل",
        },
      ],
    };
  },
};
export default phrasesRepo;
