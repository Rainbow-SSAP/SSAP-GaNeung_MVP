import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { categoryImage, categoryMapping } from "../../assets/categoryImages";
import { NavItem } from "./NavBar";
import { getCategories } from "../../apis/category";
import { useQuery } from "react-query";
import { Category } from "../../types/category";
import { useNavigate } from "react-router-dom";

function Nav({ selectedCategoryId }) {
  const navigate = useNavigate();
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

  const handleCategoryClick = async (categoryId) => {
    navigate(`/errand/category/${categoryId}`);
  };

  console.log("nav selectedCategoryId", selectedCategoryId);
  return (
    <NavLayout>
      <MenuListWrapper>
        {/* <NavItem text="전체" /> */}
        {transformedCategories.map((category) => (
          <NavItem
            key={category.id}
            icon={category.icon}
            text={category.text}
            isSelected={category.id === selectedCategoryId}
            onClick={() => handleCategoryClick(category.id)}
          />
        ))}
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
