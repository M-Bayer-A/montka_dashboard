import { Backdrop } from "@mui/material";
import CustomTextInput from "../../shared/customTextInput";
import CustomButton from "../../shared/customButton";
import { useDispatch, useSelector } from "react-redux";
import { couponsSelectors } from "../../../../application/states/home/coupons/couponsSelectors";
import {
  setCouponInfo,
  toggleAddPopupOpen,
} from "../../../../application/states/home/coupons/couponsSlice";
import { addCouponUseCase } from "../../../../application/useCases/home/coupons/addCouponUseCase";

export default function AddCouponPopup() {
  //
  const dispatch = useDispatch();
  //
  const isOpen = useSelector(couponsSelectors.isAddPopupOpen);
  const couponInfo = useSelector(couponsSelectors.couponInfo);
  console.log(couponInfo);
  //
  const handleClosePopup = () => dispatch(toggleAddPopupOpen());
  const handleSetValidity = (validity) => dispatch(setCouponInfo({ validity }));
  const handeSubmit = () => dispatch(addCouponUseCase());
  //
  return (
    <Backdrop
      sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
      open={isOpen}
    >
      <div
        className="min-w-125 flex flex-col px-5 py-10 gap-6
        rounded-[20px] bg-white text-black font-[Cairo] text-right"
      >
        <h1 className="font-bold text-[22px]">توليد كود الدخول</h1>
        <div className="w-full flex flex-row items-center gap-2.5">
          <CustomTextInput
            className={"w-[75%]"}
            type="number"
            value={couponInfo.validity}
            onChange={handleSetValidity}
          />
          <span className="w-[25%]">مدة الصلاحية</span>
        </div>
        {/* Action Buttons */}
        <div
          className="w-full flex flex-row items-center gap-5
        font-bold"
        >
          <CustomButton
            className={"bg-[#E5E7EB] border-[#E5E7EB] text-[#3C4551]"}
            title="إلغاء"
            onClick={handleClosePopup}
          />
          <CustomButton
            className={"bg-[#0EA5E9] border-[#0EA5E9] text-white"}
            title="تأكيد"
            disabled={couponInfo.validity <= 0}
            onClick={handeSubmit}
          />
        </div>
        {/* ==Action Buttons== */}
      </div>
    </Backdrop>
  );
}
