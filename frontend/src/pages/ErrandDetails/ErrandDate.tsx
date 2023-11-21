import React from "react";
import styled from "styled-components";

const ErrandDate = () => {
  return (
    <Layout>
      <Date>일시</Date>
      <DateDetail>TODO 자세한 일정 추가</DateDetail>
    </Layout>
  );
};

export default ErrandDate;

const Layout = styled.div`
  display: flex;
  padding: 2rem 0rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
`;

const Date = styled.h1`
  color: #262626;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.2rem;
`;

const DateDetail = styled.h3`
  color: #262626;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.8rem;
`;
