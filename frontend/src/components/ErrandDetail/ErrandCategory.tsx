import React from "react";
import styled from "styled-components";

const ErrandCategory = ({ data }) => {
  return (
    <Layout>
      <BtnLayout></BtnLayout>
    </Layout>
  );
};

export default ErrandCategory;

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const BtnLayout = styled.div`
  display: flex;
  width: 6.8rem;
  height: 2.3rem;
  padding: 0.45rem 1.4rem 0.65rem 1.2rem;
  justify-content: center;
  align-items: center;
  border-radius: 5rem;
  border: 0.5px solid var(--neutral-grey-800, #323f4b);
  background: #262626;
`;
