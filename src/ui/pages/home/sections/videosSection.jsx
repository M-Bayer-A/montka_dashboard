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
import { BsBookmarkDashFill } from "react-icons/bs";
import { BsBookmarkDash } from "react-icons/bs";
import AddVideoPopup from "../../../components/home/videosSection/addVideoPopup";
import { Backdrop, CircularProgress } from "@mui/material";
import EditVideoPopup from "../../../components/home/videosSection/editVideoPopup";

export default function VideosSection() {
  //
  const dispatch = useDispatch();
  //
  const isDataLoading = useSelector(videosSelectors.isDataLoading);
  const isActionLoading = useSelector(videosSelectors.isActionLoading);
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

  // const handleOpenEditPopup = (
  //   url,
  //   title,
  //   description,
  //   mainSection,
  //   age,
  //   notes,
  //   tags,
  //   isPinned
  // ) =>
  //   dispatch(
  //     toggleEditPopupOpen({
  //       url,
  //       title,
  //       description,
  //       mainSection,
  //       age,
  //       notes,
  //       tags,
  //       isPinned,
  //     })
  //   );
  //
  useEffect(() => {
    handleGetTableInfo(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <div className="min-h-full w-full min-w-[750px] flex flex-col p-4 gap-5 font-[Cairo]">
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
      {isDataLoading ? (
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
      <AddVideoPopup />
      <EditVideoPopup />
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={isActionLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
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
      video: (
        <div className="flex flex-row gap-4 p-2.5 items-center">
          <img className="h-12.5 rounded-[6px]" src={d.video.image} />
          <p>{d.video.title}</p>
        </div>
      ),
      procedures: (
        <div className="flex flex-row gap-2.5">
          <a className="text-[#4F46E5]">تعديل</a>
          <a>نسخ</a>
        </div>
      ),
    };
    switch (newD.pinned) {
      case true:
        return {
          ...newD,
          pinned: <BsBookmarkDashFill className="text-[#0EA5E9]" />,
        };
      case false:
        return {
          ...newD,
          pinned: <BsBookmarkDash />,
        };
      default:
        return {
          ...newD,
          pinned: <BsBookmarkDash />,
        };
    }
  });
  return { data: processedData, columns: processedColumns };
};
