import { useDispatch, useSelector } from "react-redux";
import { notificationsSelectors } from "../../../../application/states/home/notifications/notificationsSelectors";
import { getNotificationsTableInfoUseCase } from "../../../../application/useCases/home/notifications/getNotificationsTableInfoUseCase";
import { setNumberOfRowsPerPage } from "../../../../application/states/home/notifications/notificationsSlice";
import CustomFooter from "../../shared/customFooter";

export default function NotificationsFooter() {
  const dispatch = useDispatch();
  const paginationInfo = useSelector(notificationsSelectors.paginationInfo);
  //
  const handleGetTableInfo = (page) =>
    dispatch(getNotificationsTableInfoUseCase({ page }));

  const handleSetRowsPerPageNum = (value) =>
    dispatch(setNumberOfRowsPerPage({ number: value }));
  return (
    <CustomFooter
      paginationInfo={paginationInfo}
      onNumOfRowsChange={handleSetRowsPerPageNum}
      getDataHandeler={handleGetTableInfo}
    />
  );
}
