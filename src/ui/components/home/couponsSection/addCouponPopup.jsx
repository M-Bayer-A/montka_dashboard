import CustomTextInput from "../../shared/customTextInput";
import CustomPopup from "../../shared/customPopup";

export default function AddCouponPopup() {
  return (
    <CustomPopup title="إضافة كود جديد" isOpen={true}>
      <div className="w-full flex flex-row items-center gap-2.5">
        <CustomTextInput type="text" className={"w-[75%]"} />
        <span className="text-right w-[25%]">الكود</span>
      </div>
      <div className="w-full flex flex-row items-center gap-2.5">
        <CustomTextInput type="number" className={"w-[75%]"} />
        <span className="text-right w-[25%]">مدة الصلاحية</span>
      </div>
    </CustomPopup>
  );
}
