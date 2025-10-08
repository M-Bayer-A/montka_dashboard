import { customIcons, getIcon } from "../../../helpers/iconsHelper";

export default function StatisticsSection() {
  const details = [
    {
      label: "إجمالي المستخدمين",
      value: 5,
      icon: { bg: "#0EA5E9", src: getIcon(customIcons.user) },
    },
    {
      label: "الإشتراكات النشطة",
      value: 5,
      icon: { bg: "#22C55E", src: getIcon(customIcons.coupon) },
    },
    {
      label: "إجمالي الفيديوهات",
      value: 5,
      icon: { bg: "#F59E0B", src: getIcon(customIcons.video) },
    },
    {
      label: "إجمالي الأقسام",
      value: 5,
      icon: { bg: "#A855F7", src: getIcon(customIcons.sections) },
    },
  ];
  const sections = [
    { label: "تطوير الذات", videosNumber: 3 },
    { label: "ريادة الأعمال", videosNumber: 3 },
    { label: "التقنية والبرمجة", videosNumber: 3 },
    { label: "الصحة واللياقة", videosNumber: 3 },
    { label: "المال والإستثمار", videosNumber: 3 },
    { label: "اللغات والآداب", videosNumber: 3 },
  ];
  const coupons = [
    { label: "مستخدم", color: "#3B82F6", number: 3 },
    { label: "متاح", color: "#22C55E", number: 3 },
    { label: "منتهي", color: "#EF4444", number: 3 },
  ];
  return (
    <div className="h-full w-full flex flex-col p-4 gap-5">
      {/* تفاصيل البرنامج */}
      <div dir="rtl" className="w-full flex flex-wrap justify-between gap-2">
        {details.map((d) => (
          <div
            key={d.label}
            dir="ltr"
            className="w-[278px] flex flex-row justify-between gap-1 p-4 bg-white rounded-xl 
            shadow-[0_2px_4px_rgba(0,0,0,0.25)] font-[Cairo] font-[700]"
          >
            <div
              className={`size-13 p-3.5 rounded-[100px]`}
              style={{ backgroundColor: d.icon.bg }}
            >
              <img src={d.icon.src} />
            </div>
            <div className="flex flex-col items-end">
              <h1 className="text-[#707072] text-[11px]">{d.label}</h1>
              <p className="text-black text-[20px]">{d.value}</p>
            </div>
          </div>
        ))}
      </div>
      {/* == تفاصيل البرنامج == */}
      <div className="w-full flex flex-row gap-5">
        <div
          className="w-full flex flex-col px-3.5 py-6.5 gap-2.5 bg-white rounded-xl
         shadow-[0_2px_4px_rgba(0,0,0,0.25)] text-right font-[Cairo] font-[700]"
        >
          <h1>حالة أكواد الدخول</h1>
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
        {/* توزيع الفيديوهات على الأقسام */}
        <div
          className="w-full flex flex-col px-3.5 py-6.5 gap-2 bg-white rounded-xl
         shadow-[0_2px_4px_rgba(0,0,0,0.25)] text-right font-[Cairo] font-[700]"
        >
          <h1 className="text[14px] text-[#434C5A]">
            توزيع الفيديوهات على الأقسام
          </h1>
          <div className="space-y-5">
            {sections.map((s) => (
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
        {/*== توزيع الفيديوهات على الأقسام ==*/}
      </div>
    </div>
  );
}
