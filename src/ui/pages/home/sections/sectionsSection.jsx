import { useDispatch, useSelector } from "react-redux";
import { sectionsSelectors } from "../../../../application/states/home/sections/sectionsSelectors";
import { useEffect } from "react";
import { getSectionsOrderUseCase } from "../../../../application/useCases/home/sections/getSectionsInfoUseCase";
import Skeleton from "react-loading-skeleton";
import SectionsHeader from "../../../components/home/sectionsSection/sectionsHeader";
import SectionsOrder from "../../../components/home/sectionsSection/sectionsOrder";
import SectionsPopups from "../../../components/home/sectionsSection/sectionsPopups";
import { Backdrop, CircularProgress } from "@mui/material";

export default function SectionsSection() {
  const dispatch = useDispatch();
  //
  const isDataLoading = useSelector(sectionsSelectors.isDataLoading);
  const isActionLoading = useSelector(sectionsSelectors.isActionLoading);
  //
  useEffect(() => {
    dispatch(getSectionsOrderUseCase());
  }, [dispatch]);
  //
  return (
    <div className="min-h-full w-full min-w-[750px] flex flex-col p-4 gap-5 font-[Cairo]">
      <SectionsHeader />
      {/*  */}
      {isDataLoading ? (
        <>
          <div className="w-full h-25">
            <Skeleton width="100%" height="100%" />
          </div>
          <div className="w-full h-25">
            <Skeleton width="100%" height="100%" />
          </div>
          <div className="w-full h-25">
            <Skeleton width="100%" height="100%" />
          </div>
          <div className="w-full h-25">
            <Skeleton width="100%" height="100%" />
          </div>
          <div className="w-full h-25">
            <Skeleton width="100%" height="100%" />
          </div>
        </>
      ) : (
        <SectionsOrder />
      )}
      <SectionsPopups />
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={isActionLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
