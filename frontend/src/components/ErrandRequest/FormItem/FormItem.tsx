import React from "react";
import styled from "styled-components";
import { Label } from "../../@common/Label/Label";
import { Input, InputProps } from "../../@common/Input/Input";
import { Button, ButtonProps } from "../../@common/Button/Button";
import { ButtonGroup, ButtonGroupProps } from "../../ButtonGroup/ButtonGroup";
import { Checkbox, CheckboxProps } from "../../@common/Checkbox/Checkbox";

interface FormItemProps {
  /*
   * 라벨을 설정합니다.
   */
  label?: string;
  /*
   * 인풋을 설정합니다. color와 align을 제외한 나머지는 InputProps를 사용합니다.
   */
  inputProps?: Omit<InputProps, "color" | "align">;
  /*
   * 버튼을 설정합니다.
   */
  buttonProps?: ButtonProps;
  /*
   * 선택형 버튼을 설정합니다.
   */
  buttonGroupProps?: ButtonGroupProps;
  /*
   * 체크 박스를 설정합니다.
   */
  checkboxProps?: CheckboxProps;
  /*
   * FormItem이 랜더링할 타입을 설정합니다.
   */
  type?: "input" | "button" | "buttonGroup" | "checkbox";
}

export const FormItem = (formItenmProps: FormItemProps) => {
  const {
    label,
    inputProps,
    buttonProps,
    buttonGroupProps,
    checkboxProps,
    type,
    ...props
  } = formItenmProps;

  return (
    <FormItemWapper data-type={type} {...props}>
      {label && <Label text={label} />}
      {type === "input" && <Input {...inputProps} />}
      {type === "button" && buttonProps && <Button {...buttonProps} />}
      {type === "buttonGroup" && <ButtonGroup {...buttonGroupProps} />}
      {type === "checkbox" && <Checkbox {...checkboxProps} />}
    </FormItemWapper>
  );
};

const FormItemWapper = styled.div`
  /* 특정 컴포넌트 타입을 직접 타겟하여 조건부 스타일을 적용 */
  &[data-type="checkbox"] {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row-reverse;

    > *:first-child {
      margin-left: 10px;
      margin-bottom: 0;
      color: ${({ theme }) => theme.color.grey600};
    }
  }
`;
