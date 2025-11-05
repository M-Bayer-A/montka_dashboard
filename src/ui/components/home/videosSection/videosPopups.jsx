import { useDispatch, useSelector } from "react-redux";
import { videosSelectors } from "../../../../application/states/home/videos/videosSelectors";
import {
  toggleAddPopupOpen,
  toggleEditPopupOpen,
} from "../../../../application/states/home/videos/videosSlice";
import { addVideoUseCase } from "../../../../application/useCases/home/videos/addVideoUseCase";
import { editVideoUseCase } from "../../../../application/useCases/home/videos/editVideoUseCase";
import VideosPopupContent from "./videosPopupContent";
import CustomPopup from "../../shared/customPopup";

export default function VideosPopups() {
  //
  const dispatch = useDispatch();
  //
  const isAddPopupOpen = useSelector(videosSelectors.isAddPopupOpen);
  const isEditPopupOpen = useSelector(videosSelectors.isEditPopupOpen);
  const videoInfo = useSelector(videosSelectors.videoInfo);
  //
  const handleCloseAddPopup = () => dispatch(toggleAddPopupOpen());
  const handleCloseEditPopup = () => dispatch(toggleEditPopupOpen());

  const handleSubmitAddPopup = () => dispatch(addVideoUseCase());
  const handleSubmitEditPopup = () => dispatch(editVideoUseCase());

  const isSubmitDisabled = Object.values(videoInfo).some(
    (value) => value === null || value === "" || value === undefined
  );
  //
  return (
    <>
      <CustomPopup
        isOpen={isEditPopupOpen}
        title="تعديل كود الدخول"
        disableSubmit={isSubmitDisabled}
        onClose={handleCloseEditPopup}
        onSubmit={handleSubmitEditPopup}
      >
        <VideosPopupContent />
      </CustomPopup>
      {/*  */}
      <CustomPopup
        isOpen={isAddPopupOpen}
        title="توليد كود دخول "
        disableSubmit={isSubmitDisabled}
        onClose={handleCloseAddPopup}
        onSubmit={handleSubmitAddPopup}
      >
        <VideosPopupContent />
      </CustomPopup>
    </>
  );
}
