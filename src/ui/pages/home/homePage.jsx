import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { customIcons, getIcon } from "../../../helpers/iconsHelper";
import CustomAppBar from "../../components/shared/customAppBar";
import SideBar from "../../components/shared/customSideBar/sideBar";
import SideBarContent from "../../components/shared/customSideBar/sideBarContent";
import SideBarButton from "../../components/shared/customSideBar/sideBarButton";
import SideBarFooter from "../../components/shared/customSideBar/sideBarFooter";
import MainContent from "../../components/shared/customSideBar/mainContent";
import SideBarProvider from "../../components/shared/customSideBar/sideBarProvider";
import SideBarHeader from "../../components/shared/customSideBar/sideBarHeader";

export default function HomePage() {
  const sectionList = [
    {
      title: "الإحصائيات",
      icon: getIcon(customIcons.history),
      url: "/home/statistics",
    },
    {
      title: "أكواد الدخول",
      icon: getIcon(customIcons.coupon),
      url: "/home/coupons",
    },
    {
      title: "الفيديوهات",
      icon: getIcon(customIcons.video),
      url: "/home/videos",
    },
    {
      title: "الأقسام",
      icon: getIcon(customIcons.sections),
      url: "/home/sections",
    },
    {
      title: "العبارات",
      icon: getIcon(customIcons.phrases),
      url: "/home/phrases",
    },
    {
      title: "الإشعارات",
      icon: getIcon(customIcons.bell),
      url: "/home/notifications",
    },
    {
      title: "المستخدمين",
      icon: getIcon(customIcons.user),
      url: "/home/users",
    },
    {
      title: "السجل",
      icon: getIcon(customIcons.history),
      url: "/home/record",
    },
  ];
  //
  let path = useLocation().pathname;
  //
  const [open, setopen] = useState(true);
  const navigate = useNavigate();
  const handleOpenSideBar = () => setopen(!open);
  //
  return (
    <div className="w-screen h-screen flex flex-col bg-zinc-100 overflow-hidden">
      <CustomAppBar onClick={handleOpenSideBar} />
      <SideBarProvider isOpen={open} onClose={() => setopen(false)}>
        <SideBar>
          <SideBarHeader>
            <h1 className="font-[700] text-[22px] text-center py-2.5">
              المنتقى
            </h1>
          </SideBarHeader>
          <SideBarContent className={"space-y-5"}>
            {sectionList.map((section) => (
              <SideBarButton
                key={section.title}
                active={path == section.url}
                icon={section.icon}
                title={section.title}
                onClick={() => navigate(section.url)}
              />
            ))}
          </SideBarContent>
          <SideBarFooter>
            <SideBarButton
              active={false}
              icon={getIcon(customIcons.history)}
              title={"تسجيل الخروج"}
            />
          </SideBarFooter>
        </SideBar>
        <MainContent className={"overflow-auto"}>
          <Outlet />
        </MainContent>
      </SideBarProvider>
    </div>
  );
}
