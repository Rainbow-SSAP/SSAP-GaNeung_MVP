import React from "react";
import styled, { css } from "styled-components";
import Menu from "./Menu/Menu";
import { headerImage } from "../../../assets/headerImages";
import { useRecoilState } from "recoil";
import { isMenuOpenState } from "../../../recoil/atoms/settingsState";
import { useNavigate } from "react-router-dom";
import { authInfoState } from "../../../recoil/atoms/userInfo";

export interface HeaderProps {
  gnb?: boolean;
  type?: "location" | "title";
  title?: string;
}

export const Header = (headerProps: HeaderProps) => {
  const { title, gnb, type = "title" } = headerProps;
  // 메뉴 열림/닫힘 상태 관리
  const [isMenuOpen, setIsMenuOpen] = useRecoilState(isMenuOpenState);
  const [authInfo, setAuthInfo] = useRecoilState(authInfoState);
  const navigate = useNavigate();

  // 메뉴 토글
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 뒤로가기 버튼 클릭 시
  const handleGoBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  // TODO: 위치 정보 재설성
  
  return (
    <HeaderContainer type={type}>
      <LeftItem>
        {gnb && (
          <IconWrapper>
            <img
              src={headerImage.arrow_back}
              alt="뒤로가기 버튼"
              onClick={handleGoBack}
            />
          </IconWrapper>
        )}
        {type === "title" ? (
          <Title>{title}</Title>
        ) : (
          <LocationInfoWapper>
            <span>{authInfo.shortAddress}</span>
          </LocationInfoWapper>
        )}
      </LeftItem>

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
  padding: 2rem 2.6vw;
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

const LocationInfoWapper = styled.div`
  display: flex;
  justify-content: center;
  line-height: 2.4rem;

  span {
    font-size: 1.8rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
  }
  span::after {
    content: "";
    display: inline-block;
    width: 22px;
    height: 22px;
    background-image: url(${headerImage.arrow});
    background-color: transparent;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`;
