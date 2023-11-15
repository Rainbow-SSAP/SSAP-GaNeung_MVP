import React from "react";
import styled from "styled-components";
import { headerImage } from "../../assets/headerImages";

export interface HeaderProps {
  title: string;
  onBack: () => void;
  onMenu: () => void;
}

// 헤더 컴포넌트
const Header = ({ title, onBack, onMenu }: HeaderProps) => (
  <HeaderContainer>
    <BackIcon onClick={onBack}>{headerImage.goback}</BackIcon>
    <Title>{title}</Title>
    <HamburgerIcon onClick={onMenu}>{"≡"}</HamburgerIcon>
  </HeaderContainer>
);

export default Header;

// 스타일 컴포넌트 정의
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #ececec; // 임시 배경색
`;

const BackIcon = styled.div`
  // 뒤로가기 아이콘 스타일
`;

const Title = styled.h1`
  // 텍스트 스타일
`;

const HamburgerIcon = styled.div`
  // 햄버거 메뉴 아이콘 스타일
`;

// 헤더 컴포넌트의 Props 타입 정의
