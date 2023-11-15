import React from "react";
import styled from "styled-components";
import Category from "./Category/Category";
import Title from "./Title/Title";
import Description from "./Description/Description";

export const ErrandRequest = () => {
  return (
    <ErrandRequestWarpper>
      <Category />
      <Title />
      <Description />
    </ErrandRequestWarpper>
  );
};

const ErrandRequestWarpper = styled.div`
  display: grid;
  grid-gap: 20px;
`;
