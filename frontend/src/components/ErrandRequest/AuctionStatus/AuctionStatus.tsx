import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FormItem } from "../../FormItem/FormItem";
import { buttonOtions } from "../../../constants/errand";

export default function AuctionStatus() {
  const { register, control, watch } = useFormContext();
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
              selectedOption: field.value,
              onSelectOption: field.onChange,
            }}
          />
        )}
      />
      {auctionStatus === "직접 설정" && (
        <>
          <FormItem
            type="input"
            inputProps={{
              ...register("auctionStartTime"),
              type: "datetime-loca",
              placeholder: "YYYY-MM-DDTHH:mm",
            }}
          />
          <FormItem
            type="input"
            inputProps={{
              ...register("auctionEndTime"),
              type: "datetime-loca",
              placeholder: "YYYY-MM-DDTHH:mm",
            }}
          />
        </>
      )}
    </div>
  );
}
