import { useSelector } from "react-redux";
import { statisticsSelectors } from "../../../../application/states/home/statistics/statisticsSelectors";
import Skeleton from "react-loading-skeleton";

export default function CouponsStatusCard() {
  //
  const isLoading = useSelector(statisticsSelectors.isLoading);
  const couponsStatus = useSelector(statisticsSelectors.couponsStatus);
  //
  const coupons = [
    { label: "مستخدم", color: "#3B82F6", number: couponsStatus.used },
    { label: "متاح", color: "#22C55E", number: couponsStatus.avilable },
    { label: "منتهي", color: "#EF4444", number: couponsStatus.terminated },
  ];
  //
  return (
    <>
      {isLoading.couponsStatus ? (
        <div className="w-full h-80">
          <Skeleton width="100%" height="100%" />
        </div>
      ) : (
        <div
          className="w-full flex flex-col px-3.5 py-6.5 gap-2.5 bg-white rounded-xl
             shadow-[0_2px_4px_rgba(0,0,0,0.25)] text-right font-[Cairo] font-[700]"
        >
          <h1 className="text[14px] text-[#434C5A]">حالة أكواد الدخول</h1>
          {coupons.map((c) => (
            <div
              key={c.label}
              className="w-full flex flex-row-reverse items-center gap-1"
            >
              <div
                className={`size-3 rounded-[100px]`}
                style={{ backgroundColor: c.color }}
              />
              <h1>{c.label}</h1>
              <p className="grow text-left">{c.number}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
