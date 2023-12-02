import React from "react";
import styled from "styled-components";
import { headerImage } from "../../../../assets/headerImages";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isMenuOpenState } from "../../../../recoil/atoms/settingsState";

export interface GnbHeaderProps {
  title?: string;
  goBack?: boolean;
  close?: boolean;
}

export const GnbHeader = (gnbHeaderProps: GnbHeaderProps) => {
  const { title, goBack = true, close = true } = gnbHeaderProps;
  const [isMenuOpen, setIsMenuOpen] = useRecoilState(isMenuOpenState);
  const navigate = useNavigate();
  const location = useLocation();

  // 현재 경로가 /main이 아닐 때만 홈 버튼을 표시
  const showHomeButton = location.pathname !== "/home";

  // 뒤로가기 버튼 클릭 시
  const handleGoBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  // 홈 버튼 클릭 시
  const handleHome = () => {
    navigate("/home");
    setIsMenuOpen(!isMenuOpen);
  };

  // 닫기 버튼 클릭 시
  const handleClose = () => {
    setIsMenuOpen(!isMenuOpen);
    // TODO bottomsheet일 경우 추가 필요
  };

  return (
    <GnbHeaderWrapper>
      <IconWrapper>
        {goBack && (
          <img
            src={headerImage.arrow_back}
            alt="뒤로가기 버튼"
            onClick={handleGoBack}
          />
        )}
        {showHomeButton && (
          <IconWrapper onClick={handleHome}>
            <img src={headerImage.home_line} alt="홈 버튼" />
          </IconWrapper>
        )}
      </IconWrapper>
      <Title>{title}</Title>
      <IconWrapper>
        {close && (
          <img src={headerImage.close} alt="닫기 버튼" onClick={handleClose} />
        )}
      </IconWrapper>
    </GnbHeaderWrapper>
  );
};

const GnbHeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  width: 100%;
  padding: 2rem 0;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  z-index: 10;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;

  img {
    width: 100%;
    cursor: pointer;
  }
`;

const Title = styled.h2`
  color: #262626;
  font-size: 1.8rem;
  font-weight: 600;
`;
