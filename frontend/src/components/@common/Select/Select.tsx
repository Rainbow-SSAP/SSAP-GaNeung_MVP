import React from "react";
import styled, { css } from "styled-components";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Record<string, any>[];
  id?: string; // 추가 프로퍼티 받아 필드명 지정
  text?: string; // 추가 프로퍼티 받아 필드명 지정
}

export const Select = ({ options, id, text, ...restProps }: SelectProps) => {
  return (
    <SelectWrapper {...restProps}>
      {options.map((option) => (
        <option key={option[id]} value={option[text]}>
          {option[text]}
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
