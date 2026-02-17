const notificationsRepo = {
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
          accessorKey: "notifications",
          header: "العنوان والرسالة",
          isVisible: true,
        },
        {
          accessorKey: "audience",
          header: "الجمهور المستهدف",
          isVisible: true,
        },
        {
          accessorKey: "sendTime",
          header: "وقت الإرسال",
          isVisible: true,
        },
      ],
      data: [
        {
          id: "0",
          notifications: {
            title: "تحديث جديد متوافر",
            message: "لقد قمنا بإضافة ميزات جديدة",
          },
          audience: "جميع المستخدم",
          sendTime: "منذ ساعتين",
        },
        {
          id: "1",
          notifications: {
            title: "تحديث جديد متوافر",
            message: "لقد قمنا بإضافة ميزات جديدة",
          },
          audience: "جميع المستخدم",
          sendTime: "منذ ساعتين",
        },
        {
          id: "2",
          notifications: {
            title: "تحديث جديد متوافر",
            message: "لقد قمنا بإضافة ميزات جديدة",
          },
          audience: "جميع المستخدم",
          sendTime: "منذ ساعتين",
        },
        {
          id: "3",
          notifications: {
            title: "تحديث جديد متوافر",
            message: "لقد قمنا بإضافة ميزات جديدة",
          },
          audience: "جميع المستخدم",
          sendTime: "منذ ساعتين",
        },
      ],
    };
  },
  add: async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
  },
};
export default notificationsRepo;
