import { useSelector } from "react-redux";
import { statisticsSelectors } from "../../../../application/states/home/statistics/statisticsSelectors";
import Skeleton from "react-loading-skeleton";
import { AiOutlineEye } from "react-icons/ai";

export default function MostViewedVideosCard() {
  //
  const isLoading = useSelector(statisticsSelectors.isLoading);
  const mostViewedVideos = useSelector(statisticsSelectors.mostViewedVideos);
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
            الفيديوهات الأكثر مشاهدة
          </h1>
          <div dir="rtl" className="flex flex-col gap-2.5">
            {mostViewedVideos.map((e) => (
              <div className="w-full min-h-12.5 flex flex-row items-center gap-4">
                <img className="w-20.5 h-12.5 rounded-[6px]" src={e.image} />
                <div className="w-full h-full flex flex-col justify-center overflow-hidden">
                  <p className="font-[700] text-[13px] text-black overflow-hidden text-ellipsis">
                    {e.title}
                  </p>
                  <div className="w-full flex flex-row items-center gap-1 font-[700] text-[11px] text-[#A3A9B4]">
                    <p className=" overflow-hidden text-ellipsis">
                      {e.section}
                    </p>
                    <p>|</p>
                    <span className="flex flex-row size-fit items-center gap-0.5">
                      <AiOutlineEye /> {e.viewsNum}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
