import React from "react";
import styled from "styled-components";
import { NavItem } from "./NavItem";
import {
  categoryImage,
  categoryMapping,
} from "../../../../assets/categoryImages";
import { headerImage } from "../../../../assets/headerImages";
import { useQuery } from "react-query";
import { getCategories } from "../../../../apis/category";
import { Category } from "../../../../types/category";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isMenuOpenState } from "../../../../recoil/atoms/settingsState";

function Nav() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useRecoilState(isMenuOpenState);

  const { data, isLoading, error } = useQuery<Category[]>(
    "categories",
    getCategories,
  );

  // 아이콘이랑 매칭
  const transformedCategories =
    data && Array.isArray(data)
      ? data.map((category) => ({
          id: category.id,
          text: category.categoryName,
          icon: categoryImage[categoryMapping[category.categoryName]] || "",
        }))
      : [];

  const navigateTo = (path) => {
    setIsMenuOpen(false); // 메뉴 닫기
    navigate(path);
  };

  return (
    <nav>
      <MenuListWrapper>
        <span>카테고리</span>
        <ul>
          {transformedCategories.map((category) => (
            <NavItem
              key={category.id}
              icon={category.icon}
              text={category.text}
              onClick={() => navigateTo(`/errand/category/${category.id}`)}
            />
          ))}
        </ul>
      </MenuListWrapper>
      <MenuListWrapper>
        <span>나의 활동</span>
        <ul>
          <NavItem
            icon={headerImage.profile}
            text="내 정보"
            onClick={() => navigateTo("/home")}
          />
          <NavItem
            icon={headerImage.history}
            text="수행내역"
            onClick={() => navigateTo("/home")}
          />
          <NavItem
            icon={headerImage.requests}
            text="요청내역 "
            onClick={() => navigateTo("/home")}
          />
        </ul>
      </MenuListWrapper>
      <MenuListWrapper>
        <span>소식 및 지원</span>
        <ul>
          <NavItem
            icon={headerImage.terms}
            text="이용약관"
            onClick={() => navigateTo("/home")}
          />
          <NavItem
            icon={headerImage.support}
            text="고객센터"
            onClick={() => navigateTo("/home")}
          />
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
