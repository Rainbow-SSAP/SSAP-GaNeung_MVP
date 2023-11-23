import React from "react";
import styled, { css } from "styled-components";
import SSAP_logo from "../../../assets/images/ssap_logo_B.svg";
import Menu from "./Menu/Menu";
import { headerImage } from "../../../assets/headerImages";
import { useRecoilState } from "recoil";
import { isMenuOpenState } from "../../../recoil/atoms/settingsState";
import { useNavigate } from "react-router-dom";

export const MainHeader = () => {
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

  return (
    <MainHeaderWrapper>
      <Logo onClick={handleHome}>
        <img src={SSAP_logo} alt="SSAP 로고" />
      </Logo>
      <MenuIcon onClick={toggleMenu}>
        <img src={headerImage.menu} />
      </MenuIcon>
      <Menu isOpen={isMenuOpen} />
    </MainHeaderWrapper>
  );
};

const MainHeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
`;

const Logo = styled.div`
  padding: 5px 0;
`;

const MenuIcon = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;

  img {
    width: 100%;
  }
`;
