import { useDispatch, useSelector } from "react-redux";
import CustomPopup from "../../shared/customPopup";
import AddCouponPopupContent from "./addCouponPopupContent";
import EditCouponPopupContent from "./editCouponPopupContent";
import { couponsSelectors } from "../../../../application/states/home/coupons/couponsSelectors";
import {
  toggleAddPopupOpen,
  toggleEditPopupOpen,
} from "../../../../application/states/home/coupons/couponsSlice";
import { addCouponUseCase } from "../../../../application/useCases/home/coupons/addCouponUseCase";
import { editCouponUseCase } from "../../../../application/useCases/home/coupons/editCouponUseCase";

export default function CouponsPopups() {
  //
  const dispatch = useDispatch();
  //
  const isAddPopupOpen = useSelector(couponsSelectors.isAddPopupOpen);
  const isEditPopupOpen = useSelector(couponsSelectors.isEditPopupOpen);
  const couponInfo = useSelector(couponsSelectors.couponInfo);
  //
  const handleCloseAddPopup = () => dispatch(toggleAddPopupOpen());
  const handleCloseEditPopup = () => dispatch(toggleEditPopupOpen());

  const handleSubmitAddPopup = () => dispatch(addCouponUseCase());
  const handleSubmitEditPopup = () => dispatch(editCouponUseCase());

  const isEditDisabled = Object.values(couponInfo).some(
    (value) => value === null || value === "" || value === undefined
  );

  const isAddDisabled =
    couponInfo.validity == null || couponInfo.validity == "";

  //
  return (
    <>
      <CustomPopup
        isOpen={isEditPopupOpen}
        title="تعديل كود الدخول"
        disableSubmit={isEditDisabled}
        onClose={handleCloseEditPopup}
        onSubmit={handleSubmitEditPopup}
      >
        <EditCouponPopupContent />
      </CustomPopup>
      {/*  */}
      <CustomPopup
        isOpen={isAddPopupOpen}
        title="توليد كود دخول "
        disableSubmit={isAddDisabled}
        onClose={handleCloseAddPopup}
        onSubmit={handleSubmitAddPopup}
      >
        <AddCouponPopupContent />
      </CustomPopup>
    </>
  );
}
