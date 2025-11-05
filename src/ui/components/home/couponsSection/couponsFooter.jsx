import { useDispatch, useSelector } from "react-redux";
import CustomFooter from "../../shared/customFooter";
import { couponsSelectors } from "../../../../application/states/home/coupons/couponsSelectors";
import { getCouponsTableInfoUseCase } from "../../../../application/useCases/home/coupons/getCouponsTableInfoUseCase";
import { setNumberOfRowsPerPage } from "../../../../application/states/home/coupons/couponsSlice";

export default function CouponsFooter() {
  //
  const dispatch = useDispatch();
  //
  const paginationInfo = useSelector(couponsSelectors.paginationInfo);
  //
  const handleGetTableInfo = (page) =>
    dispatch(getCouponsTableInfoUseCase({ page }));

  const handleSetRowsPerPageNum = (value) =>
    dispatch(setNumberOfRowsPerPage({ number: value }));
  //
  return (
    <CustomFooter
      paginationInfo={paginationInfo}
      onNumOfRowsChange={handleSetRowsPerPageNum}
      getDataHandeler={handleGetTableInfo}
    />
  );
}
