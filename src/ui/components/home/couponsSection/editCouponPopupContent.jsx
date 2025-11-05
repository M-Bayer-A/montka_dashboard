import CustomTextInput from "../../shared/customTextInput";
import { useDispatch, useSelector } from "react-redux";
import { couponsSelectors } from "../../../../application/states/home/coupons/couponsSelectors";
import { setCouponInfo } from "../../../../application/states/home/coupons/couponsSlice";

export default function EditCouponPopupContent() {
  //
  const dispatch = useDispatch();
  //
  const couponInfo = useSelector(couponsSelectors.couponInfo);
  //
  const handleSetValidity = (validity) => dispatch(setCouponInfo({ validity }));
  //
  return (
    <div className="space-y-3">
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
    </div>
  );
}
