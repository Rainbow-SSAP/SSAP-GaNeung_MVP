import React from "react";
import styled from "styled-components";
import mockData from "../../mocks/ErrandRequestMockData.json";

const ErrandFeeContainer = ({ data }) => {
  const fee = Number(data.fee).toLocaleString();
  return (
    <ErrandContainer>
      <ErrandFeeSection>
        <ErrandFeeTitle>심부름비</ErrandFeeTitle>
        <Fee>{fee}원</Fee>
      </ErrandFeeSection>
      <PayMethodContainer>
        <PayMethodTitle>물품비 지불 방식</PayMethodTitle>
        <PayMethodDetail>추후 협의</PayMethodDetail>
      </PayMethodContainer>
    </ErrandContainer>
  );
};

export default ErrandFeeContainer;

const ErrandContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  border-top: 1px solid #f4f4f4;
  border-bottom: 1px solid #f4f4f4;
`;

const ErrandFeeSection = styled.div`
  display: flex;
  width: 15.7rem;
  padding: 2rem 0rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  border-right: 1px solid #f4f4f4;
`;

const ErrandFeeTitle = styled.h1`
  color: #262626;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.2rem;
`;

const Fee = styled.h2`
  color: #007aff;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.8rem;
`;

const PayMethodContainer = styled.div`
  display: flex;
  width: 17.7rem;
  padding: 2rem 0rem;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const PayMethodTitle = styled.h1`
  color: #262626;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.2rem;
`;

const PayMethodDetail = styled.h2`
  color: #f10000;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.8rem;
`;
