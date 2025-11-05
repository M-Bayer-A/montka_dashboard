import { useDispatch, useSelector } from "react-redux";
import { couponsSelectors } from "../../../../application/states/home/coupons/couponsSelectors";
import { copyTextHelper } from "../../../../helpers/copyTextHelper";
import { toggleEditPopupOpen } from "../../../../application/states/home/coupons/couponsSlice";
import CustomTable from "../../shared/customTable";

export default function CouponsTable() {
  //
  const dispatch = useDispatch();
  //
  const tableInfo = useSelector(couponsSelectors.tableInfo);
  //
  const handleCopyCoupon = (code) => copyTextHelper(code);

  const handleOpenEditPopup = (code, validity) =>
    dispatch(toggleEditPopupOpen({ code, validity }));
  //
  const processedColumns = [
    ...tableInfo.columns,
    {
      accessorKey: "procedures",
      header: "إجراءات",
      isVisible: true,
    },
  ];

  const processedData = tableInfo.data.map((d) => {
    const newD = {
      ...d,
      validity: d.validity + " يوم",
      procedures: (
        <div className="flex flex-row gap-2.5">
          {d.userNumber ? null : (
            <a
              onClick={() => handleOpenEditPopup(d.code, d.validity)}
              className="text-[#4F46E5]"
            >
              تعديل
            </a>
          )}
          <a onClick={() => handleCopyCoupon(d.code)}>نسخ</a>
        </div>
      ),
    };
    switch (newD.status) {
      case "مستخدم":
        return {
          ...newD,
          status: (
            <div className="size-fit flex px-2.5 py-1 rounded-[20px] font-[700] text-[12px] text-[#1E40AF] bg-[#DBEAFE]">
              {newD.status}
            </div>
          ),
        };
      case "منتهي":
        return {
          ...newD,
          status: (
            <div className="size-fit flex px-2.5 py-1 rounded-[20px] font-[700] text-[12px] text-[#991B1B] bg-[#FEE2E2]">
              {newD.status}
            </div>
          ),
        };
      case "متاح":
        return {
          ...newD,
          status: (
            <div className="size-fit flex px-2.5 py-1 rounded-[20px] font-[700] text-[12px] text-[#166534] bg-[#DCFCE7]">
              {newD.status}
            </div>
          ),
        };
      default:
        return {
          ...newD,
          status: (
            <div className="size-fit flex px-2.5 py-1 rounded-[20px] font-[700] text-[12px] text-[#1E40AF] bg-[#DBEAFE]">
              {newD.status}
            </div>
          ),
        };
    }
  });
  //
  return <CustomTable columns={processedColumns} data={processedData} />;
}
