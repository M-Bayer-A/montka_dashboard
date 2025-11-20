import { useDispatch } from "react-redux";
import CustomButton from "../../shared/customButton";
import { toggleAddPopupOpen } from "../../../../application/states/home/phrases/phrasesSlice";

export default function PhrasesHeader() {
  //
  const dispatch = useDispatch();
  //
  const handleOpenAddPopup = () => dispatch(toggleAddPopupOpen());
  return (
    <div className="w-full h-11 flex flex-row justify-between">
      <CustomButton
        className={"border-[#0EA5E9] bg-[#0EA5E9] text-white font-[700]"}
        title={"+ إضافة عبارة جديدة"}
        onClick={handleOpenAddPopup}
      />
      <h1 className="text-right text-[24px] font-[700]">
        إدارة العبارات والأشعار
      </h1>
    </div>
  );
}
