import React from "react";
import { FormItem } from "../../@common/FormItem/FormItem";
import { Controller, useFormContext } from "react-hook-form";
import KakaoMap from "../../KakaoMap/KakaoMap";
import ErrorMessage from "../../@common/Error/ErrorMessage";

export default function Location() {
  const { control } = useFormContext();

  return (
    <div>
      <Controller
        name="roadAddress"
        control={control}
        rules={{
          required: "장소는 필수항목입니다.", // 필수 입력
          minLength: {
            value: 1,
            message: "장소를 입력해주세요.", // 최소 길이
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <div>
            <FormItem
              label="장소"
              type="input"
              inputProps={{
                ...field,
                id: "roadAddress",
                placeholder: "장소를 입력해 주세요.",
              }}
            />
            <ErrorMessage message={error?.message} />
          </div>
        )}
      />

      <KakaoMap />

      <Controller
        name="detailedAddress"
        control={control}
        rules={{
          minLength: {
            value: 1,
            message: "상세 위치를 입력해 주세요.", // 최소 길이
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <div>
            <FormItem
              label="상세 위치"
              type="input"
              inputProps={{
                ...field,
                id: "detailedAddress",
                placeholder: "상세 위치를 입력해 주세요.",
              }}
            />
            <ErrorMessage message={error?.message} />
          </div>
        )}
      />
    </div>
  );
}
