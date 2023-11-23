import React, { useState } from "react";
import styled from "styled-components";
import mockData from "../../mocks/ErrandRequestMockData.json";
const Title = ({ data }) => {
  const [requestData, setRequestData] = useState(mockData.request);
  const [response, setResponseData] = useState(mockData.response);
  const auctionStartTime =
    data.startTime || "경매로 설정되지 않은 심부름입니다.";

  return (
    <Layout>
      <TitleLayout>
        <ErrandTitle>{data.title}</ErrandTitle>
        <Deadline>{auctionStartTime}</Deadline>
      </TitleLayout>
    </Layout>
  );
};

export default Title;

const Layout = styled.div`
  display: flex;
  padding: 3rem 0rem;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  align-self: stretch;
`;

const TitleLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  align-self: stretch;
`;

const ErrandTitle = styled.h1`
  color: #262626;
  font-size: 1.7rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.2rem;
`;

const Deadline = styled.h2`
  color: #ffba00;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.8rem;
`;

// const ErrandFeeContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: flex-start;
//   align-self: stretch;
// `;

// const ErrandFeeSection = styled.div`
//   display: flex;
//   width: 15.7rem;
//   padding: 2rem 0rem;
//   flex-direction: column;
//   align-items: flex-start;
//   gap: 1rem;
// `;

// const ErrandFeeTitle = styled.h1`
//   color: #262626;
//   font-size: 1.4rem;
//   font-style: normal;
//   font-weight: 600;
//   line-height: 2.2rem;
// `;

// const Fee = styled.h2`
//   color: #007aff;
//   font-size: 1.4rem;
//   font-style: normal;
//   font-weight: 500;
//   line-height: 1.8rem;
// `;
