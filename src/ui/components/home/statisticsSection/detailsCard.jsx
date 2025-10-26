import { useSelector } from "react-redux";
import { statisticsSelectors } from "../../../../application/states/home/statistics/statisticsSelectors";
import { customIcons, getIcon } from "../../../../helpers/iconsHelper";
import Skeleton from "react-loading-skeleton";

export default function DetailsCard() {
  //
  const isLoading = useSelector(statisticsSelectors.isLoading);
  const appDetails = useSelector(statisticsSelectors.appDetails);
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
  return (
    <div className="w-full flex md:flex-row-reverse flex-col justify-between gap-2">
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
  );
}
