import React from "react";
import { FormItem } from "../../@common/FormItem/FormItem";
import { useFormContext } from "react-hook-form";
import KakaoMap from "../../KakaoMap/KakaoMap";

export default function Location() {
  const {
    register,
    formState: { errors, touchedFields },
  } = useFormContext();

  return (
    <div>
      <FormItem
        label="장소"
        type="input"
        inputProps={{
          ...register("roadAddress"),
          name: "roadAddress",
          id: "roadAddress",
          placeholder: "장소를 입력해 주세요.",
        }}
      />
      <KakaoMap />
      <FormItem
        label="상세 위치"
        type="input"
        inputProps={{
          ...register("detailedAddress"),
          name: "detailedAddress",
          id: "detailedAddress",
          placeholder: "상세 위치를 입력해 주세요.",
        }}
      />
    </div>
  );
}
