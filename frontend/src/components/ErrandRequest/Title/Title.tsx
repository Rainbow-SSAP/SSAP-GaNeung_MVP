import React from "react";
import { FormItem } from "../../@common/FormItem/FormItem";
import { Controller, useFormContext } from "react-hook-form";
import ErrorMessage from "../../@common/Error/ErrorMessage";

export default function Title() {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        name="title"
        control={control}
        rules={{
          required: "제목은 필수항목입니다.", // 필수 입력
          minLength: {
            value: 5,
            message: "제목은 최소 5자 이상이어야 합니다.", // 최소 길이
          },
          maxLength: {
            value: 100,
            message: "제목은 최대 100자 이하이어야 합니다.", // 최대 길이
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <div>
            <FormItem
              label="제목"
              type="input"
              inputProps={{
                ...field,
                id: "title",
                placeholder: "제목을 입력해 주세요.",
              }}
            />
            <ErrorMessage message={error?.message} />
          </div>
        )}
      />
    </>
  );
}
