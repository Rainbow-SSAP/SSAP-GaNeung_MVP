import React from "react";
import styled, { css } from "styled-components";

interface InputProps {
  /*
   * 힌트 설정합니다.
   */
  placeholder?: string;
  /*
   * 배경색을 설정합니다.
   */
  color?: "white" | "grey";
  /*
   * 내용 정렬을 설정합니다.
   */
  align?: "left" | "right";
  /*
   * 우측에 들어갈 아이콘을 설정합니다.
   */
  icon?: string;
  /*
   * input 이벤트.
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (inputProps: InputProps) => {
  const { icon, ...props } = inputProps;

  return (
    <InputOuter>
      <InputWrapper {...props} />
      {icon && (
        <IconWrapper>
          <img src={icon} alt="icon" />
        </IconWrapper>
      )}
    </InputOuter>
  );
};

const InputOuter = styled.div`
  position: relative;
  width: 100%;
`;

const InputWrapper = styled.input<InputProps>`
  width: 100%;
  padding: 10px;
  padding-right: ${({ icon }) => (icon ? "40px" : "10px")};
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
`;

const IconWrapper = styled.div`
  width: 10px;
  height: 10px;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`;
