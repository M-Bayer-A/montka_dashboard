import { useDispatch, useSelector } from "react-redux";
import { videosSelectors } from "../../../../application/states/home/videos/videosSelectors";
import {
  setSearchInput,
  toggleAddPopupOpen,
} from "../../../../application/states/home/videos/videosSlice";
import CustomTextInput from "../../shared/customTextInput";
import CustomButton from "../../shared/customButton";
import { getVideosTableInfoUseCase } from "../../../../application/useCases/home/videos/getVideosTableInfoUseCase";

export default function VideosHeader() {
  //
  const dispatch = useDispatch();
  //
  const searchInputValue = useSelector(videosSelectors.searchInputValue);
  //
  const handleOpenAddVideoPopup = () => dispatch(toggleAddPopupOpen());

  const handleSetSearchValue = (value) =>
    dispatch(setSearchInput({ input: value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getVideosTableInfoUseCase({ page: 1 }));
  };
  //
  return (
    <>
      <h1 className="w-full text-right text-[24px] font-[700]">
        إدارة الفيديوهات
      </h1>
      <div className="w-full h-11 flex flex-row justify-between">
        <form onSubmit={handleSubmit}>
          <CustomTextInput
            value={searchInputValue}
            onChange={handleSetSearchValue}
            placeholder={"ابحث بعنوان القسم أو المعرف"}
            className={
              "w-87 bg-white border-zinc-200 shadow-[0_1px_2px_rgba(0,0,0,0.05)] text-right font-[Tajawal ]"
            }
          />
        </form>
        <CustomButton
          className={"border-[#0EA5E9] bg-[#0EA5E9] text-white font-[700]"}
          title={"+ إضافة فيديو جديد"}
          onClick={handleOpenAddVideoPopup}
        />
      </div>
    </>
  );
}
