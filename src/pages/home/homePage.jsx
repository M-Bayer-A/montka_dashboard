import { useState } from "react";
import CustomAppBar from "../../components/home/customAppBar";
import Main from "../../components/home/customSideBar/main";
import SideBar from "../../components/home/customSideBar/sideBar";
import SideBarContainer from "../../components/home/customSideBar/sideBarContainer";
import SideBarContent from "../../components/home/customSideBar/sideBarContent";
import SideBarFooter from "../../components/home/customSideBar/sideBarFooter";
import { customIcons, getIcon } from "../../helpers/iconsHelper";
import SideBarButton from "../../components/home/customSideBar/sideBarButton";

export default function HomePage() {
  const sectionList = [
    {
      title: "الإحصائيات",
      icon: getIcon(customIcons.history),
      link: "statistics",
    },
    {
      title: "أكواد الدخول",
      icon: getIcon(customIcons.coupon),
      link: "coupons",
    },
    {
      title: "الفيديوهات",
      icon: getIcon(customIcons.video),
      link: "videos",
    },
    {
      title: "الأقسام",
      icon: getIcon(customIcons.sections),
      link: "sections",
    },
    {
      title: "العبارات",
      icon: getIcon(customIcons.phrases),
      link: "phrases",
    },
    {
      title: "الإشعارات",
      icon: getIcon(customIcons.bell),
      link: "notifications",
    },
    {
      title: "المستخدمين",
      icon: getIcon(customIcons.user),
      link: "users",
    },
    {
      title: "السجل",
      icon: getIcon(customIcons.history),
      link: "history",
    },
  ];
  const [open, setopen] = useState(false);
  return (
    <div className="w-screen h-screen flex flex-col">
      <CustomAppBar />
      <SideBarContainer>
        <SideBar
          open={open}
          //   className={`font-[Tajawal] transition-all duration-300 ease-in-out
          //             ${open ? "w-64 translate-x-0" : "w-16 -translate-x-0"}`}
          //           className={`fixed right-0 top-0 h-full bg-black shadow-md transition-transform duration-300 ease-in-out
          //   ${open ? "translate-x-0" : "-translate-x-[-100%]"}`}
        >
          <SideBarContent className={"space-y-5"}>
            {sectionList.map((section) => (
              <SideBarButton
                key={section.title}
                active={true}
                icon={section.icon}
                title={section.title}
              />
            ))}
          </SideBarContent>
          <SideBarFooter></SideBarFooter>
        </SideBar>
        <Main className="font-[Tajawal]">
          <h1>Content</h1>
          <button onClick={() => setopen(!open)}>scscscscsc</button>
        </Main>
      </SideBarContainer>
    </div>
  );
}
// {
//   <div className="grow w-full flex flex-row gap-2 overflow-hidden">
//     <div className="h-full grow overflow-auto">
//       <div className="bg-amber-900 size-48"></div>
//       <div className="bg-amber-900 size-48"></div>
//       <div className="bg-amber-900 size-48"></div>
//       <div className="bg-amber-900 size-48"></div>
//       <div className="bg-amber-900 size-48"></div>
//       <div className="bg-amber-300 size-48"></div>
//     </div>
//     <div className="flex flex-col py-5 bg-[#1F2937] text-white">
//       {/* SideBar Header */}
//       <div>
//         <h1>المنتقى</h1>
//       </div>
//       {/* ==SideBar Header== */}
//       <hr />
//       {/* SideBar Content */}
//       <div className="p-5 grow">Content</div>
//       {/* ==SideBar Content== */}
//       <hr />
//       {/* SideBar Footer */}
//       <div>Footer</div>
//       {/* ==SideBar Footer== */}
//     </div>
//   </div>;
// }
