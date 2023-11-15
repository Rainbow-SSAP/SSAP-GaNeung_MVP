import React from "react";
import styled, { css } from "styled-components";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; text: string }[];
  /*
   * 배경색을 설정합니다.
   */
  // color?: "white" | "grey";
  /*
   * 우측에 들어갈 아이콘을 설정합니다.
   */
  // icon?: string;
}

export const Select = ({ options, ...restProps }: SelectProps) => {
  return (
    <SelectWrapper {...restProps}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </SelectWrapper>
  );
};

const SelectWrapper = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 13px;
  border: 1px solid ${({ theme }) => theme.color.grey50};
  border-radius: 4px;
`;
