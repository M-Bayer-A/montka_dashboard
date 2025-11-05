import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { videosSelectors } from "../../../../application/states/home/videos/videosSelectors";
import { getVideosTableInfoUseCase } from "../../../../application/useCases/home/videos/getVideosTableInfoUseCase";
import { useEffect } from "react";
import AddVideoPopup from "../../../components/home/videosSection/videosPopupContent";
import { Backdrop, CircularProgress } from "@mui/material";
import EditVideoPopup from "../../../components/home/videosSection/editVideoPopup";
import VideosHeader from "../../../components/home/videosSection/videosHeader";
import VideosTable from "../../../components/home/videosSection/videosTable";
import VideosFooter from "../../../components/home/videosSection/videosFooter";
import VideosPopups from "../../../components/home/videosSection/videosPopups";

export default function VideosSection() {
  //
  const dispatch = useDispatch();
  //
  const isDataLoading = useSelector(videosSelectors.isDataLoading);
  const isActionLoading = useSelector(videosSelectors.isActionLoading);
  //
  useEffect(() => {
    dispatch(getVideosTableInfoUseCase({ page: 1 }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <div className="min-h-full w-full min-w-[750px] flex flex-col p-4 gap-5 font-[Cairo]">
      <VideosHeader />
      {isDataLoading ? (
        <div className="w-full h-110">
          <Skeleton width="100%" height="100%" />
        </div>
      ) : (
        <VideosTable />
      )}
      <VideosFooter />
      <VideosPopups />
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={isActionLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
