import React from "react";
import { FormItem } from "../../FormItem/FormItem";
import { buttonOtions } from "../../../constants/errand";
import { Controller, useFormContext } from "react-hook-form";

export default function Timing() {
  const {
    register,
    control,
    watch,
    formState: { errors, touchedFields },
  } = useFormContext();
  const immediateExecutionStatus = watch("immediateExecutionStatus");
  return (
    <div>
      <Controller
        name="immediateExecutionStatus"
        control={control}
        render={({ field }) => (
          <FormItem
            label="일시"
            type="buttonGroup"
            buttonGroupProps={{
              options: buttonOtions.timing,
              selectedOption: field.value ? "일정 예약" : "지금 즉시",
              onSelectOption: (selectedLabel) => {
                field.onChange(selectedLabel === "일정 예약");
              },
            }}
          />
        )}
      />
      {immediateExecutionStatus && (
        <>
          <FormItem
            type="input"
            inputProps={{
              ...register("startTime"),
              type: "datetime-loca",
              placeholder: "YYYY-MM-DDTHH:mm",
              isValid: !errors.startTime && touchedFields.startTime,
            }}
          />
          <FormItem
            type="input"
            inputProps={{
              ...register("endTime"),
              type: "datetime-loca",
              placeholder: "YYYY-MM-DDTHH:mm",
              isValid: !errors.endTime && touchedFields.endTime,
            }}
          />
        </>
      )}
    </div>
  );
}
