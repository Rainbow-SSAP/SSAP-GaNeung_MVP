import React from "react";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { categoryImage, categoryMapping } from "../../../assets/categoryImages";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { getCategories } from "../../../apis/category";
import { Category } from "../../../types/category";

const CategoryGrid = () => {
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

  const handleCategoryClick = (categoryId) => {
    navigate(`/errand/category/${categoryId}`);
  };

  return (
    <Grid>
      {transformedCategories.map((category) => (
        <CategoryItem
          key={category.id}
          icon={category.icon}
          text={category.text}
          onClick={() => handleCategoryClick(category.id)}
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
