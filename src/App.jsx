import "react-loading-skeleton/dist/skeleton.css";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./ui/pages/login/loginPage";
import HomePage from "./ui/pages/home/homePage";
import StatisticsSection from "./ui/pages/home/sections/StatisticsSection";
import CouponsSection from "./ui/pages/home/sections/couponsSection";
import { SkeletonTheme } from "react-loading-skeleton";
import VideosSection from "./ui/pages/home/sections/videosSection";
import SectionsSection from "./ui/pages/home/sections/sectionsSection";
import PhrasesSection from "./ui/pages/home/sections/phrasesSection";
import NotificationsSection from "./ui/pages/home/sections/notificationsSection";
import UsersSection from "./ui/pages/home/sections/usersSection";
import RecordSection from "./ui/pages/home/sections/recordSection";

export default function App() {
  return (
    <SkeletonTheme
      borderRadius={12} // 👈 applies to all skeletons inside
      baseColor="#e0e0e0"
      highlightColor="#f5f5f5"
    >
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />}>
          <Route index element={<Navigate to="statistics" replace />} />
          <Route path="statistics" element={<StatisticsSection />} />
          <Route path="coupons" element={<CouponsSection />} />
          <Route path="videos" element={<VideosSection />} />
          <Route path="sections" element={<SectionsSection />} />
          <Route path="phrases" element={<PhrasesSection />} />
          <Route path="notifications" element={<NotificationsSection />} />
          <Route path="users" element={<UsersSection />} />
          <Route path="record" element={<RecordSection />} />
        </Route>
      </Routes>
    </SkeletonTheme>
  );
}
