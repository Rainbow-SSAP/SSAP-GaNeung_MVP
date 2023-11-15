import React from "react";
import styled from "styled-components";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "../../components/@common/Button/Button";
import { ErrandRequest } from "../../components/ErrandRequest/ErrandRequest";
import { ErrandFormData } from "../../types/errand";
import { buttonOtions, categories } from "../../constants/errand";

const ErrandRequestPage = () => {
  const methods = useForm<ErrandFormData>({
    defaultValues: {
      // 기본값
      category: categories[0].value,
      detailedItem: categories[0].detailedItems
        ? categories[0].detailedItems[0].value
        : "",
      preferredGender: buttonOtions.preferredGender[0],
      auctionStatus: buttonOtions.auctionStatus[0],
    },
  });

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = methods;

  const onSubmit = (data: ErrandFormData) => {
    // 폼 제출 시 실행될 로직
    console.log(data);
    
  };

  return (
    <div>
      <FormWapper onSubmit={methods.handleSubmit(onSubmit)}>
        {/* useForm 훅에서 반환된 메서드를 자식 컴포넌트로 전달합니다 */}
        <FormProvider {...methods}>
          <ErrandRequest />
          <Button text="🚨 심부름 요청하기" type="submit" />
        </FormProvider>
      </FormWapper>
    </div>
  );
};

const FormWapper = styled.form`
  display: grid;
  grid-gap: 20px;
`;

export default ErrandRequestPage;
