import React, { useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FormItem } from "../../@common/FormItem/FormItem";
import { buttonOtions } from "../../../constants/errand";
import ErrorMessage from "../../@common/Error/ErrorMessage";
import DateInput from "../DateInput/DateInput";
import { useRecoilState } from "recoil";
import { auctionTimeState } from "../../../recoil/atoms/errand";
import { format } from "date-fns";

export default function AuctionStatus() {
  const {
    setValue,
    control,
    watch,
    formState: { errors, touchedFields },
  } = useFormContext();
  const auctionStatus = watch("auctionStatus");
  const [{ startDate, endDate }, setAuctionTime] =
    useRecoilState(auctionTimeState);

  useEffect(() => {
    if (auctionStatus) {
      // 날짜 타입 변환
      const formattedStartDate = format(startDate, "yyyy-MM-dd HH:mm");
      const formattedEndDate = format(endDate, "yyyy-MM-dd HH:mm");

      setValue("auctionStartTime", formattedStartDate);
      setValue("auctionEndTime", formattedEndDate);
    }
  }, [startDate, endDate, auctionStatus]);

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
          <DateInput
            startDate={startDate}
            endDate={endDate}
            setStartDate={(date) =>
              setAuctionTime((prevState) => ({ ...prevState, startDate: date }))
            }
            setEndDate={(date) =>
              setAuctionTime((prevState) => ({ ...prevState, endDate: date }))
            }
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
