// CategoryItem.tsx

import React from "react";
import styled from "styled-components";

export interface CategoryItemProps {
  icon: string;
  label: string;
  onClick: () => void;
}

export const Container = styled.div`
  cursor: pointer;
  text-align: center;
  margin: 10px;
  flex-basis: calc(33.3333% - 20px); // 전체 너비의 1/3에서 마진값만큼 빼줌
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Label = styled.p``;

export const CategoryItem: React.FC<CategoryItemProps> = ({
  icon,
  label,
  onClick,
}) => {
  return (
    <Container onClick={onClick}>
      <Icon src={icon} alt={label} />
      <Label>{label}</Label>
    </Container>
  );
};

export default CategoryItem;
