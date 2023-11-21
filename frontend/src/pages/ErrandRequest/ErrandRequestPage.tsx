import React from "react";
import styled from "styled-components";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "../../components/@common/Button/Button";
import { ErrandRequest } from "../../components/ErrandRequest/ErrandRequest";
import { ErrandRequestPost } from "../../apis/errand";
import { ErrandFormData } from "../../types/errand";
import { buttonOtions, categories } from "../../constants/errand";
import { useMutation } from "react-query";

const ErrandRequestPage = () => {
  const methods = useForm<ErrandFormData>({
    defaultValues: {
      // 기본값
      category: categories[0].value,
      detailedItem: categories[0].detailedItems
        ? categories[0].detailedItems[0].value
        : "",
      preferredGender: buttonOtions.preferredGender[0],
      immediateExecutionStatus: false,
      auctionStatus: false,
      fileData: undefined,
    },
  });

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = methods;

  const mutation = useMutation(ErrandRequestPost);

  const onSubmit = (data: ErrandFormData) => {
    // 폼 제출 시 실행될 로직
    console.log(data);

    // 새로운 FormData 인스턴스 생성
    const formData = new FormData();

    // FileList에서 모든 파일을 FormData에 추가
    if (data.fileData && data.fileData.length > 0) {
      Array.from(data.fileData).forEach((file) => {
        formData.append("files", file);
      });
    }
    mutation.mutate(data, {
      onSuccess: (response) => {
        console.log("Response:", response);
        // 성공 처리
      },
      onError: (error) => {
        // 오류 처리
        console.error("요청서 전송 에러:", error);
      },
    });
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
