import { useDispatch, useSelector } from "react-redux";
import CustomFooter from "../../shared/customFooter";
import { phrasesSelectors } from "../../../../application/states/home/phrases/phrasesSelectors";
import { getPhrasesTableInfoUseCase } from "../../../../application/useCases/home/phrases/getPhrasesTableInfoUseCase";
import { setNumberOfRowsPerPage } from "../../../../application/states/home/phrases/phrasesSlice";

export default function PhrasesFooter() {
  //
  const dispatch = useDispatch();
  //
  const paginationInfo = useSelector(phrasesSelectors.paginationInfo);
  //
  const handleGetTableInfo = (page) =>
    dispatch(getPhrasesTableInfoUseCase({ page }));

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
