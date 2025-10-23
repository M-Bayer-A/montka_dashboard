import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAppDetailsUseCase } from "../../../../application/useCases/home/statistics/getAppDetailsUseCase";
import { getCouponsStatusUseCase } from "../../../../application/useCases/home/statistics/getCouponsStatusUseCase";
import { getVideosSectionsUseCase } from "../../../../application/useCases/home/statistics/getVideosSectionsUseCase";
import { getLatestActivitiesUseCase } from "../../../../application/useCases/home/statistics/getLastestActivitiesUseCase";
import DetailsCard from "../../../components/home/statisticsSection/detailsCard";
import CouponsStatusCard from "../../../components/home/statisticsSection/couponsStatusCard";
import VideosSectionsCard from "../../../components/home/statisticsSection/videosSectionsCard";
import LatestActivitiesCard from "../../../components/home/statisticsSection/latestActivitesCard";

export default function StatisticsSection() {
  //
  const dispatch = useDispatch();
  //
  useEffect(() => {
    dispatch(getAppDetailsUseCase());
    dispatch(getCouponsStatusUseCase());
    dispatch(getVideosSectionsUseCase());
    dispatch(getLatestActivitiesUseCase());
  }, [dispatch]);
  //

  return (
    <div className="h-full w-full min-w-[750px] flex flex-col p-4 gap-5 overflow-auto">
      <DetailsCard />

      <div className="w-full flex flex-row gap-5">
        <CouponsStatusCard />
        <VideosSectionsCard />
      </div>
      <div className="w-full flex flex-row gap-5">
        <LatestActivitiesCard />
        <div
          className="w-full flex flex-col px-3.5 py-6.5 gap-2
          bg-white rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.25)] text-right font-[Cairo]"
        ></div>
      </div>
    </div>
  );
}
