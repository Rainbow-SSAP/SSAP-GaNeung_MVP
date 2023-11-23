import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Button } from "../@common/Button/Button";
import ToastContext from "../../context/toast/ToastContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Input } from "../@common/Input/Input";
import { headerImage } from "../../assets/headerImages";
import { successToast } from "../../constants/toast";

const Content = ({ setIsOpen }) => {
  const [bidAmount, setBidAmount] = useState(""); //입찰가격 입력 상태
  const [errandFee, setErrandFee] = useState(""); //심부름비 상태

  const notify = () => toast("입찰에 성공하였습니다");
  //TODO 입찰에 실패했을 경우 추후에 추가

  const validateInputChange = (event) => {
    const value = event.target.value;

    if (/^\d*$/.test(value)) {
      setBidAmount(value);
    }
  };

  const bidBtnClick = () => {
    notify();
    setIsOpen(false);
  };

  const handleToast = () => {
    console.log("클릭!");
    successToast("입찰에 성공하였습니다.");
  };

  //TODO 현재입찰가보다 높은 가격으로 설정하고 버튼 클릭 시 오류 발생 추후 심부름 요청서와 상태공유로 추가

  return (
    <ContentWrapper>
      <Title>심부름 입찰하기</Title>
      <CloseButton
        src={headerImage.close}
        alt="x버튼"
        onClick={() => setIsOpen(false)}
      ></CloseButton>
      <AuctionContainer>
        <AuctionStart>
          <Bid>경매 시작가</Bid>
          <AuctionFee>5,000원</AuctionFee>
        </AuctionStart>
        <CurrentBidContainer>
          <Bid>현재 입찰가</Bid>
          <CurrentBid>4,000원</CurrentBid>
        </CurrentBidContainer>
      </AuctionContainer>

      <BidPriceContainer>
        <Bid>입찰가격</Bid>
        {/* TODO placeholder 오른족으로 이동 */}
        <BidInput
          value={bidAmount}
          onChange={validateInputChange}
          placeholder="0원"
        />
        {/* TODO 약관동의 문구 및 체크박스 컴포넌트 가져다 쓰기 */}
      </BidPriceContainer>

      <Button
        size="large"
        color="primary"
        text="💓 입찰하기"
        // onClick={bidBtnClick}
        onClick={handleToast}
      />
    </ContentWrapper>
  );
};

export default Content;

const ContentWrapper = styled.div`
  padding: 2rem;
  position: relative;
  flex-shrink: 0;
`;

const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  margin-bottom: 1em;
`;

const CloseButton = styled.img`
  position: absolute;
  top: 10px;
  right: 20px;
  border: none;
  background: none;
  font-size: 1.5em;
`;

const AuctionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border-top: 1px solid #f4f4f4;
  border-bottom: 1px solid #f4f4f4;
`;

const AuctionStart = styled.div`
  display: flex;
  width: 15.7rem;
  padding: 2rem 0rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  flex-shrink: 0;
  border-right: 1px solid #f4f4f4;
`;

const Bid = styled.h1`
  color: #262626;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.2rem;
`;

const AuctionFee = styled.h1`
  color: #007aff;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.8rem;
`;

const CurrentBidContainer = styled.div`
  display: flex;
  width: 17.7rem;
  padding: 2rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  flex-shrink: 0;
`;

const CurrentBid = styled.h1`
  color: #f10000;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.8rem;
`;

const BidPriceContainer = styled.div`
  display: flex;
  padding: 2rem 0rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

const BidInput = styled.input`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  align-self: stretch;
  border-radius: 0.5rem;
  background: #f4f4f4;
`;
