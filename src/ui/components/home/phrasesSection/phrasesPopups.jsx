import { useDispatch, useSelector } from "react-redux";
import { phrasesSelectors } from "../../../../application/states/home/phrases/phrasesSelectors";
import {
  toggleAddPopupOpen,
  toggleDeletePopupOpen,
  toggleEditPopupOpen,
} from "../../../../application/states/home/phrases/phrasesSlice";
import { addPhraseUseCase } from "../../../../application/useCases/home/phrases/addPhraseUseCase";
import { editPhraseUseCase } from "../../../../application/useCases/home/phrases/editPhraseUseCase";
import CustomPopup from "../../shared/customPopup";
import PhrasesPopupContent from "./phrasesPopupContent";
import { deletePhraseUseCase } from "../../../../application/useCases/home/phrases/deletePhraseUseCase";

export default function PhrasesPopups() {
  //
  const dispatch = useDispatch();
  //
  const isAddPopupOpen = useSelector(phrasesSelectors.isAddPopupOpen);
  const isEditPopupOpen = useSelector(phrasesSelectors.isEditPopupOpen);
  const isDeletePopupOpen = useSelector(phrasesSelectors.isDeletePopupOpen);
  const phraseInfo = useSelector(phrasesSelectors.phraseInfo);
  //
  const handleCloseAddPopup = () => dispatch(toggleAddPopupOpen());
  const handleCloseEditPopup = () => dispatch(toggleEditPopupOpen());
  const handleCloseDeletePopup = () => dispatch(toggleDeletePopupOpen());

  const handleSubmitAddPopup = () => dispatch(addPhraseUseCase());
  const handleSubmitEditPopup = () => dispatch(editPhraseUseCase());
  const handleSubmitDeletePopup = () => dispatch(deletePhraseUseCase());

  const isSubmitDisabled = Object.values(phraseInfo).some(
    (value) => value === null || value === "" || value === undefined
  );
  //
  return (
    <>
      <CustomPopup
        isOpen={isAddPopupOpen}
        title="توليد عبارة جديدة"
        disableSubmit={isSubmitDisabled}
        onClose={handleCloseAddPopup}
        onSubmit={handleSubmitAddPopup}
      >
        <PhrasesPopupContent />
      </CustomPopup>
      {/*  */}
      <CustomPopup
        isOpen={isEditPopupOpen}
        title="تعديل عبارة"
        disableSubmit={isSubmitDisabled}
        onClose={handleCloseEditPopup}
        onSubmit={handleSubmitEditPopup}
      >
        <PhrasesPopupContent />
      </CustomPopup>
      {/*  */}
      <CustomPopup
        isOpen={isDeletePopupOpen}
        title="حذف عبارة"
        onClose={handleCloseDeletePopup}
        onSubmit={handleSubmitDeletePopup}
      >
        <p>! هل أنت متأكد من رغبتك بحذف هذه العبارة بشكل نهائي</p>
      </CustomPopup>
    </>
  );
}
