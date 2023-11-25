import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export interface NavItemProps {
  icon?: string;
  text: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const NavItem = ({ icon, text, onClick }: NavItemProps) => {
  return (
    <NavItemWrapper onClick={onClick}>
      {icon && (
        <IconWrapper>
          <img src={icon} alt={`${text} 아이콘`} />
        </IconWrapper>
      )}
      {text !== "" && <h2>{text}</h2>}
    </NavItemWrapper>
  );
};

const NavItemWrapper = styled.div`
  display: flex;
  height: 4.8rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
  cursor: pointer;

  a {
    display: flex;
    align-items: center;
  }

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
