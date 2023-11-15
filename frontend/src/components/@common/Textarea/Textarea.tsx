import React from "react";
import styled, { css } from "styled-components";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = ({ ...restProps }: TextareaProps) => {
  return <TextareaWrapper {...restProps} />;
};

const TextareaWrapper = styled.textarea`
  width: 100%;
  height: 28vh;
  padding: 10px;
  font-size: 13px;
  border: 1px solid ${({ theme }) => theme.color.grey50};
  border-radius: 4px;
`;
