// TODO 심부름 진행 시간을 선택하기 때문에 예상 소요시간 제거 예정
import React from "react";
import { FormItem } from "../../@common/FormItem/FormItem";
import { useFormContext } from "react-hook-form";

export default function EstimatedTime() {
  const {
    register,
    watch,
    formState: { errors, touchedFields },
  } = useFormContext();

  return (
    <div>
      <FormItem
        label="예상 소요 시간"
        type="input"
        inputProps={{
          ...register("estimatedTime"),
          type: "input",
          placeholder: "HH:mm",
          isValid: !errors.estimatedTime && touchedFields.estimatedTime,
        }}
      />
    </div>
  );
}
