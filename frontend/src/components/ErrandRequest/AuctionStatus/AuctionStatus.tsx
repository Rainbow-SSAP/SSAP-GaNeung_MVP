import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FormItem } from "../../FormItem/FormItem";
import { buttonOtions } from "../../../constants/errand";
import ErrorMessage from "../../@common/Error/ErrorMessage";

export default function AuctionStatus() {
  const {
    register,
    control,
    watch,
    formState: { errors, touchedFields },
  } = useFormContext();
  const auctionStatus = watch("auctionStatus");
  return (
    <div>
      {" "}
      <Controller
        name="auctionStatus"
        control={control}
        render={({ field }) => (
          <FormItem
            label="경매 진행 시간"
            type="buttonGroup"
            buttonGroupProps={{
              options: buttonOtions.auctionStatus,
              selectedOption: field.value ? "직접 설정" : "없음",
              onSelectOption: (selectedLabel) => {
                field.onChange(selectedLabel === "직접 설정");
              },
            }}
          />
        )}
      />
      {auctionStatus && (
        <>
          <FormItem
            type="input"
            inputProps={{
              ...register("auctionStartTime", {
                required: "시작 시간을 입력해주세요.",
              }),
              type: "datetime-loca",
              placeholder: "YYYY-MM-DDTHH:mm",
              isValid:
                !errors.auctionStartTime && touchedFields.auctionStartTime,
            }}
          />
          {errors.auctionStartTime &&
            typeof errors.auctionStartTime.message === "string" && (
              <ErrorMessage message={errors.auctionStartTime.message} />
            )}
          <FormItem
            type="input"
            inputProps={{
              ...register("auctionEndTime", {
                required: "마감 시간을 입력해주세요.",
              }),
              type: "datetime-loca",
              placeholder: "YYYY-MM-DDTHH:mm",
              isValid: !errors.auctionEndTime && touchedFields.auctionEndTime,
            }}
          />
          {errors.auctionEndTime &&
            typeof errors.auctionEndTime.message === "string" && (
              <ErrorMessage message={errors.auctionEndTime.message} />
            )}
        </>
      )}
    </div>
  );
}
