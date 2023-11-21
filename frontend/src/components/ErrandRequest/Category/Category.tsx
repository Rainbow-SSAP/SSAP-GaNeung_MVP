import React, { useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FormItem } from "../../@common/FormItem/FormItem";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { detailedItemState } from "../../../recoil/atoms/errand";
import { categories } from "../../../constants/errand";

export default function Category() {
  const { control, watch } = useFormContext();

  // 하위 카테고리 필드 값 감시
  const setDetailedItems = useSetRecoilState(detailedItemState);
  const detailedItems = useRecoilValue(detailedItemState);
  console.log("Detailed Items in FormItem:", detailedItems);

  // 상위 카테고리 필드의 값 감시
  const selectedCategory = watch("category");
  console.log("Found selectedCategory:", selectedCategory);

  // 카테고리 select
  useEffect(() => {
    const category = categories.find((c) => c.value === selectedCategory);
    console.log("Found Category:", category);
    // category가 존재하지 않을 경우 빈 배열([])을 할당
    setDetailedItems(category?.detailedItems || []);
    console.log("Updated detailedItems:", category?.detailedItems || []);
  }, [selectedCategory, setDetailedItems]);

  return (
    <div>
      <Controller
        name="category"
        control={control}
        render={({ field }) => (
          <FormItem
            label="항목 선택"
            type="select"
            selectProps={{
              ...field,
              options: categories,
            }}
          />
        )}
      />
      <Controller
        name="detailedItem"
        control={control}
        render={({ field }) => (
          <FormItem
            label="하위 카테고리"
            type="select"
            selectProps={{
              ...field,
              options: detailedItems,
            }}
          />
        )}
      />
    </div>
  );
}
