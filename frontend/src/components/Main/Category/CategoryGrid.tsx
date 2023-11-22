import React from "react";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { categoryImage, categoryMapping } from "../../../assets/categoryImages";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { getCategories } from "../../../apis/category";

export interface Category {
  id: number;
  categoryName: string;
}

const CategoryGrid = () => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useQuery<Category[]>(
    "categories",
    getCategories,
  );

  // 아이콘이랑 매칭
  const transformedCategories =
    data?.map((category) => ({
      id: category.id,
      text: category.categoryName,
      icon:
        categoryImage[categoryMapping[category.categoryName]] ||
        "기본_아이콘_URL",
    })) || [];

  const handleCategoryClick = () => {
    navigate("/errandList");
  };

  return (
    <Grid>
      {transformedCategories.map((category) => (
        <CategoryItem
          key={category.id}
          icon={category.icon}
          text={category.text}
          onClick={handleCategoryClick}
        />
      ))}
    </Grid>
  );
};

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  grid-gap: 20px;
  width: 90%;
  padding: 40px 20px;
`;

export default CategoryGrid;
