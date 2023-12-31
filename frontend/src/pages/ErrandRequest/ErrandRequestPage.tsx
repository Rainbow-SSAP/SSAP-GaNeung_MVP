import React from "react";
import styled from "styled-components";
import { FormProvider, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { Button } from "../../components/@common/Button/Button";
import { ErrandRequest } from "../../components/ErrandRequest/ErrandRequest";
import { ErrandRequestPost } from "../../apis/errand";
import { ErrandFormData } from "../../types/errand";
import { buttonOtions } from "../../constants/errand";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { uploadImgState } from "../../recoil/atoms/errandState";
import Template from "../../components/Template";
import { authInfoState } from "../../recoil/atoms/userInfo";
import userProfile from "../../mocks/userData.json"; // 로컬 TEST용
import { ToastContainer } from "react-toastify";
import { errorToast } from "../../constants/toast";

const ErrandRequestPage = () => {
  // const userProfile = useRecoilValue(authInfoState);
  const [uploadImg, setUploadImg] = useRecoilState<File[]>(uploadImgState);
  const navigaet = useNavigate();
  const methods = useForm<ErrandFormData>({
    defaultValues: {
      // 기본값
      category: "",
      detailedItem: "",
      title: "",
      roadAddress: "",
      jibunAddress: "",
      detailedAddress: "",
      description: "",
      preferredGender: buttonOtions.preferredGender[0],
      immediateExecutionStatus: false,
      startTime: "",
      fee: "",
      auctionStatus: false,
      auctionStartTime: "",
      auctionEndTime: "",
      files: undefined,
      termsAgreed: false,
    },
  });

  const {
    register,
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = methods;

  const email = userProfile.userEmail;

  const mutation = useMutation((errandFormData: ErrandFormData) =>
    ErrandRequestPost(errandFormData, email),
  );

  const onSubmit = (data: ErrandFormData) => {
    // 폼 제출 시 실행될 로직
    console.log(data);
    if (!data.termsAgreed) {
      // 약관 동의가 체크되지 않았다면 경고창
      errorToast("약관에 동의해야 합니다.");
      return;
    }

    // 새로운 FormData 인스턴스 생성
    const formData = new FormData();

    // FileList에서 모든 파일을 FormData에 추가
    if (data.files && data.files.length > 0) {
      Array.from(data.files).forEach((file) => {
        formData.append("files", file);
      });
    }

    // formData.append("email", userEmail);

    mutation.mutate(data, {
      onSuccess: (response) => {
        console.log("Response:", response);
        // 성공 시 초기화
        reset();
        setUploadImg([]);

        // 상세페이지로 라우터
        const errandId = response.requestId;
        navigaet(`/errand/${errandId}`);
      },
      onError: (error) => {
        // 오류 처리
        console.error("요청서 전송 에러:", error);
      },
    });
  };

  return (
    <Template headerProps={{ title: "심부름 요청서" }}>
      <FormWapper id="errandRequestForm" onSubmit={handleSubmit(onSubmit)}>
        {/* useForm 훅에서 반환된 메서드를 자식 컴포넌트로 전달합니다 */}
        <FormProvider {...methods}>
          <ErrandRequest />
        </FormProvider>
      </FormWapper>
      <Button
        text="🚨 심부름 요청하기"
        type="submit"
        form="errandRequestForm"
        fixed
      />
      <ToastContainer
        position="bottom-right" // 알람 위치 지정
        autoClose={3000} // 자동 off 시간
        hideProgressBar={false} // 진행시간바 숨김
        closeOnClick // 클릭으로 알람 닫기
        rtl={false} // 알림 좌우 반전
        pauseOnFocusLoss // 화면을 벗어나면 알람 정지
        draggable // 드래그 가능
        pauseOnHover // 마우스를 올리면 알람 정지
        theme="light"
      />
    </Template>
  );
};

const FormWapper = styled.form`
  width: 100%;
  display: grid;
  grid-gap: 2rem;
  padding: 2rem 3vw;
`;

export default ErrandRequestPage;