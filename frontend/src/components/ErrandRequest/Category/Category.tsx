import React, { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FormItem } from "../../@common/FormItem/FormItem";
import { useRecoilState } from "recoil";
import { selectedCategoryIdState } from "../../../recoil/atoms/errandState";
import { useQuery } from "react-query";
import { getCategories, getSubCategories } from "../../../apis/category";
import ErrorMessage from "../../@common/Error/ErrorMessage";
import styled from "styled-components";

export default function Category() {
  const { control, watch, setValue } = useFormContext();
  const [selectedCategoryId, setSelectedCategoryId] = useRecoilState(
    selectedCategoryIdState,
  );

  // 카테고리 데이터 가져오기
  const { data: categories = [] } = useQuery("categories", getCategories);

  // 하위 카테고리 데이터 불러오기
  const { data: subCategories = [] } = useQuery(
    ["subCategories", selectedCategoryId], // 쿼리 키에 selectedCategory 포함
    () => getSubCategories(selectedCategoryId),
    {
      enabled: !!selectedCategoryId, // 선택된 카테고리가 있을 때만 쿼리 실행
      onSuccess: (subCategories) => {
        if (subCategories.length > 0) {
          setValue("detailedItem", subCategories[0].categoryName);
        }
      },
    },
  );

  // 상위 카테고리 필드의 값 감시
  const selectedCategory = watch("category");
  console.log("선택된 카테고리:", selectedCategory);

  const selectedSubCategory = watch("detailedItem");
  console.log("선택된 하위 카테고리:", selectedSubCategory);

  // 선택된 카테고리의 ID를 찾아서 저장
  useEffect(() => {
    const foundCategory = categories.find(
      (category) => category.categoryName === selectedCategory,
    );
    setSelectedCategoryId(foundCategory?.id);
  }, [selectedCategory, categories, setSelectedCategoryId]);

  // 카테고리 데이터가 로드되었을 때 초기값 설정
  useEffect(() => {
    if (categories.length > 0) {
      setValue("category", categories[0].categoryName);
    }
  }, [categories, setValue]);

  return (
    <CategoryContainer>
      <Controller
        name="category"
        control={control}
        rules={{ required: "심부름 항목을 선택해주세요." }}
        render={({ field, fieldState: { error } }) => (
          <div>
            <FormItem
              label="항목 선택"
              type="select"
              selectProps={{
                ...field,
                options: categories,
                id: "id",
                text: "categoryName",
              }}
            />
            <ErrorMessage message={error?.message} />
          </div>
        )}
      />
      <Controller
        name="detailedItem"
        control={control}
        rules={{ required: "하위 심부름 항목을 선택해주세요." }}
        render={({ field, fieldState: { error } }) => (
          <div>
            <FormItem
              label="하위 카테고리"
              type="select"
              selectProps={{
                ...field,
                options: subCategories,
                id: "id",
                text: "categoryName",
              }}
            />
            <ErrorMessage message={error?.message} />
          </div>
        )}
      />
    </CategoryContainer>
  );
}

const CategoryContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
`;
