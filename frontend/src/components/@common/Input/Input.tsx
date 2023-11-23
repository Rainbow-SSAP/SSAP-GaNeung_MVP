import React, { forwardRef } from "react";
import styled, { css } from "styled-components";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
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

  value?: string;

  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ color = "white", align = "left", isValid = true, ...restProps }, ref) => {
    return (
      <InputWrapper
        ref={ref}
        color={color}
        align={align}
        isValid={isValid}
        {...restProps}
      />
    );
  },
);

Input.displayName = "Input";

const InputWrapper = styled.input<InputProps>`
  width: 100%;
  padding: 10px;
  font-size: 13px;
  border: 1px solid ${({ theme }) => theme.color.grey50};
  border-radius: 4px;
  color: ${({ theme }) => theme.color.primary};
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
