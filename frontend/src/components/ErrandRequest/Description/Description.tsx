import React from "react";
import { FormItem } from "../../@common/FormItem/FormItem";
import { Controller, useFormContext } from "react-hook-form";
import ErrorMessage from "../../@common/Error/ErrorMessage";

export default function Description() {
  const { control } = useFormContext();
  return (
    <div>
      <Controller
        name="description"
        control={control}
        rules={{
          minLength: {
            value: 1,
            message: "요청 내용을 입력해 주세요.", // 최소 길이
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <div>
            <FormItem
              label="요청 내용"
              type="textarea"
              textareaProps={{
                ...field,
                id: "description",
                placeholder: "요청 내용을 입력해 주세요.",
              }}
            />
            <ErrorMessage message={error?.message} />
          </div>
        )}
      />
    </div>
  );
}
