import React from "react";
import styled from "styled-components";
import Category from "./Category/Category";

export const ErrandRequest = () => {
  return (
    <ErrandRequestWarpper>
      <Category />
    </ErrandRequestWarpper>
  );
};

const ErrandRequestWarpper = styled.div`
  display: grid;
  grid-gap: 20px;
`;
