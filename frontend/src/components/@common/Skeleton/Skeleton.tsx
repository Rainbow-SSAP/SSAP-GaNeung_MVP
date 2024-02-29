import { number } from "prop-types";
import styled, { keyframes } from "styled-components";

const opacity = keyframes`
  0% {
    opacity: 0.3;
  }  
  50% {
    opacity: 0.1;
  }  
  100% {
    opacity: 0.3;
  }
`;

const Skeleton = styled.div<{ width: number; height: number }>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  background-color: grey;
  border-radius: 10px;
  animation: ${opacity} 2s ease-in-out 0.5s infinite;
`;

export default Skeleton;
