import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { notificationsSelectors } from "../../../../application/states/home/notifications/notificationsSelectors";
import { getNotificationsTableInfoUseCase } from "../../../../application/useCases/home/notifications/getNotificationsTableInfoUseCase";
import NotificationsHeader from "../../../components/home/notificationsSection/notificationsHeader";
import NotificationsTable from "../../../components/home/notificationsSection/notificationsTable";
import NotificationsFooter from "../../../components/home/notificationsSection/notificationsFooter";
import { Backdrop, CircularProgress } from "@mui/material";
import NotificationsPopups from "../../../components/home/notificationsSection/notificationsPopups";

export default function NotificationsSection() {
  //
  const dispatch = useDispatch();
  //
  const isDataLoading = useSelector(notificationsSelectors.isDataLoading);
  const isActionLoading = useSelector(notificationsSelectors.isActionLoading);
  //
  const handleGetTableInfo = (page) =>
    dispatch(getNotificationsTableInfoUseCase({ page }));
  //
  useEffect(() => {
    handleGetTableInfo(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <div className="min-h-full w-full min-w-[750px] flex flex-col p-4 gap-5 font-[Cairo]">
      <NotificationsHeader />
      {isDataLoading ? (
        <div className="w-full h-110">
          <Skeleton width="100%" height="100%" />
        </div>
      ) : (
        <NotificationsTable />
      )}
      <NotificationsFooter />
      <NotificationsPopups />
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={isActionLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
