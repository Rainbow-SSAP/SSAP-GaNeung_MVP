import React from "react";
import { KAKAO_AUTH_URL } from "../../apis/OAuth";
import kakaoImage from "../../assets/images/Kakao.png";
import styled from "styled-components";
import logo from "../../assets/images/ssap_logo_W.svg";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";
import { Navigate } from "react-router-dom";

export default function LoginPage() {
  useLockBodyScroll(); // body 스크롤 막기

  const isAuthenticated = (): boolean => {
    const accessToken = sessionStorage.getItem("accessToken");
    console.log("로그인 인증 완료..", accessToken);
    // 엑세스 토근 존재 여부 확인
    return accessToken !== null;
  };

  if (isAuthenticated()) {
    // 이미 로그인한 상태라면 홈페이지로 리다이렉트
    return <Navigate to="/" />;
  }

  return (
    <LoginContainer>
      <Logo>
        <img src={logo} alt="SSAP 로고" />
      </Logo>
      <div>
        <p>서비스 이용을 위해 로그인 해주세요.</p>
        <a href={KAKAO_AUTH_URL} className="kakaobtn">
          <img src={kakaoImage} alt="kakao login btn" />
        </a>
      </div>
    </LoginContainer>
  );
}

const LoginContainer = styled.section`
  width: 100%;
  height: 100vh;
  min-width: 320px;
  max-height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  grid-gap: 6rem;
  text-align: center;
  /* background-color: aliceblue; */

  p {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
    border-radius: 60px;
    background-color: #ffe500;
  }
  /* 웹 환경에서의 스타일 */
  @media (min-width: 321px) {
    max-width: 768px;
    min-width: 320px;
    margin: 0 auto;
  }
`;

const Logo = styled.div``;
