import React, { useState } from "react";
import styled from "styled-components";
import mockData from "../../mocks/ErrandRequestMockData.json";
const Title = ({ data }) => {
  const [requestData, setRequestData] = useState(mockData.request);
  const [response, setResponseData] = useState(mockData.response);
  const auctionEndTime =
    data.auctionEndTime || "경매로 설정되지 않은 심부름입니다.";

  //TODO 편의점 배달 부분 detailItem api 수정되면 고치기
  return (
    <>
      <BtnLayout>
        <Btn>
          <CategoryTag>{data.categoryTag}</CategoryTag>
        </Btn>
        <DetailItem>{data.detailitem}</DetailItem>
      </BtnLayout>
      <Layout>
        <TitleLayout>
          <ErrandTitle>{data.title}</ErrandTitle>
          <Deadline>{auctionEndTime} 경매 마감</Deadline>
        </TitleLayout>
      </Layout>
    </>
  );
};

export default Title;

const Layout = styled.div`
  display: flex;
  padding: 1.5rem 0rem;
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

const BtnLayout = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const Btn = styled.div`
  display: flex;
  width: 6.5rem;
  height: 2.3rem;
  padding: 0.45rem 1.4rem 0.65rem 1.2rem;
  justify-content: center;
  align-items: center;
  border-radius: 5rem;
  border: 0.5px solid var(--neutral-grey-800, #323f4b);
  background: #262626;
`;

const CategoryTag = styled.p`
  color: var(--neutral-white, #fff);
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: 1.25px;
`;

const DetailItem = styled.p`
  color: #8c8c8c;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
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
