import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import SSAP_logo from "../../../assets/images/ssap_logo_B.svg";
import Menu from "./Menu/Menu";
import { headerImage } from "../../../assets/headerImages";
import { useRecoilState } from "recoil";
import { isMenuOpenState } from "../../../recoil/atoms/settingsState";
import { useNavigate } from "react-router-dom";

export interface HeaderProps {
  type?: "logo" | "gnb";
  title?: string;
}

export const Header = (headerProps: HeaderProps) => {
  const { title, type = "gnb" } = headerProps;
  // 메뉴 열림/닫힘 상태 관리
  const [isMenuOpen, setIsMenuOpen] = useRecoilState(isMenuOpenState);
  const navigate = useNavigate();

  // 메뉴 토글
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 로고 클릭 시 home으로 이동
  const handleHome = () => {
    navigate("/home");
  };

  // 뒤로가기 버튼 클릭 시
  const handleGoBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <HeaderContainer type={type}>
      {type === "gnb" ? (
        <LeftItem>
          <IconWrapper>
            <img
              src={headerImage.arrow_back}
              alt="뒤로가기 버튼"
              onClick={handleGoBack}
            />
          </IconWrapper>
          <Title>{title}</Title>
        </LeftItem>
      ) : (
        <Logo onClick={handleHome}>
          <img src={SSAP_logo} alt="SSAP 로고" />
        </Logo>
      )}
      <IconWrapper onClick={toggleMenu}>
        <img src={headerImage.menu} />
      </IconWrapper>
      <Menu isOpen={isMenuOpen} />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header<{ type: string }>`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  width: 100%;
  padding: 2rem;
  justify-content: space-between;
  align-items: center;
  ${({ type, theme }) =>
    type === "gnb" &&
    css`
      border: 1px solid ${theme.color.grey50};
    `};
  background-color: white;
  /* box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25); */
`;

const Logo = styled.div``;
const LeftItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  cursor: pointer;

  img {
    width: 100%;
  }
`;

const Title = styled.h3`
  color: #262626;
  font-size: 1.8rem;
  font-weight: 600;
`;
