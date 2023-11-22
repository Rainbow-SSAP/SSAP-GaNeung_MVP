import React, { useEffect } from "react";
import { FormItem } from "../../@common/FormItem/FormItem";
import { buttonOtions } from "../../../constants/errand";
import { Controller, useFormContext } from "react-hook-form";
import DateInput from "../DateInput/DateInput";
import { useRecoilState } from "recoil";
import { errandTimeState } from "../../../recoil/atoms/errand";
import ErrorMessage from "../../@common/Error/ErrorMessage";
import { format } from "date-fns";

export default function Timing() {
  const {
    setValue,
    control,
    watch,
    formState: { errors, touchedFields },
  } = useFormContext();
  const immediateExecutionStatus = watch("immediateExecutionStatus");
  const [{ startDate, endDate }, setErrandTime] =
    useRecoilState(errandTimeState);

  useEffect(() => {
    if (immediateExecutionStatus) {
      // 날짜 타입 변환
      const formattedStartDate = format(startDate, "yyyy-MM-dd HH:mm");
      const formattedEndDate = format(endDate, "yyyy-MM-dd HH:mm");

      setValue("startTime", formattedStartDate);
      setValue("endTime", formattedEndDate);
    }
  }, [startDate, endDate, immediateExecutionStatus]);

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
          <DateInput
            startDate={startDate}
            endDate={endDate}
            setStartDate={(date) =>
              setErrandTime((prevState) => ({ ...prevState, startDate: date }))
            }
            setEndDate={(date) =>
              setErrandTime((prevState) => ({ ...prevState, endDate: date }))
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
