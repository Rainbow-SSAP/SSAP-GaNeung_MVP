import React from "react";
import styled from "styled-components";

export interface LabelProps {
  /*
   * 라벨에 들어갈 내용을 설정합니다.
   */
  text?: string;
  htmlFor?: string;
}

export const Label = (labelProps: LabelProps) => {
  const { text, ...props } = labelProps;

  return <LabelWrapper {...props}>{text}</LabelWrapper>;
};

const LabelWrapper = styled.label<LabelProps>`
  display: inline-block;
  font-size: 14px;
  margin-bottom: 10px;
`;
