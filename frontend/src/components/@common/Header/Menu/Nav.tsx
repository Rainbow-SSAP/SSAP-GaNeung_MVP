import React from "react";
import styled from "styled-components";
import { NavItem } from "./NavItem";
import { categoryImage } from "../../../../assets/categoryImages";
import { headerImage } from "../../../../assets/headerImages";

function Nav() {
  return (
    <nav>
      <MenuListWrapper>
        <span>카테고리</span>
        <ul>
          <NavItem
            icon={categoryImage.delivery}
            text="배달·퀵"
            to="/errandList"
          />
          <NavItem icon={categoryImage.cleaning} text="청소" to="/errandList" />
          <NavItem
            icon={categoryImage.repair}
            text="운반·수리 "
            to="/errandList"
          />
          <NavItem
            icon={categoryImage.accompany_parenting}
            text="동행·육아 "
            to="/errandList"
          />
          <NavItem icon={categoryImage.pet} text="펫" to="/errandList" />
          <NavItem
            icon={categoryImage.agency}
            text="역할대행"
            to="/errandList"
          />
          <NavItem
            icon={categoryImage.part_time}
            text="‍‍‍알바"
            to="/errandList"
          />
          <NavItem icon={categoryImage.bug} text="벌레잡기" to="/errandList" />
          <NavItem icon={categoryImage.other} text="기타" to="/errandList" />
        </ul>
      </MenuListWrapper>
      <MenuListWrapper>
        <span>나의 활동</span>
        <ul>
          <NavItem icon={headerImage.profile} text="내 정보" to="/home" />
          <NavItem icon={headerImage.history} text="수행내역" to="/home" />
          <NavItem icon={headerImage.requests} text="요청내역 " to="/home" />
        </ul>
      </MenuListWrapper>
      <MenuListWrapper>
        <span>소식 및 지원</span>
        <ul>
          <NavItem icon={headerImage.terms} text="이용약관" to="/home" />
          <NavItem icon={headerImage.support} text="고객센터" to="/home" />
        </ul>
      </MenuListWrapper>
    </nav>
  );
}

const MenuListWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  padding: 40px 0;

  border-bottom: 1px solid ${({ theme }) => theme.color.grey50};

  > span {
    font-size: 18px;
    margin-bottom: 4px;
  }

  > ul {
    display: grid;
    grid-gap: 20px;
  }
`;

export default Nav;
