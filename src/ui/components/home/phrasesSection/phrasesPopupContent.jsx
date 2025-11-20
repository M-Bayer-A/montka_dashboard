import { useDispatch, useSelector } from "react-redux";
import CustomTextArea from "../../shared/customTextArea";
import { phrasesSelectors } from "../../../../application/states/home/phrases/phrasesSelectors";
import { setPhraseInfo } from "../../../../application/states/home/phrases/phrasesSlice";

export default function PhrasesPopupContent() {
  //
  const dispatch = useDispatch();
  //
  const phraseInfo = useSelector(phrasesSelectors.phraseInfo);
  //
  const handleSetPhrase = (value) => dispatch(setPhraseInfo({ phrase: value }));
  const handleSetIsActive = (value) =>
    dispatch(setPhraseInfo({ isActive: value }));
  //
  return (
    <div className="w-full flex flex-col gap-2.5">
      <div className="w-full flex flex-col gap-1">
        <label>العبارة</label>
        <CustomTextArea
          value={phraseInfo.phrase}
          onChange={handleSetPhrase}
          className={"w-full h-40"}
        />
      </div>
      <div className="w-full flex flex-row gap-1 items-center justify-end">
        <label>تنشيط العبارة</label>
        <input
          type="checkbox"
          checked={phraseInfo.isActive}
          onChange={(e) => handleSetIsActive(e.target.checked)}
          className="accent-black size-4 cursor-pointer"
        />
      </div>
    </div>
  );
}
