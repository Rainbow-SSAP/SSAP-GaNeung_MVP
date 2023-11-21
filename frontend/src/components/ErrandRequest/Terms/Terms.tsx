import React from "react";
import styled from "styled-components";
import { FormItem } from "../../@common/FormItem/FormItem";
import { useFormContext } from "react-hook-form";

function Terms() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <TermsWrapper>
        <li>
          경매 진행 시간 도중 의뢰인은 경매 종료를 할 수 있으며, 경매 종료 시
          입찰자가 있을 경우 최저 가격을 제시한 헬퍼가 낙찰됩니다.
        </li>
        <li>
          물품 지불방식은 의뢰인과 헬퍼가 협의하에 결정하고, SSAP은 이에 대해
          관여하지 않습니다.
        </li>
        <li>
          심부름 진행 중일 때 심부름 취소 시 낙찰된 헬퍼에게 보증금이 지급되므로
          신중하게 경매를 등록 해주세요.
        </li>
        <li>하루에 2번 당일 취소할 경우 하루 서비스 사용이 정지 됩니다.</li>
      </TermsWrapper>
      <FormItem
        label="위의 내용을 확인하였으며, 모두 동의 합니다."
        type="checkbox"
        checkboxProps={{
          ...register("termsAgreed", { required: "약관에 동의해야 합니다." }),
        }}
      />
    </div>
  );
}

const TermsWrapper = styled.ul`
  margin-left: 10px;
  > li {
    font-size: 13px;
    color: ${({ theme }) => theme.color.grey600};
    line-height: 2rem;
    list-style: disc;
    margin-bottom: 4px;
  }
`;

export default Terms;
