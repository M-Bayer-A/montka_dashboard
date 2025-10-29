const recordRepo = {
  getTableInfo: async (page) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(page);
    return {
      columns: [
        // {
        //   accessorKey: "id",
        //   header: "المعرف",
        //   isVisible: true,
        // },
        {
          accessorKey: "phoneNum",
          header: "رقم الهاتف",
          isVisible: true,
        },
        {
          accessorKey: "SubscriptionCode",
          header: "كود الدخول المستخدم",
          isVisible: true,
        },
        {
          accessorKey: "operation",
          header: "العملية",
          isVisible: true,
        },

        {
          accessorKey: "validity",
          header: "صلاحية الكود",
          isVisible: true,
        },
        {
          accessorKey: "startDate",
          header: "تاريخ التفعيل",
          isVisible: true,
        },
        {
          accessorKey: "endDate",
          header: "تاريخ الانتهاء",
          isVisible: true,
        },
      ],
      data: [
        {
          id: "0",
          phoneNum: "0951830877",
          SubscriptionCode: "qwertyui",
          operation: "تسجيل دخول",
          validity: "30 يوم",
          startDate: "1-11-2025",
          endDate: "1-1-2026",
        },
        {
          id: "2",
          phoneNum: "0951830877",
          SubscriptionCode: "qwertyui",
          operation: "تسجيل دخول",
          validity: "30 يوم",
          startDate: "1-11-2025",
          endDate: "1-1-2026",
        },
        {
          id: "3",
          phoneNum: "0951830877",
          SubscriptionCode: "qwertyui",
          operation: "تسجيل دخول",
          validity: "30 يوم",
          startDate: "1-11-2025",
          endDate: "1-1-2026",
        },
        {
          id: "4",
          phoneNum: "0951830877",
          SubscriptionCode: "qwertyui",
          operation: "تسجيل دخول",
          validity: "30 يوم",
          startDate: "1-11-2025",
          endDate: "1-1-2026",
        },
        {
          id: "5",
          phoneNum: "0951830877",
          SubscriptionCode: "qwertyui",
          operation: "تسجيل دخول",
          validity: "30 يوم",
          startDate: "1-11-2025",
          endDate: "1-1-2026",
        },
        {
          id: "6",
          phoneNum: "0951830877",
          SubscriptionCode: "qwertyui",
          operation: "تسجيل دخول",
          validity: "30 يوم",
          startDate: "1-11-2025",
          endDate: "1-1-2026",
        },
      ],
    };
  },
};
export default recordRepo;
