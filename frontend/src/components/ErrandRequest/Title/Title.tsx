import React from "react";
import { FormItem } from "../../@common/FormItem/FormItem";
import { useFormContext } from "react-hook-form";
import ErrorMessage from "../../@common/Error/ErrorMessage";

export default function Title() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <FormItem
        label="제목"
        type="input"
        inputProps={{
          ...register("title", { required: "제목은 필수항목입니다." }),
          name: "title",
          id: "title",
          placeholder: "제목을 입력해 주세요.",
          isValid: !errors.title,
        }}
      />
      {errors.title && typeof errors.title.message === "string" && (
        <ErrorMessage message={errors.title.message} />
      )}
    </div>
  );
}
