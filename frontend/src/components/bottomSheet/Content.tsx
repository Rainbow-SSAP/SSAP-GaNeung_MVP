import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Button } from "../@common/Button/Button";
import ToastContext from "../../context/toast/ToastContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Input } from "../@common/Input/Input";

const Content = ({ setIsOpen }) => {
  const [bidAmount, setBidAmount] = useState("");
  // const [toast, setToast] = useState(false);
  const notify = () => toast("입찰에 성공하였습니다");
  //TODO 입찰에 실패했을 경우 추후에 추가

  const validateInputChange = (event) => {
    const value = event.target.value;

    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setBidAmount(value);
    }
  };

  const bidBtnClick = () => {
    notify();
    setIsOpen(false);
  };

  //TODO 현재입찰가보다 높은 가격으로 설정하고 버튼 클릭 시 오류 발생 추후 심부름 요청서와 상태공유로 추가

  return (
    <>
      <ContentWrapper>
        <Title>심부름 입찰하기</Title>
        <CloseButton onClick={() => setIsOpen(false)}>&times;</CloseButton>

        <OptionsWrapper>
          <Option>
            <OptionTitle>경매 시작가</OptionTitle>
            <OptionValue>요청서와 상태 공유 TODO</OptionValue>
          </Option>
          <Option>
            <OptionTitle>현재 응찰가</OptionTitle>
            <OptionValue highlight>요청서와 상태 공유 TODO</OptionValue>
          </Option>
        </OptionsWrapper>
        <BidInputWrapper>
          <InputTitle>입찰가격</InputTitle>
          <Input
            color="white"
            align="left"
            value={bidAmount}
            onChange={validateInputChange}
          />
        </BidInputWrapper>
        <Info>
          <li>헬퍼가 하루에 2번 당일 취소할 경우 하루 서비스 정지 됩니다.</li>
          <li>TODO: 이런 info도 따로 빼서 관리하면 좋을 것 같습니다 </li>
        </Info>
        <Button
          size="large"
          color="primary"
          text="💓 입찰하기"
          onClick={bidBtnClick}
        />
      </ContentWrapper>
    </>
  );
};

export default Content;

const ContentWrapper = styled.div`
  padding: 20px;
  position: relative;
`;

const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  margin-bottom: 1em;
`;

const InputTitle = styled.h2`
  font-size: 1.5rem;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
  border: none;
  background: none;
  font-size: 1.5em;
`;

const OptionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
`;

const Option = styled.div`
  text-align: center;
`;

const OptionTitle = styled.div`
  margin-bottom: 0.5em;
  font-weight: bold;
`;

// prop을 DOM의 속성으로 전달하려고 하기 때문에 경고를 발생시킴. 이를 해결하기 위한 코드는 아래.
// 이 함수는 prop 이름을 받아서 highlight인 경우 false를 반환하고, 그 외의 경우 true를 반환합니다.
// 이렇게 하면 highlight는 스타일에만 사용되고, DOM에는 전달되지 않습니다.
const OptionValue = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "highlight",
})<{ highlight?: boolean }>`
  color: ${(props) => (props.highlight ? "red" : "blue")};
  font-weight: bold;
`;

const BidInputWrapper = styled.div`
  margin-bottom: 1em;
`;

const BidInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1em;
`;

const Info = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1em;
  li {
    margin-bottom: 0.5em;
    font-size: 0.9em;
  }
`;
