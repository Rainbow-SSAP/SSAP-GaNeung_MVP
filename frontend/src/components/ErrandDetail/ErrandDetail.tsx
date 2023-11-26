import React from "react";
import styled from "styled-components";

const ErrandDetail = ({ data }) => {
  return (
    <Layout>
      <DetailTitle>심부름 장소 및 요청 내용</DetailTitle>
      <ErrandDetailInner>
        <StopOverContainer>
          <StopOverTitle>장소</StopOverTitle>
          <StopOverAddress>{data.detailedAddress}</StopOverAddress>
        </StopOverContainer>
        <StopOverDetailLayout>
          <StopOverContents>{data.description}</StopOverContents>
        </StopOverDetailLayout>
      </ErrandDetailInner>
    </Layout>
  );
};

export default ErrandDetail;

const Layout = styled.div`
  display: flex;
  padding: 2rem 0rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
`;

const DetailTitle = styled.h1`
  color: #262626;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.2rem; /* 157.143% */
`;

const ErrandDetailInner = styled.div`
  width: 100%;
`;
const StopOverContainer = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 5px 5px 0px 0px;
  background: #f4f4f4;
`;

const StopOverTitle = styled.h1`
  color: #262626;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.8rem;
`;

const StopOverAddress = styled.h2`
  color: #878787;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.8rem;
`;

const StopOverDetailLayout = styled.div`
  display: flex;
  min-height: 10rem;
  padding: 1rem;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 0px 0px 5px 5px;
  border: 1px solid #f4f4f4;
  background: #fff;
`;

const StopOverContents = styled.h2`
  color: #262626;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.8rem;
`;
