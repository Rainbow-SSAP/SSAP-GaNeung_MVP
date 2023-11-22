import React from "react";
import UserProfile from "./UserProfile";
import styled from "styled-components";
function Menu() {

  return (
    <MenuContainer>
      <MenuContents>
        <UserProfile />
      </MenuContents>
    </MenuContainer>
  );
}

const MenuContainer = styled.aside`
`;
const MenuContents = styled.div`
  padding: 0 5vw;
`;
export default Menu;
