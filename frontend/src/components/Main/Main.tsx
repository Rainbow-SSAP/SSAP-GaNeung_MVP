import React from "react";
import CategoryGrid from "./Category/CategoryGrid";
import Errands from "./Errands";
import styled from "styled-components";

function Main() {
  return (
    <MainContainer>
      <Category>
        <CategoryGrid />
      </Category>
      <Errands />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  padding: 2rem 3vw;
`;

const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.lightPurple};
`;

export default Main;
