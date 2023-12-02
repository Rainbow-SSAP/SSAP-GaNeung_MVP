import React from "react";
import styled from "styled-components";
import { Label } from "../Label/Label";
import { Input, InputProps } from "../Input/Input";
import { Button, ButtonProps } from "../Button/Button";
import { ButtonGroup, ButtonGroupProps } from "../ButtonGroup/ButtonGroup";
import { Checkbox, CheckboxProps } from "../Checkbox/Checkbox";
import { Select, SelectProps } from "../Select/Select";
import { Textarea, TextareaProps } from "../Textarea/Textarea";

interface FormItemProps {
  /*
   * 라벨을 설정합니다.
   */
  label?: string;
  /*
   * 인풋을 설정합니다. color와 align을 제외한 나머지는 InputProps를 사용합니다.
   */
  inputProps?: InputProps;
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
   * 셀렉트 박스를 설정합니다.
   */
  selectProps?: SelectProps;
  /*
   * 텍스트 박스를 설정합니다.
   */
  textareaProps?: TextareaProps;
  /*
   * FormItem이 랜더링할 타입을 설정합니다.
   */
  type?:
    | "input"
    | "button"
    | "buttonGroup"
    | "checkbox"
    | "select"
    | "textarea";
}

export const FormItem = (formItenmProps: FormItemProps) => {
  const {
    label,
    inputProps,
    buttonProps,
    buttonGroupProps,
    checkboxProps,
    selectProps,
    textareaProps,
    type,
    ...props
  } = formItenmProps;

  // 아이디 설정을 위한 변수
  const id = inputProps?.name || textareaProps?.name || checkboxProps?.name;

  return (
    <FormItemWapper data-type={type} {...props}>
      {label && type !== "checkbox" && <Label htmlFor={id} text={label} />}
      {type === "input" && <Input id={id} {...inputProps} />}
      {type === "textarea" && <Textarea id={id} {...textareaProps} />}
      {type === "button" && buttonProps && <Button {...buttonProps} />}
      {type === "buttonGroup" && <ButtonGroup {...buttonGroupProps} />}
      {type === "checkbox" && (
        <label>
          <Checkbox {...checkboxProps} />
          {label}
        </label>
      )}
      {type === "select" && selectProps && <Select {...selectProps} />}
    </FormItemWapper>
  );
};

const FormItemWapper = styled.div`
  /* 특정 컴포넌트 타입을 직접 타겟하여 조건부 스타일을 적용 */
  &[data-type="checkbox"] {
    > input {
      margin-right: 10px;
    }
    > * {
      display: flex;
      font-size: 14px;
      margin-top: 20px;
      color: ${({ theme }) => theme.color.primary};
    }
  }
`;
