import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { loadingState } from "../../recoil/atoms/settingsState";

function Loading() {
  return (
    <LoadingContainer>
      <p>모든 심부름은 SSAP에서 쌉가능!</p>
      <span>잠시만 기다려주세요.</span>
    </LoadingContainer>
  );
}

const LoadingContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.primary};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 18px;
    font-weight: bold;
    color: white;
  }
  span {
    font-size: 12px;
    margin: 2rem;
    color: white;
  }
`;
export default Loading;
