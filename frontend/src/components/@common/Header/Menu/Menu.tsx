import React, { useEffect } from "react";
import UserProfile from "./UserProfile";
import styled from "styled-components";
import Nav from "./Nav";
import { GnbHeader } from "../GnbHeader/GnbHeader";

interface MenuProps {
  isOpen: boolean;
}

function Menu({ isOpen }: MenuProps) {
  useEffect(() => {
    if (isOpen) {
      // 메뉴가 열려있으면 body 스크롤을 비활성화
      document.body.style.overflow = "hidden";
    } else {
      // 메뉴가 닫혀있으면 스크롤을 다시 활성화
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <MenuContainer isOpen={isOpen}>
      <GnbHeader leftItems="home" />
      <MenuContents>
        <UserProfile />
        <Nav />
      </MenuContents>
    </MenuContainer>
  );
}

const MenuContainer = styled.aside<MenuProps>`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: white;
  transition: right 0.3s;
  overflow-y: auto;
`;
const MenuContents = styled.div`
  padding: 0 5vw;
`;
export default Menu;
