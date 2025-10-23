import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import CustomTable from "../../../components/shared/customTable";
import CustomButton from "../../../components/shared/customButton";
import CustomTextInput from "../../../components/shared/customTextInput";
import CustomFooter from "../../../components/shared/customFooter";
import { useDispatch, useSelector } from "react-redux";
import { videosSelectors } from "../../../../application/states/home/videos/videosSelectors";
import { getVideosTableInfoUseCase } from "../../../../application/useCases/home/videos/getVideosTableInfoUseCase";
import {
  setNumberOfRowsPerPage,
  setSearchInput,
} from "../../../../application/states/home/videos/videosSlice";
import { useEffect } from "react";

export default function VideosSection() {
  //
  const dispatch = useDispatch();
  //
  const isLoading = useSelector(videosSelectors.isLoading);
  const searchInputValue = useSelector(videosSelectors.searchInputValue);
  const paginationInfo = useSelector(videosSelectors.paginationInfo);
  const tableInfo = useSelector(videosSelectors.tableInfo);
  //
  const proccedtableInfo = tableInfohelper(tableInfo);
  //
  const handleGetTableInfo = (page) =>
    dispatch(getVideosTableInfoUseCase({ page }));
  const handleSetSearchValue = (value) =>
    dispatch(setSearchInput({ input: value }));
  const handleSetRowsPerPageNum = (value) =>
    dispatch(setNumberOfRowsPerPage({ number: value }));
  //
  useEffect(() => {
    handleGetTableInfo(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <div className="h-full w-full min-w-[750px] flex flex-col p-4 gap-5 overflow-auto font-[Cairo]">
      <h1 className="w-full text-right text-[24px] font-[700]">
        إدارة الفيديوهات
      </h1>
      <div className="w-full h-11 flex flex-row justify-between">
        <form>
          <CustomTextInput
            value={searchInputValue}
            onChange={handleSetSearchValue}
            placeholder={"ابحث بعنوان القسم أو المعرف"}
            className={
              "w-87 bg-white border-zinc-200 shadow-[0_1px_2px_rgba(0,0,0,0.05)] text-right font-[Tajawal ]"
            }
          />
        </form>
        <CustomButton
          className={"border-[#0EA5E9] bg-[#0EA5E9] text-white font-[700]"}
          title={"+ إضافة فيديو جديد"}
        />
      </div>
      {isLoading ? (
        <div className="w-full h-110">
          <Skeleton width="100%" height="100%" />
        </div>
      ) : (
        <CustomTable
          columns={proccedtableInfo.columns}
          data={proccedtableInfo.data}
        />
      )}
      <CustomFooter
        paginationInfo={paginationInfo}
        onNumOfRowsChange={handleSetRowsPerPageNum}
        getDataHandeler={handleGetTableInfo}
      />
    </div>
  );
}
//
const tableInfohelper = (tableInfo) => {
  let processedColumns = [
    ...tableInfo.columns,
    {
      accessorKey: "procedures",
      header: "إجراءات",
      isVisible: true,
    },
  ];
  let processedData = tableInfo.data.map((d) => {
    const newD = {
      ...d,
      procedures: (
        <div className="flex flex-row gap-2.5">
          <a className="text-[#4F46E5]">تعديل</a>
          <a>نسخ</a>
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
  return { data: processedData, columns: processedColumns };
};
