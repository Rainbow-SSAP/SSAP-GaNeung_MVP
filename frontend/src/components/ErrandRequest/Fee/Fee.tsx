import React from "react";
import { FormItem } from "../../@common/FormItem/FormItem";
import { useFormContext } from "react-hook-form";
import ErrorMessage from "../../@common/Error/ErrorMessage";

export default function Fee() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <FormItem
        label="심부름비"
        type="input"
        inputProps={{
          ...register("fee", { required: "심부름비는 필수항목입니다." }),
          type: "number",
          color: "grey",
          align: "right",
          name: "fee",
          id: "fee",
          placeholder: "0",
          isValid: !errors.fee,
        }}
      />
      {errors.fee && typeof errors.fee.message === "string" && (
        <ErrorMessage message={errors.fee.message} />
      )}
    </div>
  );
}
