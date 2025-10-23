import { useSelector } from "react-redux";
import { statisticsSelectors } from "../../../../application/states/home/statistics/statisticsSelectors";
import Skeleton from "react-loading-skeleton";

export default function LatestActivitiesCard() {
  //
  const isLoading = useSelector(statisticsSelectors.isLoading);
  const latestActivities = useSelector(statisticsSelectors.latestActivities);
  //
  return (
    <>
      {isLoading.latestActivities ? (
        <div className="w-full h-80">
          <Skeleton width="100%" height="100%" />
        </div>
      ) : (
        <div
          className="w-full flex flex-col px-3.5 py-6.5 gap-2.5
          bg-white rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.25)] text-right font-[Cairo]"
        >
          <h1 className="font-[700] text[14px] text-[#434C5A]">
            أحدث النشاطات
          </h1>
          <div dir="rtl" className="space-y-2.5">
            {latestActivities.map((e) => (
              <>
                <div className="w-full space-y-1">
                  <p className="text-black text-[14px]">
                    <span className="font-[700]">{e.name} </span>
                    <span>{e.action}</span>
                  </p>
                  <p className="text-[#787F8C] text-[12px]">{e.date}</p>
                </div>
                <hr />
              </>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
