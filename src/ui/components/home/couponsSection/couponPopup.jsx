import CustomTextInput from "../../shared/customTextInput";
import CustomPopup from "../../shared/customPopup";
import { useDispatch, useSelector } from "react-redux";
import { couponsSelectors } from "../../../../application/states/home/coupons/couponsSelectors";
import {
  setCouponInfo,
  togglePopupOpen,
} from "../../../../application/states/home/coupons/couponsSlice";
import { addNewCouponUseCase } from "../../../../application/useCases/home/coupons/addNewCouponUseCase";

export default function CouponPopup() {
  //
  const dispatch = useDispatch();
  //
  const isOpen = useSelector(couponsSelectors.isPopupOpen);
  const popupProcess = useSelector(couponsSelectors.popupProcess);
  const couponInfo = useSelector(couponsSelectors.couponInfo);
  console.log(couponInfo);
  //
  const handleTitle = () => {
    switch (popupProcess) {
      case "add":
        return "إضافة كود دخول جديد";
      case "edit":
        return "تعديل كود دخول";
      default:
        return "";
    }
  };
  const handleSubmit = () => {
    switch (popupProcess) {
      case "add":
        return dispatch(addNewCouponUseCase());
      case "edit":
        return null;
      default:
        return null;
    }
  };
  const handleSetCode = (value) => dispatch(setCouponInfo({ code: value }));

  const handleSetValidity = (value) =>
    dispatch(setCouponInfo({ validity: value }));

  const handleClosePopup = () => dispatch(togglePopupOpen());
  //
  return (
    <CustomPopup
      isOpen={isOpen}
      title={handleTitle()}
      onClose={handleClosePopup}
      onSubmit={handleSubmit}
    >
      <div className="w-full flex flex-row items-center gap-2.5">
        <CustomTextInput
          className={"w-[75%]"}
          type="text"
          value={couponInfo.code}
          onChange={handleSetCode}
        />
        <span className="w-[25%]">الكود</span>
      </div>
      <div className="w-full flex flex-row items-center gap-2.5">
        <CustomTextInput
          className={"w-[75%]"}
          type="number"
          value={couponInfo.validity}
          onChange={handleSetValidity}
        />
        <span className="w-[25%]">مدة الصلاحية</span>
      </div>
    </CustomPopup>
  );
}
