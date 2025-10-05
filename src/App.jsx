import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/loginPage";
import HomePage from "./pages/home/homePage";

export default function App() {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
