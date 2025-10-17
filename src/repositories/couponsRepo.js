const couponsRepo = {
  getDataTable: async (page) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log(page);
    return {
      columns: [
        {
          accessorKey: "id",
          header: "ID",
          isVisible: true,
        },
        {
          accessorKey: "code",
          header: "الكود",
          isVisible: true,
        },
        {
          accessorKey: "validity",
          header: "الصلاحية",
          isVisible: true,
        },
        {
          accessorKey: "status",
          header: "الحالة",
          isVisible: true,
        },
        {
          accessorKey: "userNumber",
          header: "المستخدم",
          isVisible: true,
        },
        {
          accessorKey: "endDate",
          header: "تاريخ الإنتهاء",
          isVisible: true,
        },
      ],
      data: [
        {
          id: "0",
          code: "qwerty",
          validity: "30 يوم",
          status: "مستخدم",
          userNumber: "0951830877",
          endDate: "17-10-2025",
        },
        {
          id: "1",
          code: "qwerty",
          validity: "30 يوم",
          status: "منتهي",
          userNumber: "0951830877",
          endDate: "17-10-2025",
        },
        {
          id: "2",
          code: "qwerty",
          validity: "30 يوم",
          status: "متاح",
          userNumber: "0951830877",
          endDate: "17-10-2025",
        },
        {
          id: "3",
          code: "qwerty",
          validity: "30 يوم",
          status: "مستخدم",
          userNumber: "0951830877",
          endDate: "17-10-2025",
        },
      ],
    };
  },
};
export default couponsRepo;
