import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export interface NavItemProps {
  icon?: string;
  text: string;
  to: string;
}

export const NavItem = ({ icon, text, to }: NavItemProps) => {
  return (
    <NavItemWrapper>
      <Link to={to}>
        <IconWrapper>
          {icon && <img src={icon} alt={`${text} 아이콘`} />}
        </IconWrapper>
        <h2>{text}</h2>
      </Link>
    </NavItemWrapper>
  );
};

const NavItemWrapper = styled.li`
  cursor: pointer;
  a {
    display: flex;
    grid-gap: 1.4rem;
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
