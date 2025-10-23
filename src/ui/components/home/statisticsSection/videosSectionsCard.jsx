import { useSelector } from "react-redux";
import { statisticsSelectors } from "../../../../application/states/home/statistics/statisticsSelectors";
import Skeleton from "react-loading-skeleton";

export default function VideosSectionsCard() {
  //
  const isLoading = useSelector(statisticsSelectors.isLoading);
  const videosSections = useSelector(statisticsSelectors.videosSections);
  //
  return (
    <>
      {isLoading.videosSections ? (
        <div className="w-full h-80">
          <Skeleton width="100%" height="100%" />
        </div>
      ) : (
        <div
          className="w-full flex flex-col px-3.5 py-6.5 gap-2
              bg-white rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.25)] text-right font-[Cairo] font-[700]"
        >
          <h1 className="text[14px] text-[#434C5A]">
            توزيع الفيديوهات على الأقسام
          </h1>
          <div className="space-y-5">
            {videosSections.map((s) => (
              <div key={s.label} className="space-y-1">
                <div className="flex flex-row-reverse gap-3 text-[10px]">
                  <h1 className="grow text-[#656E7A]">{s.label}</h1>
                  <span className="flex flex-row gap-1 text-[#656E7A]">
                    <p>فيديوهات</p>
                    <p>{s.videosNumber}</p>
                  </span>
                  <a className="text-[#0284C7]">عرض</a>
                </div>
                <div className="h-2 w-full bg-[#0EA5E9] rounded-xl"></div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
