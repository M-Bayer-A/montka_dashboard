import { useState } from "react";
import CustomAppBar from "../../components/home/customAppBar";
import MainContent from "../../components/home/customSideBar/mainContent";
import SideBar from "../../components/home/customSideBar/sideBar";
import SideBarContainer from "../../components/home/customSideBar/sideBarContainer";
import SideBarContent from "../../components/home/customSideBar/sideBarContent";
import SideBarFooter from "../../components/home/customSideBar/sideBarFooter";
import { customIcons, getIcon } from "../../helpers/iconsHelper";
import SideBarButton from "../../components/home/customSideBar/sideBarButton";
import { Outlet } from "react-router-dom";

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
  const [open, setopen] = useState(true);
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
                active={true}
                icon={section.icon}
                title={section.title}
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
