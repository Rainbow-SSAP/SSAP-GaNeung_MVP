import React from "react";
import styled from "styled-components";
import { headerImage } from "../../../assets/headerImages";

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
      <BackIconAndPage>
        <BackIcon src={headerImage.goback} onClick={onBack}></BackIcon>
        <Title titleAlign={titleAlign}>{title}</Title>
      </BackIconAndPage>
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
  titleAlign?: string;
}>`
  display: flex;
  width: 37.5rem;
  height: 4.8rem;
  padding: 1rem 2rem;
  justify-content: ${(props) => props.justifyContent || "space-between"};
  align-items: ${(props) => props.alignItems || "center"};
  text-align: ${(props) => props.titleAlign || "center"};
  border-bottom: 1px solid #e2e2e2;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
`;

const BackIconAndPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
`;

const BackIcon = styled.img`
  cursor: pointer;
`;

const Title = styled.h1<{ titleAlign: string }>`
  // 텍스트 스타일 TODO 헤더 타이틀 위치 변경 가능하게 수정
  text-align: ${(props) => props.titleAlign || "center"};
  color: #262626;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.2rem;
`;

const HamburgerIcon = styled.img`
  // 햄버거 메뉴 아이콘 스타일
  cursor: pointer;
`;
