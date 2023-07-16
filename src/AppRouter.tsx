import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./components/Pages/LoginPage";
import RegisterPage from "./components/Pages/RegisterPage";
import Test from "./Test";

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/home" element={<div>Home</div>} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
};

export default AppRouter;
