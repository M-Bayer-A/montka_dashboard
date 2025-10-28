import Skeleton from "react-loading-skeleton";
import CustomButton from "../../../components/shared/customButton";
import CustomTable from "../../../components/shared/customTable";
import CustomFooter from "../../../components/shared/customFooter";
import { useDispatch, useSelector } from "react-redux";
import { phrasesSelectors } from "../../../../application/states/home/phrases/phrasesSelectors";
import { getPhrasesTableInfoUseCase } from "../../../../application/useCases/home/phrases/getPhrasesTableInfoUseCase";
import { setNumberOfRowsPerPage } from "../../../../application/states/home/phrases/phrasesSlice";
import { useEffect } from "react";

export default function PhrasesSection() {
  //
  const dispatch = useDispatch();
  //
  const isLoading = useSelector(phrasesSelectors.isLoading);
  const paginationInfo = useSelector(phrasesSelectors.paginationInfo);
  const tableInfo = useSelector(phrasesSelectors.tableInfo);
  //
  const handleGetTableInfo = (page) =>
    dispatch(getPhrasesTableInfoUseCase({ page }));

  const handleSetRowsPerPageNum = (value) =>
    dispatch(setNumberOfRowsPerPage({ number: value }));
  //
  useEffect(() => {
    handleGetTableInfo(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  let processedColumns = [
    ...tableInfo.columns,
    {
      accessorKey: "procedures",
      header: "إجراءات",
      isVisible: true,
    },
  ];
  let processedData = tableInfo.data.map((d) => {
    return {
      ...d,
      procedures: (
        <div className="flex flex-row gap-2.5">
          <a className="text-[#4F46E5]">تعديل</a>
          <a>نسخ</a>
        </div>
      ),
    };
  });
  //
  return (
    <div className="min-h-full w-full min-w-[750px] flex flex-col p-4 gap-5 font-[Cairo]">
      <div className="w-full h-11 flex flex-row justify-between">
        <CustomButton
          className={"border-[#0EA5E9] bg-[#0EA5E9] text-white font-[700]"}
          title={"+ إضافة عبارة جديدة"}
        />
        <h1 className="text-right text-[24px] font-[700]">
          إدارة العبارات والأشعار
        </h1>
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
