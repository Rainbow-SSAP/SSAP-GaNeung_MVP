import React from "react";
import { Button } from "../Button/Button";
import styled from "styled-components";

export interface ButtonGroupProps {
  /*
   * 옵션(button 내용)을 설정합니다.
   */
  options?: string[];
  /*
   * 선택된 버튼 설정합니다.
   */
  selectedOption?: string;
  /*
   * 버튼을 설정합니다. text를 제외한 나머지는 ButtonProps 사용합니다.
   */
  onSelectOption?: (option: string) => void;
}

export const ButtonGroup = (buttonGroupProps: ButtonGroupProps) => {
  const {
    options = [],
    selectedOption,
    onSelectOption,
    ...props
  } = buttonGroupProps;

  console.log("selectedOption", selectedOption);
  const handleClick =
    (option: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (onSelectOption) {
        onSelectOption(option);
        // console.log(onSelectOption);
      }
    };

  return (
    <ButtonGroupWrapper>
      {options.map((option) => (
        <Button
          key={option}
          text={option}
          selected={selectedOption === option}
          onClick={handleClick(option)}
          color="secondary"
          size="small"
          {...props}
        />
      ))}
    </ButtonGroupWrapper>
  );
};

const ButtonGroupWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  div {
    flex: 1;
    margin-bottom: 10px;
  }
  button:nth-last-child(-n + 2) {
    flex-basis: 100%;
  }
  button {
    width: 100%;
  }
`;
