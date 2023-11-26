import React from "react";
import { FormItem } from "../../@common/FormItem/FormItem";
import { Controller, useFormContext } from "react-hook-form";
import ErrorMessage from "../../@common/Error/ErrorMessage";
import styled from "styled-components";

export default function Fee() {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        name="fee"
        control={control}
        rules={{
          required: "심부름비는 필수항목입니다.", // 필수 입력
          // valueAsNumber: true, // 입력값을 숫자로 처리
          validate: {
            isNumber: (value) =>
              (!isNaN(value) && /^\d+$/.test(value)) || "숫자만 입력해주세요.", // 숫자만 입력 확인
            positive: (value) => value > 1000 || "최소 금액은 1000원 입니다.", // 양수 검사
          },
        }}
        render={({
          field: { onChange, value, ...field },
          fieldState: { error },
        }) => (
          <InputBox>
            <FormItem
              label="심부름비"
              type="input"
              inputProps={{
                ...field,
                type: "number",
                value: value,
                onChange: (e) => onChange(e.target.value), // 입력 시 숫자를 문자열로 변환
                color: "grey",
                align: "right",
                id: "fee",
                placeholder: "최소 금액: 1000원",
              }}
            />
            <ErrorMessage message={error?.message} />
          </InputBox>
        )}
      />
    </>
  );
}

const InputBox = styled.div`
  /* 크롬, 사파리, 엣지 */
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* 파이어폭스 */
  input[type="number"] {
    -moz-appearance: textfield;
  }

  /* IE11 */
  input[type="number"]::-ms-clear,
  input[type="number"]::-ms-reveal {
    display: none;
  }
`;
