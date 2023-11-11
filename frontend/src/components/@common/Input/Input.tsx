import React from "react";
import styled, { css } from "styled-components";

export interface InputProps {
  /*
   * 배경색을 설정합니다.
   */
  color?: "white" | "grey";
  /*
   * 내용 정렬을 설정합니다.
   */
  align?: "left" | "right";
  /*
   * 유효성 확인 여부를 설정합니다.
   */
  isValid?: boolean;
}

export const Input = (inputProps: InputProps) => {
  const {
    color = "white",
    align = "left",
    isValid = true,
    ...props
  } = inputProps;

  return (
    <InputWrapper color={color} align={align} isValid={isValid} {...props} />
  );
};

const InputWrapper = styled.input<InputProps>`
  width: 100%;
  padding: 10px;
  font-size: 13px;
  border: 1px solid ${({ theme }) => theme.color.grey50};
  border-radius: 4px;
  color: ${({ theme }) => theme.color.grey600};
  background-color: ${({ theme, color }) =>
    color === "white" ? theme.color.white : theme.color.grey50};
  text-align: ${({ align }) => align || "left"};

  &:focus {
    border-color: ${({ theme }) => theme.color.primary};
  }

  ${({ isValid }) =>
    !isValid &&
    css`
      border-color: ${({ theme }) => theme.color.warning};
    `};
`;
