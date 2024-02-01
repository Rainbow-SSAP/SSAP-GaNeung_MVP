import React from "react";
import { Navigate } from "react-router-dom";

interface PrivateProps {
  children: JSX.Element;
}

const Private: React.FC<PrivateProps> = ({ children }) => {
  const isAuthenticated = (): boolean => {
    const accessToken = sessionStorage.getItem("accessToken");
    console.log("로그인 인증 완료..", accessToken);
    // 엑세스 토근 존재 여부 확인
    return accessToken !== null;
  };

  console.log("로그인 인증 완료..", isAuthenticated());

  return isAuthenticated() ? children : <Navigate to="/login/" replace />;
};

export default Private;
