import { useDispatch, useSelector } from "react-redux";
import CustomTextInput from "../../shared/customTextInput";
import { sectionsSelectors } from "../../../../application/states/home/sections/sectionsSelectors";
import { setSectionInfo } from "../../../../application/states/home/sections/sectionsSlice";

export default function SectionsPopupContent() {
  //
  const dispatch = useDispatch();
  //
  const sectionInfo = useSelector(sectionsSelectors.sectionInfo);
  //
  const handleSetName = (value) => dispatch(setSectionInfo({ name: value }));

  const handleSetImageUrl = (value) =>
    dispatch(setSectionInfo({ imageUrl: value }));
  //
  return (
    <div className="w-full space-y-5">
      <div className="w-full flex flex-col gap-2">
        <label>اسم القسم</label>
        <CustomTextInput
          className={"w-full"}
          value={sectionInfo.name}
          onChange={handleSetName}
        />
      </div>
      <div className="w-full flex flex-col gap-2">
        <label>رابط الصورة المصغرة</label>
        <CustomTextInput
          className={"w-full"}
          value={sectionInfo.imageUrl}
          onChange={handleSetImageUrl}
        />
      </div>
    </div>
  );
}
