import React from "react";
import LoginPage from "./pages/Login/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginHandeler } from "./pages/Login/LoginHandler";

function App() {
  return (
    <div>
      <BrowserRouter>
        <LoginPage />
        <Routes>
          <Route
            path="/login/oauth2/code/kakao"
            element={<LoginHandeler />} //redirect_url에 맞춰 꾸밀 컴포넌트
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
