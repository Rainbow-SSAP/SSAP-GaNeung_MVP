import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FormItem } from "../../@common/FormItem/FormItem";
import { buttonOtions } from "../../../constants/errand";

export default function PreferredGender() {
  const { control } = useFormContext();
  return (
    <div>
      <Controller
        name="preferredGender"
        control={control}
        render={({ field }) => (
          <FormItem
            label="선호 성별 선택"
            type="buttonGroup"
            buttonGroupProps={{
              options: buttonOtions.preferredGender,
              selectedOption: field.value,
              onSelectOption: field.onChange,
            }}
          />
        )}
      />
    </div>
  );
}
