import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import CustomTable from "../../../components/shared/customTable";
import CustomFooter from "../../../components/shared/customFooter";
import CustomTextInput from "../../../components/shared/customTextInput";
import { recordSelectors } from "../../../../application/states/home/record/recordSelector";
import {
  setNumberOfRowsPerPage,
  setSearchInput,
} from "../../../../application/states/home/record/recordSlice";
import { getRecordTableInfoUseCase } from "../../../../application/useCases/home/record/getRecordTableInfoUseCase";

export default function RecordSection() {
  //
  const dispatch = useDispatch();
  //
  const isLoading = useSelector(recordSelectors.isLoading);
  const paginationInfo = useSelector(recordSelectors.paginationInfo);
  const tableInfo = useSelector(recordSelectors.tableInfo);
  const searchInputValue = useSelector(recordSelectors.searchInputValue);
  //
  const handleSetSearchValue = (value) =>
    dispatch(setSearchInput({ input: value }));

  const handleGetTableInfo = (page) =>
    dispatch(getRecordTableInfoUseCase({ page }));

  const handleSetRowsPerPageNum = (value) =>
    dispatch(setNumberOfRowsPerPage({ number: value }));
  //
  useEffect(() => {
    handleGetTableInfo(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
        <h1 className="text-right text-[24px] font-[700]">
          سجل عمليات المستخدمين
        </h1>
      </div>
      {isLoading ? (
        <div className="w-full h-110">
          <Skeleton width="100%" height="100%" />
        </div>
      ) : (
        <CustomTable columns={tableInfo.columns} data={tableInfo.data} />
      )}
      <CustomFooter
        paginationInfo={paginationInfo}
        onNumOfRowsChange={handleSetRowsPerPageNum}
        getDataHandeler={handleGetTableInfo}
      />
    </div>
  );
}
