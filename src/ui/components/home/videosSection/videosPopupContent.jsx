import CustomTextInput from "../../shared/customTextInput";
import CustomTextArea from "../../shared/customTextArea";
import CustomSelect from "../../shared/customSelect";
import { useDispatch, useSelector } from "react-redux";
import { videosSelectors } from "../../../../application/states/home/videos/videosSelectors";
import { setVideoInfo } from "../../../../application/states/home/videos/videosSlice";

export default function VideosPopupContent() {
  //
  const dispatch = useDispatch();
  //
  const videoInfo = useSelector(videosSelectors.videoInfo);
  //
  const handleSetURL = (value) => dispatch(setVideoInfo({ url: value }));

  const handleSetTitle = (value) => dispatch(setVideoInfo({ title: value }));

  const handleSetDescription = (value) =>
    dispatch(setVideoInfo({ description: value }));

  const handleSetSection = (value) =>
    dispatch(setVideoInfo({ mainSection: value }));

  const handleSetAge = (value) => dispatch(setVideoInfo({ age: value }));

  const handleSetNotes = (value) => dispatch(setVideoInfo({ notes: value }));

  const handleSetTags = (value) => dispatch(setVideoInfo({ tags: value }));

  const handleSetIsPinned = (value) =>
    dispatch(setVideoInfo({ isPinned: value }));
  //
  const options = [
    { id: 1, name: "a" },
    { id: 2, name: "b" },
    { id: 3, name: "c" },
    { id: 4, name: "d" },
    { id: 5, name: "e" },
    { id: 6, name: "f" },
  ];
  //
  return (
    <div dir="rtl" className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label>رابط اليوتيوب</label>
        <CustomTextInput
          type="text"
          value={videoInfo.url}
          onChange={handleSetURL}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label>العنوان</label>
        <CustomTextInput
          type="text"
          value={videoInfo.title}
          onChange={handleSetTitle}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label>الوصف</label>
        <CustomTextArea
          className={"h-40"}
          value={videoInfo.description}
          onChange={handleSetDescription}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label>القسم الرئيسي</label>
        <CustomSelect
          className={"w-full"}
          title={"الأقسام"}
          options={options}
          onChange={handleSetSection}
          value={videoInfo.mainSection}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label>الفئة العمرية</label>
        <CustomTextInput
          type="number"
          value={videoInfo.age}
          onChange={handleSetAge}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label>ملاحظات للأهل</label>
        <CustomTextArea
          className={"h-40"}
          value={videoInfo.notes}
          onChange={handleSetNotes}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label>الوسوم (مفصولة بفاصلة)</label>
        <CustomTextArea value={videoInfo.tags} onChange={handleSetTags} />
      </div>
      <div className="flex flex-row items-center gap-2">
        <input
          type="checkbox"
          onChange={(e) => handleSetIsPinned(e.target.checked)}
          className="accent-black size-4 cursor-pointer"
        />
        <label>تثبيت الفيديو في أعلى القائمة</label>
      </div>
    </div>
  );
}
