import { useDispatch, useSelector } from "react-redux";
import { sectionsSelectors } from "../../../../application/states/home/sections/sectionsSelectors";
import {
  toggleAddPopupOpen,
  toggleDeletePopupOpen,
  toggleEditPopupOpen,
} from "../../../../application/states/home/sections/sectionsSlice";
import { addSectionUseCase } from "../../../../application/useCases/home/sections/addSectionUseCase";
import { editSectionUseCase } from "../../../../application/useCases/home/sections/editSectionUseCase";
import CustomPopup from "../../shared/customPopup";
import SectionsPopupContent from "./sectionsPopupContent";
import { deleteSectionUseCase } from "../../../../application/useCases/home/sections/deleteSectionUseCase";

export default function SectionsPopups() {
  //
  const dispatch = useDispatch();
  //
  const isAddPopupOpen = useSelector(sectionsSelectors.isAddPopupOpen);
  const isEditPopupOpen = useSelector(sectionsSelectors.isEditPopupOpen);
  const isDeletePopupOpen = useSelector(sectionsSelectors.isDeletePopupOpen);
  const sectionPopup = useSelector(sectionsSelectors.sectionInfo);
  //
  const handleCloseAddPopup = () => dispatch(toggleAddPopupOpen());
  const handleCloseEditPopup = () => dispatch(toggleEditPopupOpen());
  const handleCloseDeletePopup = () => dispatch(toggleDeletePopupOpen());

  const handleSubmitAddPopup = () => dispatch(addSectionUseCase());
  const handleSubmitEditPopup = () => dispatch(editSectionUseCase());
  const handleSubmitDeletePopup = () => dispatch(deleteSectionUseCase());

  const isSubmitDisabled = Object.values(sectionPopup).some(
    (value) => value === null || value === "" || value === undefined
  );
  //
  return (
    <>
      {/* Edit Popup */}
      <CustomPopup
        isOpen={isEditPopupOpen}
        title="تعديل قسم"
        disableSubmit={isSubmitDisabled}
        onClose={handleCloseEditPopup}
        onSubmit={handleSubmitEditPopup}
      >
        <SectionsPopupContent />
      </CustomPopup>
      {/* Add Popup */}
      <CustomPopup
        isOpen={isAddPopupOpen}
        title="إنشاء قسم جديد"
        disableSubmit={isSubmitDisabled}
        onClose={handleCloseAddPopup}
        onSubmit={handleSubmitAddPopup}
      >
        <SectionsPopupContent />
      </CustomPopup>
      {/* Delete Popup */}
      <CustomPopup
        isOpen={isDeletePopupOpen}
        title="حذف قسم"
        onClose={handleCloseDeletePopup}
        onSubmit={handleSubmitDeletePopup}
      >
        <p>! هل أنت متأكد من رغبتك بحذف هذا القسم بشكل نهائي</p>
      </CustomPopup>
    </>
  );
}
