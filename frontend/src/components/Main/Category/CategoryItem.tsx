import { type } from "os";
import React from "react";
import styled, { css } from "styled-components";

export interface CategoryItemProps {
  type?: "column" | "row";
  icon?: string;
  text: string;
  onClick: () => void;
}

export const CategoryItem: React.FC<CategoryItemProps> = ({
  type = "column",
  icon,
  text,
  onClick,
}) => {
  return (
    <Container onClick={onClick}>
      <IconWrapper>
        <Icon src={icon} alt={text} />
      </IconWrapper>
      <Label>{text}</Label>
    </Container>
  );
};

const ItemType = {
  column: css`
    flex-direction: column;
  `,
  row: css`
    flex-direction: row;
  `,
};

export const Container = styled.div<{ type?: "column" | "row" }>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${({ type }) =>
    type === "row"
      ? css`
          flex-direction: row;
          > div {
            max-width: 18px;
            max-height: 18px;
          }
        `
      : css`
          flex-direction: column;
          flex-basis: calc(
            33.3333% - 20px
          ); // 전체 너비의 1/3에서 마진값만큼 빼줌
          > div {
            max-width: 100px;
            max-height: 100px;
          }
          > p {
            margin-top: 10px;
          }
        `}
`;

const IconWrapper = styled.div``;

const Icon = styled.img`
  width: 100%;
  border-radius: 50%;
`;

const Label = styled.p`
  font-size: 12px;
`;

export default CategoryItem;
