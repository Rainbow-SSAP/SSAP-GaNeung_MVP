import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { categoryImage } from "../../assets/categoryImages";
import { NavItem } from "./NavBar";
import { getCategories } from "../../apis/category";
import { fetchErrandCategory } from "../../apis/errandCategory";

function Nav({ handleCategoryClick }) {
  return (
    <NavLayout>
      <MenuListWrapper>
        <NavItem text="전체" />
        <NavItem
          icon={categoryImage.delivery}
          text="배달·퀵"
          onClick={() => handleCategoryClick(1)}
        />
        <NavItem icon={categoryImage.cleaning} text="청소" />
        <NavItem icon={categoryImage.repair} text="운반·수리 " />
        <NavItem icon={categoryImage.accompany_parenting} text="동행·육아 " />
        <NavItem icon={categoryImage.pet} text="펫" />
        <NavItem icon={categoryImage.agency} text="역할대행" />
        <NavItem icon={categoryImage.part_time} text="‍‍‍알바" />
        <NavItem icon={categoryImage.bug} text="벌레잡기" />
        <NavItem icon={categoryImage.other} text="기타" />
      </MenuListWrapper>
    </NavLayout>
  );
}

const NavLayout = styled.nav`
  box-shadow: 0rem 0.4rem 0.4rem 0rem rgba(0, 0, 0, 0.1);
`;

const MenuListWrapper = styled.div`
  display: flex;
  height: 4.8rem;
  align-items: center;
  justify-content: flex-start;
  white-space: nowrap;
  overflow-x: auto;

  scrollbar-width: thin;
  scrollbar-color: transparent transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

export default Nav;
