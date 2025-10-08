import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/login/loginPage";
import HomePage from "./pages/home/homePage";
import StatisticsSection from "./pages/home/statistics/StatisticsSection";

export default function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to="/home" replace />} /> */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />}>
        <Route index element={<Navigate to="statistics" replace />} />
        <Route path="statistics" element={<StatisticsSection />} />
      </Route>
    </Routes>
  );
}
