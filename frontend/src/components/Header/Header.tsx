import React from "react";
import styled from "styled-components";
import { headerImage } from "../../assets/headerImages";

export interface HeaderProps {
  title: string;
  onBack: () => void;
  onMenu: () => void;
  alignItems?: "flex-start" | "center" | "flex-end";
  justifyContent?: "flex-start" | "center" | "space-between" | "flex-end";
  titleAlign?: "left" | "center" | "right";
}

export const Header = (headerProps: HeaderProps) => {
  const {
    title,
    onBack,
    onMenu,
    alignItems = "center",
    justifyContent = "space-between",
    titleAlign = "center",
  } = headerProps;

  return (
    <HeaderContainer alignItems={alignItems} justifyContent={justifyContent}>
      <BackIcon src={headerImage.goback} onClick={onBack}></BackIcon>
      <Title titleAlign={titleAlign}>{title}</Title>
      <HamburgerIcon src={headerImage.menu} onClick={onMenu}></HamburgerIcon>
    </HeaderContainer>
  );
};

// export const Header = ({
//   title,
//   onBack,
//   onMenu,
//   alignItems = "center",
//   justifyContent = "space-between",
// }: HeaderProps) => (
//   <HeaderContainer alignItems={alignItems} justifyContent={justifyContent}>
//     <BackIcon src={headerImage.goback} onClick={onBack}></BackIcon>
//     <Title>{title}</Title>
//     <HamburgerIcon src={headerImage.menu} onClick={onMenu}></HamburgerIcon>
//   </HeaderContainer>
// );

// 스타일 컴포넌트 정의
const HeaderContainer = styled.header<{
  alignItems: string;
  justifyContent: string;
  titleAlign: string;
}>`
  display: flex;
  justify-content: ${(props) => props.justifyContent || "space-between"};
  align-items: ${(props) => props.alignItems || "center"};
  text-align: ${(props) => props.titleAlign || "center"};

  padding: 1rem;
  background: #ececec; // 임시 배경색
`;

const BackIcon = styled.img`
  cursor: pointer;
  // 뒤로가기 아이콘 스타일
`;

const Title = styled.h1<{ titleAlign: string }>`
  // 텍스트 스타일 TODO 헤더 타이틀 위치 변경 가능하게 수정
  text-align: ${(props) => props.titleAlign || "center"};
`;

const HamburgerIcon = styled.img`
  // 햄버거 메뉴 아이콘 스타일
  cursor: pointer;
`;

// 헤더 컴포넌트의 Props 타입 정의
