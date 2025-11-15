import { useDispatch } from "react-redux";
import CustomButton from "../../shared/customButton";
import { toggleAddPopupOpen } from "../../../../application/states/home/sections/sectionsSlice";

export default function SectionsHeader() {
  //
  const dispatch = useDispatch();
  //
  const handleOpenAddPopup = () => dispatch(toggleAddPopupOpen());
  //
  return (
    <div className="w-full flex flex-row justify-between gap-1">
      <CustomButton
        className="bg-[#0EA5E9] border-[#0EA5E9] font-[700] text-white"
        title={"+ إضافة قسم رئيسي"}
        onClick={handleOpenAddPopup}
      />
      <h1 className="font-[700] text-[24px]">الأقسام الرئيسية والفرعية</h1>
    </div>
  );
}
