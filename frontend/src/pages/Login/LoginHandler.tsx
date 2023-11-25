import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { authInfoState } from "../../recoil/atoms/userInfo";

export const LoginHandler = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");
  console.log("code 받음", code);

  const setAuthInfo = useSetRecoilState(authInfoState);

  useEffect(() => {
    kakaoLogin();
  }, [code]);

  const kakaoLogin = async () => {
    try {
      console.log("서버에 코드 요청 보냄", code);
      const res = await axios({
        method: "GET",
        url: `/api/oauth/kakao/callback?code=${code}`,
        // url: `https://k1e5f1ddb1135a.user-app.krampoline.com/api/oauth/kakao/callback?code=${code}`,
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      });
      console.log("서버로부터 응답", res);

      // 백엔드 응답 처리
      if (res.data.loginSuccess) {
        console.log("로그인 성공", res.data);

        const { userName, userEmail } = res.data.account;
        const accessToken = res.data.accessToken;

        setAuthInfo({
          accessToken,
          userName,
          userEmail,
        });

        sessionStorage.setItem("accessToken", res.data.accessToken); // 액세스 토큰 저장
        console.log("네비게이팅");
        navigate("/home"); // HomePage로 이동
      } else {
        console.error("로그인 실패", res.data);
      }
    } catch (error) {
      console.error("로그인 요청 실패:", error);
    }
  };

  return <div>로그인 중입니다...</div>;
};
