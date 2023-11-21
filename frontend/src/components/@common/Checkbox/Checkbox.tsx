import React, { forwardRef } from "react";
import styled from "styled-components";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    /*
     * 유효성 확인 여부를 설정합니다.
     */
    isValid?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    return <CheckboxWrapper type="checkbox" ref={ref} {...props} />;
  },
);

Checkbox.displayName = "Checkbox";

const CheckboxWrapper = styled.input`
  margin-right: 6px;
  width: 16px;
  height: 16px;
`;
