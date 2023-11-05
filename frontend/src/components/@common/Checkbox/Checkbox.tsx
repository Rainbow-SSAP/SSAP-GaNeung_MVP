import React, { ReactElement } from "react";
import styled from "styled-components";

interface BaseCheckboxProps {
  /*
   * 체크박스 확장 유무를 설정합니다.
   */
  isCompound?: boolean;
}

interface CompoundProps extends BaseCheckboxProps {
  /*
   * 체크박스 라벨 확장 버전
   */
  isCompound: true;
  child: ReactElement;
}

interface SimpleProps extends BaseCheckboxProps {
  /*
   * 기본 체크박스 버전
   */
  isCompound?: false;
}

type CheckboxProps = CompoundProps | SimpleProps;

export const Checkbox = (props: CheckboxProps) => {
  if (props.isCompound) {
    return (
      <InputWarpper>
        <input type="checkbox" />
        {props.child}
      </InputWarpper>
    );
  }
  return <input type="checkbox" />;
};

const InputWarpper = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: ${({ theme }) => theme.color.grey600};

  && input {
    border-color: ${({ theme }) => theme.color.grey50};
  }
  && span {
    margin-left: 8px;
  }
`;
