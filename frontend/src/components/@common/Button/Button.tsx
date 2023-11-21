import React from "react";
import styled, { css } from "styled-components";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // 기본 HTML button 속성 확장
  /*
   * 버튼 안에 내용을 설정합니다.
   */
  text: string;
  /*
   * 버튼 크기를 설정합니다.
   */
  size?: "small" | "medium" | "large";
  /*
   * 버튼 색상을 설정합니다.
   */
  color?: "primary" | "grey" | "secondary";
  /*
   * 버튼 고정 유무를 설정합니다.
   */
  fixed?: boolean;
  /*
   * 버튼 활성화 유무를 설정합니다.
   */
  disabled?: boolean;
  /*
   * 버튼 클릭 시 action(border 색상 활성화) 유무를 설정합니다.
   */
  selected?: boolean;
}

export const Button = (buttonProps: ButtonProps) => {
  const {
    text,
    size = "large",
    color = "primary",
    fixed,
    selected,
    onClick,
    disabled,
    ...restProps
  } = buttonProps;

  return (
    <ButtonOuter fixed={fixed}>
      <ButtonWrapper
        size={size}
        color={color}
        selected={selected}
        onClick={onClick}
        disabled={disabled}
        {...restProps}
      >
        {text}
      </ButtonWrapper>
    </ButtonOuter>
  );
};

const ButtonSizes = {
  small: css`
    padding: 8px 20px;
    font-size: 12px;
  `,
  medium: css`
    padding: 10px 24px;
    font-size: 14px;
  `,
  large: css`
    width: 100%;
    padding: 12px 34px;
    font-size: 18px;
  `,
};

const ButtonColors = {
  primary: css`
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.secondary};
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.color.secondary};
    color: ${({ theme }) => theme.color.primary};
  `,
  grey: css`
    background-color: ${({ theme }) => theme.color.grey50};
    color: ${({ theme }) => theme.color.primary};
  `,
};

const ButtonOuter = styled.div<Omit<ButtonProps, "text">>`
  width: 100%;
  ${({ fixed }) =>
    fixed &&
    css`
      position: fixed;
      /* top: 0;  */
      /* left: 0;     */
    `}
`;

const ButtonWrapper = styled.button<Omit<ButtonProps, "text">>`
  border: none;
  border-radius: 50px;
  font-weight: ${({ theme }) => theme.componentStyle.button.fontWeight};
  cursor: pointer;
  transition: all 0.3s;

  ${({ size }) => (size ? ButtonSizes[size] : ButtonSizes.medium)}
  ${({ color }) => ButtonColors[color || "primary"]}

  ${({ selected, theme }) =>
    selected !== undefined &&
    css`
      border: 1px solid ${selected ? theme.color.primary : theme.color.grey50};
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `}
`;
