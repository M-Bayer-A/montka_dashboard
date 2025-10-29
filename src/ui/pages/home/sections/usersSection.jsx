import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersSelectors } from "../../../../application/states/home/users/usersSelectors";
import { getUsersTableInfoUseCase } from "../../../../application/useCases/home/users/getUsersTableInfoUseCase";
import {
  setNumberOfRowsPerPage,
  setSearchInput,
} from "../../../../application/states/home/users/usersSlice";
import Skeleton from "react-loading-skeleton";
import CustomTable from "../../../components/shared/customTable";
import CustomFooter from "../../../components/shared/customFooter";
import CustomTextInput from "../../../components/shared/customTextInput";

export default function UsersSection() {
  //
  const dispatch = useDispatch();
  //
  const isLoading = useSelector(usersSelectors.isLoading);
  const paginationInfo = useSelector(usersSelectors.paginationInfo);
  const tableInfo = useSelector(usersSelectors.tableInfo);
  const searchInputValue = useSelector(usersSelectors.searchInputValue);
  //
  const handleSetSearchValue = (value) =>
    dispatch(setSearchInput({ input: value }));

  const handleGetTableInfo = (page) =>
    dispatch(getUsersTableInfoUseCase({ page }));

  const handleSetRowsPerPageNum = (value) =>
    dispatch(setNumberOfRowsPerPage({ number: value }));
  //
  useEffect(() => {
    handleGetTableInfo(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
    switch (d.status) {
      case "نشط":
        return {
          ...d,
          status: (
            <div className="size-fit flex px-2.5 py-1 rounded-[20px] font-[700] text-[12px] text-[#166534] bg-[#DCFCE7]">
              {d.status}
            </div>
          ),
          procedures: (
            <div className="w-full flex flex-row justify-between gap-2.5">
              <a className="text-[#D7A844]">تعليق</a>
              <a className="text-[#4F46E5]">تجديد</a>
              <a className="text-[#E24C4C]">حذف</a>
            </div>
          ),
        };
      case "معلق":
        return {
          ...d,
          status: (
            <div className="size-fit flex px-2.5 py-1 rounded-[20px] font-[700] text-[12px] text-[#854D0E] bg-[#FEF9C3]">
              {d.status}
            </div>
          ),
          procedures: (
            <div className="w-full flex flex-row justify-between gap-2.5">
              <a className="text-[#166534]">تفعيل</a>
              <a className="text-[#E24C4C]">حذف</a>
            </div>
          ),
        };
      case "منتهي الصلاحية":
        return {
          ...d,
          status: (
            <div className="size-fit flex px-2.5 py-1 rounded-[20px] font-[700] text-[12px] text-[#991B1B] bg-[#FEE2E2]">
              {d.status}
            </div>
          ),
          procedures: (
            <div className="w-full flex flex-row justify-between gap-2.5">
              <a className="text-[#4F46E5]">تفعيل كود</a>
              <a className="text-[#E24C4C]">حذف</a>
            </div>
          ),
        };
      default:
        return {
          ...d,
          status: (
            <div className="size-fit flex px-2.5 py-1 rounded-[20px] font-[700] text-[12px] text-[#1E40AF] bg-[#DBEAFE]">
              {d.status}
            </div>
          ),
        };
    }
  });
  //
  return (
    <div className="min-h-full w-full min-w-[750px] flex flex-col p-4 gap-5 font-[Cairo]">
      <div className="w-full h-11 flex flex-row justify-between">
        <form>
          <CustomTextInput
            value={searchInputValue}
            onChange={handleSetSearchValue}
            placeholder={"ابحث بالكود أو رقم المستخدم"}
            className={
              "w-87 bg-white border-zinc-200 shadow-[0_1px_2px_rgba(0,0,0,0.05)] text-right font-[Tajawal ]"
            }
          />
        </form>
        <h1 className="text-right text-[24px] font-[700]">قائمة المستخدمين </h1>
      </div>
      {isLoading ? (
        <div className="w-full h-110">
          <Skeleton width="100%" height="100%" />
        </div>
      ) : (
        <CustomTable columns={processedColumns} data={processedData} />
      )}
      <CustomFooter
        paginationInfo={paginationInfo}
        onNumOfRowsChange={handleSetRowsPerPageNum}
        getDataHandeler={handleGetTableInfo}
      />
    </div>
  );
}
