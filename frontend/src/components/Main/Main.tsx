import React from "react";
import CategoryGrid from "./Category/CategoryGrid";
import Errands from "../ErrandList/Errands";
import styled from "styled-components";

function Main() {
  return (
    <MainWrapper>
      <CategoryWrapper>
        <CategoryGrid />
      </CategoryWrapper>
      <Errands />
    </MainWrapper>
  );
}

const MainWrapper = styled.section`
  width: 100%;
`;

const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.lightPurple};
`;

export default Main;
