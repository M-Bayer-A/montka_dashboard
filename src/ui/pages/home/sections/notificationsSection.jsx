import Skeleton from "react-loading-skeleton";
import CustomButton from "../../../components/shared/customButton";
import CustomTable from "../../../components/shared/customTable";
import CustomFooter from "../../../components/shared/customFooter";
import { useDispatch, useSelector } from "react-redux";
import { setNumberOfRowsPerPage } from "../../../../application/states/home/notifications/notificationsSlice";
import { useEffect } from "react";
import { notificationsSelectors } from "../../../../application/states/home/notifications/notificationsSelectors";
import { getNotificationsTableInfoUseCase } from "../../../../application/useCases/home/notifications/getNotificationsTableInfoUseCase";

export default function NotificationsSection() {
  //
  const dispatch = useDispatch();
  //
  const isLoading = useSelector(notificationsSelectors.isLoading);
  const paginationInfo = useSelector(notificationsSelectors.paginationInfo);
  const tableInfo = useSelector(notificationsSelectors.tableInfo);
  //
  const handleGetTableInfo = (page) =>
    dispatch(getNotificationsTableInfoUseCase({ page }));

  const handleSetRowsPerPageNum = (value) =>
    dispatch(setNumberOfRowsPerPage({ number: value }));
  //
  useEffect(() => {
    handleGetTableInfo(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  const processedData = tableInfo.data.map((d) => {
    return {
      ...d,
      notifications: (
        <div className="flex flex-col items-start gap-2.5 p-2.5">
          <h1 className="font-[700] text-[#111827]">{d.notifications.title}</h1>
          <p>{d.notifications.message}</p>
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
          title={"+ إرسال إشعار جديد"}
        />
        <h1 className="text-right text-[24px] font-[700]">
          سجل الإشعارات المرسلة
        </h1>
      </div>
      {isLoading ? (
        <div className="w-full h-110">
          <Skeleton width="100%" height="100%" />
        </div>
      ) : (
        <CustomTable columns={tableInfo.columns} data={processedData} />
      )}
      <CustomFooter
        paginationInfo={paginationInfo}
        onNumOfRowsChange={handleSetRowsPerPageNum}
        getDataHandeler={handleGetTableInfo}
      />
    </div>
  );
}
