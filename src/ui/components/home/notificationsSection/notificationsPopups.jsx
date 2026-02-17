import { useDispatch, useSelector } from "react-redux";
import { notificationsSelectors } from "../../../../application/states/home/notifications/notificationsSelectors";
import { toggleAddPopupOpen } from "../../../../application/states/home/notifications/notificationsSlice";
import { addNotificationUseCase } from "../../../../application/useCases/home/notifications/addNotificationUseCase";
import CustomPopup from "../../shared/customPopup";

export default function NotificationsPopups() {
  //
  const dispatch = useDispatch();
  //
  const isAddPopupOpen = useSelector(notificationsSelectors.isAddPopupOpen);
  const notificationInfo = useSelector(notificationsSelectors.notificationInfo);
  //
  const handleCloseAddPopup = () => dispatch(toggleAddPopupOpen());

  const handleSubmitAddPopup = () => dispatch(addNotificationUseCase());

  const isSubmitDisabled = Object.values(notificationInfo).some(
    (value) => value === null || value === "" || value === undefined
  );
  //
  return (
    <>
      <CustomPopup
        isOpen={isAddPopupOpen}
        title="إرسال إشعار جديد"
        disableSubmit={isSubmitDisabled}
        onClose={handleCloseAddPopup}
        onSubmit={handleSubmitAddPopup}
      >
        <div></div>
      </CustomPopup>
    </>
  );
}
