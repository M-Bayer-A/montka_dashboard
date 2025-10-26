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
import MostViewedVideosCard from "../../../components/home/statisticsSection/mostViewedVideosCard";
import { getMostViewedVideosUseCase } from "../../../../application/useCases/home/statistics/getMostViewedVideosUseCase";

export default function StatisticsSection() {
  //
  const dispatch = useDispatch();
  //
  useEffect(() => {
    dispatch(getAppDetailsUseCase());
    dispatch(getCouponsStatusUseCase());
    dispatch(getVideosSectionsUseCase());
    dispatch(getLatestActivitiesUseCase());
    dispatch(getMostViewedVideosUseCase());
  }, [dispatch]);
  //

  return (
    <div className="min-h-full w-full md:min-w-[800px] flex flex-col p-4 gap-5">
      <DetailsCard />
      <div className="w-full flex md:flex-row flex-col gap-5">
        <CouponsStatusCard />
        <VideosSectionsCard />
      </div>
      <div className="w-full flex md:flex-row flex-col gap-5">
        <LatestActivitiesCard />
        <MostViewedVideosCard />
      </div>
    </div>
  );
}
