import { useDispatch, useSelector } from "react-redux";
import { videosSelectors } from "../../../../application/states/home/videos/videosSelectors";
import { setNumberOfRowsPerPage } from "../../../../application/states/home/videos/videosSlice";
import { getVideosTableInfoUseCase } from "../../../../application/useCases/home/videos/getVideosTableInfoUseCase";
import CustomFooter from "../../shared/customFooter";

export default function VideosFooter() {
  //
  const dispatch = useDispatch();
  //
  const paginationInfo = useSelector(videosSelectors.paginationInfo);
  //
  const handleSetRowsPerPageNum = (value) =>
    dispatch(setNumberOfRowsPerPage({ number: value }));

  const handleGetTableInfo = (page) =>
    dispatch(getVideosTableInfoUseCase({ page }));
  //
  return (
    <CustomFooter
      paginationInfo={paginationInfo}
      onNumOfRowsChange={handleSetRowsPerPageNum}
      getDataHandeler={handleGetTableInfo}
    />
  );
}
