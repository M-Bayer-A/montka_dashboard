const usersRepo = {
  getTableInfo: async (page) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(page);
    return {
      columns: [
        {
          accessorKey: "id",
          header: "المعرف",
          isVisible: true,
        },
        {
          accessorKey: "phoneNum",
          header: "رقم الهاتف",
          isVisible: true,
        },
        {
          accessorKey: "SubscriptionCode",
          header: "كود الدخول",
          isVisible: true,
        },
        {
          accessorKey: "endDate",
          header: "تاريخ الإنتهاء",
          isVisible: true,
        },
        {
          accessorKey: "status",
          header: "الحالة",
          isVisible: true,
        },
      ],
      data: [
        {
          id: "0",
          phoneNum: "0951830877",
          SubscriptionCode: "qwertyui",
          endDate: "1-1-2026",
          status: "نشط",
        },
        {
          id: "1",
          phoneNum: "0951830877",
          SubscriptionCode: "qwertyui",
          endDate: "1-1-2026",
          status: "معلق",
        },
        {
          id: "2",
          phoneNum: "0951830877",
          SubscriptionCode: "qwertyui",
          endDate: "1-1-2026",
          status: "منتهي الصلاحية",
        },
        {
          id: "3",
          phoneNum: "0951830877",
          SubscriptionCode: "qwertyui",
          endDate: "1-1-2026",
          status: "نشط",
        },
      ],
    };
  },
};
export default usersRepo;
