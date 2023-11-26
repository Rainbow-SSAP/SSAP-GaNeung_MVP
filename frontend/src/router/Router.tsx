import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import LoginPage from "../pages/Login/LoginPage";
import ErrandListPage from "../pages/ErrandList/ErrandListPage";
import ErrandRequestPage from "../pages/ErrandRequest/ErrandRequestPage";
import ErrandDetailsPage from "../pages/ErrandDetails/ErrandDetailsPage";
import ErrorPage from "../pages/Error/ErrorPage";
import ChatPage from "../pages/Chat/ChatPage";
import HistoryPage from "../pages/History/HistoryPage";
import ProfilePage from "../pages/Profile/ProfilePage";
import { LoginHandler } from "../pages/Login/LoginHandler";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login/oauth2/code/kakao" element={<LoginHandler />} />
        <Route
          path="/errand/category/:categoryId"
          element={<ErrandListPage />}
        />
        <Route path="/errand/request" element={<ErrandRequestPage />} />
        <Route path="/errand/:taskId" element={<ErrandDetailsPage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<ErrorPage />} /> {/* 404 에러 페이지 */}
      </Routes>
    </Router>
  );
}
