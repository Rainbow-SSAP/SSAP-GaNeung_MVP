import React from "react";
import styled, { css } from "styled-components";

export interface NavItemProps {
  icon?: string;
  text: string;
  isSelected: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const NavItem = ({ icon, text, onClick, isSelected }: NavItemProps) => {
  console.log("isSelected", isSelected);
  return (
    <NavItemWrapper onClick={onClick} isSelected={isSelected}>
      {icon && (
        <IconWrapper>
          <img src={icon} alt={`${text} 아이콘`} />
        </IconWrapper>
      )}
      {text !== "" && <h2>{text}</h2>}
    </NavItemWrapper>
  );
};

const NavItemWrapper = styled.div<{ isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
  border-bottom: 2px solid white;
  padding: 10px 20px;
  cursor: pointer;

  ${({ isSelected }) =>
    isSelected &&
    css`
      border-bottom: 2px solid ${({ theme }) => theme.color.pirmary};
    `}

  h2 {
    font-size: 16px;
    font-weight: 400;
  }
`;

const IconWrapper = styled.div`
  display: inline-block;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.grey50};

  img {
    width: 100%;
  }
`;
