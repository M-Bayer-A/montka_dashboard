import { useDispatch } from "react-redux";
import CustomButton from "../../shared/customButton";
import { toggleAddPopupOpen } from "../../../../application/states/home/notifications/notificationsSlice";

export default function NotificationsHeader() {
  const dispatch = useDispatch();
  const handleOpenAddPopup = () => dispatch(toggleAddPopupOpen());
  return (
    <div className="w-full h-11 flex flex-row justify-between">
      <CustomButton
        className={"border-[#0EA5E9] bg-[#0EA5E9] text-white font-[700]"}
        title={"+ إرسال إشعار جديد"}
        onClick={handleOpenAddPopup}
      />
      <h1 className="text-right text-[24px] font-[700]">
        سجل الإشعارات المرسلة
      </h1>
    </div>
  );
}
