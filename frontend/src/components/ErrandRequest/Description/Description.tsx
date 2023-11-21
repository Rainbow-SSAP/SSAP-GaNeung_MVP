import React from "react";
import { FormItem } from "../../@common/FormItem/FormItem";
import { useFormContext } from "react-hook-form";

export default function Description() {
  const { register } = useFormContext();
  return (
    <div>
      <FormItem
        label="요청 내용"
        type="textarea"
        textareaProps={{
          ...register("description"),
          name: "description",
          id: "description",
          placeholder: "요청 내용을 입력해 주세요.",
        }}
      />
    </div>
  );
}
