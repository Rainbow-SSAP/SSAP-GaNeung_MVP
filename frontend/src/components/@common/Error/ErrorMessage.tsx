import React from "react";
import styled from "styled-components";

interface ErrorProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorProps) {
  return message ? <ErrorText>{message}</ErrorText> : null;
}

const ErrorText = styled.span`
  color: ${({ theme }) => theme.color.warning};
  font-size: 12px;
  margin-top: 5px;
  display: block; // 또는 필요에 따라 다른 레이아웃 속성을 적용
`;
