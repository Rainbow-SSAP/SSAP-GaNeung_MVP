import React from "react";
import { RouteObject } from "react-router-dom";
import LoginPage from "../pages/Login/LoginPage";
import { LoginHandler } from "../pages/Login/LoginHandler";
import Private from "./Private";
import HomePage from "../pages/Home/HomePage";
import ErrandListPage from "../pages/ErrandList/ErrandListPage";
import ErrandRequestPage from "../pages/ErrandRequest/ErrandRequestPage";
import ErrandDetailsPage from "../pages/ErrandDetails/ErrandDetailsPage";
import ErrorPage from "../pages/Error/ErrorPage";
import ChatPage from "../pages/Chat/ChatPage";
import HistoryPage from "../pages/History/HistoryPage";
import ProfilePage from "../pages/Profile/ProfilePage";

const routes: RouteObject[] = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/login/oauth2/code/kakao",
    element: <LoginHandler />,
  },
  {
    path: "/",
    element: (
      <Private>
        <HomePage />
      </Private>
    ),
  },
  {
    path: "/errand/category/:categoryId",
    element: (
      <Private>
        <ErrandListPage />
      </Private>
    ),
  },
  {
    path: "/errand/request",
    element: (
      <Private>
        <ErrandRequestPage />
      </Private>
    ),
  },
  {
    path: "/errand/:taskId",
    element: (
      <Private>
        <ErrandDetailsPage />
      </Private>
    ),
  },
  {
    path: "/error",
    element: <ErrorPage />,
  },
  {
    path: "/chat",
    element: (
      <Private>
        <ChatPage />
      </Private>
    ),
  },
  {
    path: "/history",
    element: (
      <Private>
        <HistoryPage />
      </Private>
    ),
  },
  {
    path: "/profile",
    element: (
      <Private>
        <ProfilePage />
      </Private>
    ),
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];

export default routes;
