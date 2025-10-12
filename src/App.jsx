import "react-loading-skeleton/dist/skeleton.css";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./ui/pages/login/loginPage";
import HomePage from "./ui/pages/home/homePage";
import StatisticsSection from "./ui/pages/home/sections/StatisticsSection";
import CouponsSection from "./ui/pages/home/sections/couponsSection";
import { SkeletonTheme } from "react-loading-skeleton";

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
        </Route>
      </Routes>
    </SkeletonTheme>
  );
}
