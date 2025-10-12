import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { customIcons, getIcon } from "../../../helpers/iconsHelper";
import CustomAppBar from "../../components/home/customAppBar";
import SideBar from "../../components/home/customSideBar/SideBar";
import SideBarContainer from "../../components/home/customSideBar/SideBarContainer";
import SideBarContent from "../../components/home/customSideBar/SideBarContent";
import SideBarButton from "../../components/home/customSideBar/SideBarButton";
import SideBarFooter from "../../components/home/customSideBar/SideBarFooter";
import MainContent from "../../components/home/customSideBar/MainContent";

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
      url: "/home/history",
    },
  ];
  //
  let path = useLocation().pathname;
  //
  const [open, setopen] = useState(true);
  const navigate = useNavigate();
  const handleOpenSideBar = () => setopen(!open);
  return (
    <div className="w-screen h-screen flex flex-col bg-zinc-100">
      <CustomAppBar onClick={handleOpenSideBar} />
      <SideBarContainer>
        <SideBar open={open}>
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
          <SideBarFooter>todo later</SideBarFooter>
        </SideBar>
        <MainContent>
          <Outlet />
        </MainContent>
      </SideBarContainer>
    </div>
  );
}
