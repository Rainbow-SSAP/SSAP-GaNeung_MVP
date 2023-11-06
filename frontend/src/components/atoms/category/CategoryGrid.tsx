// CategoryGrid.tsx

import React from "react";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
`;

interface Category {
  icon: string;
  label: string;
}

export interface CategoryGridProps {
  categories: Category[];
  onCategoryClick: (label: string) => void;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({
  categories,
  onCategoryClick,
}) => {
  return (
    <Grid>
      {categories.map((category) => (
        <CategoryItem
          key={category.label}
          icon={category.icon}
          label={category.label}
          onClick={() => onCategoryClick(category.label)}
        />
      ))}
    </Grid>
  );
};

export default CategoryGrid;
