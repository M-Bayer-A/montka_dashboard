import { useDispatch, useSelector } from "react-redux";
import { customIcons, getIcon } from "../../../../helpers/iconsHelper";
import { statisticsSelectors } from "../../../../application/states/home/statistics/statisticsSelectors";
import { useEffect } from "react";
import { getAppDetailsUseCase } from "../../../../application/useCases/home/statistics/getAppDetailsUseCase";
import { getCouponsStatusUseCase } from "../../../../application/useCases/home/statistics/getCouponsStatusUseCase";
import { getVideosSectionsUseCase } from "../../../../application/useCases/home/statistics/getVideosSectionsUseCase";
import { getLatestActivitiesUseCase } from "../../../../application/useCases/home/statistics/getLastestActivitiesUseCase";
import Skeleton from "react-loading-skeleton";

export default function StatisticsSection() {
  //
  const isLoading = useSelector(statisticsSelectors.isLoading);
  const appDetails = useSelector(statisticsSelectors.appDetails);
  const couponsStatus = useSelector(statisticsSelectors.couponsStatus);
  const videosSections = useSelector(statisticsSelectors.videosSections);
  const latestActivities = useSelector(statisticsSelectors.latestActivities);
  // const mostViewedVideos = useSelector(statisticsSelectors.mostViewedVideos);
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
  const details = [
    {
      label: "إجمالي المستخدمين",
      value: appDetails.allUsers,
      icon: { bg: "#0EA5E9", src: getIcon(customIcons.user) },
    },
    {
      label: "الإشتراكات النشطة",
      value: appDetails.activeSubsicribs,
      icon: { bg: "#22C55E", src: getIcon(customIcons.coupon) },
    },
    {
      label: "إجمالي الفيديوهات",
      value: appDetails.allVideos,
      icon: { bg: "#F59E0B", src: getIcon(customIcons.video) },
    },
    {
      label: "إجمالي الأقسام",
      value: appDetails.allSections,
      icon: { bg: "#A855F7", src: getIcon(customIcons.sections) },
    },
  ];
  const coupons = [
    { label: "مستخدم", color: "#3B82F6", number: couponsStatus.used },
    { label: "متاح", color: "#22C55E", number: couponsStatus.avilable },
    { label: "منتهي", color: "#EF4444", number: couponsStatus.terminated },
  ];
  return (
    <div className="h-full w-full min-w-[750px] flex flex-col p-4 gap-5 overflow-auto">
      {/* تفاصيل البرنامج */}
      <div className="w-full flex flex-row-reverse justify-between gap-2">
        {details.map((d) =>
          isLoading.appDetails ? (
            <div className="w-full h-21">
              <Skeleton width="100%" height="100%" />
            </div>
          ) : (
            <div
              key={d.label}
              className="w-full flex flex-row justify-between items-center gap-1 p-4
            bg-white rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.25)] text-right font-[Cairo] font-[700]"
            >
              <div
                className="flex justify-center items-center flex-shrink-0 size-13 p-3.5 rounded-[100px]"
                style={{ backgroundColor: d.icon.bg }}
              >
                <img src={d.icon.src} />
              </div>
              <div className="flex flex-col items-end">
                <h1 className="text-[#707072] text-[11px]">{d.label}</h1>
                <p className="text-black text-[20px]">{d.value}</p>
              </div>
            </div>
          )
        )}
      </div>
      {/* == تفاصيل البرنامج == */}
      <div className="w-full flex flex-row gap-5">
        {/* حالة أكواد الدخول*/}
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
        {/* ==حالة أكواد الدخول==*/}

        {/* توزيع الفيديوهات على الأقسام */}
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
        {/*== توزيع الفيديوهات على الأقسام ==*/}
      </div>
      <div className="w-full flex flex-row gap-5">
        {/* آخر الأحداث */}
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
        {/* ==آخر الأحداث== */}
        <div
          className="w-full flex flex-col px-3.5 py-6.5 gap-2
          bg-white rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.25)] text-right font-[Cairo]"
        ></div>
      </div>
    </div>
  );
}
