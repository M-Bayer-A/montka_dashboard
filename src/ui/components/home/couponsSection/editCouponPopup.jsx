import { Backdrop } from "@mui/material";
import CustomTextInput from "../../shared/customTextInput";
import CustomButton from "../../shared/customButton";
import { useDispatch, useSelector } from "react-redux";
import { couponsSelectors } from "../../../../application/states/home/coupons/couponsSelectors";
import {
  setCouponInfo,
  toggleEditPopupOpen,
} from "../../../../application/states/home/coupons/couponsSlice";
import { editCouponUseCase } from "../../../../application/useCases/home/coupons/editCouponUseCase";

export default function EditCouponPopup() {
  //
  const dispatch = useDispatch();
  //
  const isOpen = useSelector(couponsSelectors.isEditPopupOpen);
  const couponInfo = useSelector(couponsSelectors.couponInfo);
  console.log(couponInfo);
  //
  const handleClosePopup = () => dispatch(toggleEditPopupOpen());
  const handleSetValidity = (validity) => dispatch(setCouponInfo({ validity }));
  const handeSubmit = () => dispatch(editCouponUseCase());
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
        <h1 className="font-bold text-[22px]">تعديل كود الدخول</h1>
        <div className="w-full flex flex-row items-center gap-2.5">
          <p className={"w-[75%] text-center"}>{couponInfo.code}</p>
          <h1 className="w-[25%]">الكود</h1>
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
