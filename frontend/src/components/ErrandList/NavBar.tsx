import React from "react";
import styled from "styled-components";

const NavBar = () => {
  return (
    <Wrapper>
      <div>
        <div>
          <Text>전체</Text>
          <Text>🛵 배달·퀵</Text>
          <Text>🧹 청소</Text>
          <Text>🛠️ ️운반·수리</Text>
          <Text>👩‍👦 동행·육아</Text>
          <Text>🐾 펫</Text>
          <Text>전체</Text>
          <Text>전체</Text>
          <Text>전체</Text>
        </div>
      </div>
    </Wrapper>
  );
};

export default NavBar;

const Wrapper = styled.div`
  display: flex;
  height: 4.8rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
  box-shadow: 0rem 0.4rem 0.4rem 0rem rgba(0, 0, 0, 0.1);

  & > div {
    display: flex;
    padding: 0rem 2rem;
    justify-content: space-between;
    align-items: flex-start;
    position: absolute;
    left: 0.2rem;
    /* bottom: 0rem; */
    background-color: pink;
  }

  & > div > div {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 0.5rem;
    white-space: nowrap;
    overflow-x: auto;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

const Text = styled.p`
  color: var(--theme-white-theme-core-tokens-primary-black, #262626);
  font-family: Work Sans;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6rem;
`;

// const EtcEllipse = styled.div`
//   background: url(${EtcIcon});
// `;
