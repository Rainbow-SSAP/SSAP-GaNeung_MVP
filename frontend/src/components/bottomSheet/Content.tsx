import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Button } from "../@common/Button/Button";
import ToastContext from "../../context/toast/ToastContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Input } from "../@common/Input/Input";
import { headerImage } from "../../assets/headerImages";
import { errorToast, successToast } from "../../constants/toast";
import Terms from "../ErrandRequest/Terms/Terms";
import { FormItem } from "../@common/FormItem/FormItem";
import { FormProvider, useForm } from "react-hook-form";
import { GetCurrentBid } from "../../apis/currentBid";

const Content = ({
  data,
  setIsOpen,
  // currentBid,
  // setCurrentBid,
  accessToken,
  taskId,
  userEmail,
  auctionId,
  // bidAmount,
  termsAgreed,
  // setBidAmount,
  auctionData,
}) => {
  const [errandFee, setErrandFee] = useState(""); //심부름비 상태
  const methods = useForm();

  const [currentBid, setCurrentBid] = useState(auctionData.amount); //현재 입찰가
  const [bidAmount, setBidAmount] = useState(""); //유저가 입력한 값

  const currentDate = new Date();
  const auctionEndTimeString = data.auctionEndTime;
  const auctionEndTime = new Date(auctionEndTimeString);

  const errandFeeLocale = Number(data.fee).toLocaleString();
  const currentBidAmount = Number(auctionData.amount).toLocaleString();

  const isAuctionClosed = currentDate > auctionEndTime; //경매 종료 여부 확인

  // 버튼 텍스트 설정
  const buttonText = isAuctionClosed
    ? "이미 경매가 마감되었습니다"
    : "💓 입찰하기";

  console.log("bidAmount", bidAmount);
  console.log("currentBid", currentBid);

  const validateInputChange = (event) => {
    const value = event.target.value;

    if (/^\d*$/.test(value)) {
      setBidAmount(value);
    }
  };

  const handleBidClick = async () => {
    const userBid = parseInt(bidAmount, 10);

    try {
      setCurrentBid(parseInt(bidAmount, 10));

      const result = await GetCurrentBid(
        taskId,
        userEmail,
        auctionId,
        userBid,
        true,
      );
      console.log("입찰 결과:", result);
    } catch (error) {
      console.log("입찰 실패:", error);
    }

    if (userBid < currentBid) {
      setCurrentBid(userBid);
      successToast("입찰에 성공하였습니다.");
      setIsOpen(false);
    } else {
      errorToast("현재 입찰가보다 낮은 금액을 입력하세요.");
      setIsOpen(true);
    }

    console.log("userBid", userBid);
    console.log("currentBid", currentBid);
    // setIsOpen(false);
  };

  const handleToast = () => {
    console.log("클릭!");
    // Number(data.fee) >
    successToast("입찰에 성공하였습니다.");
  };

  return (
    <FormProvider {...methods}>
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
            <AuctionFee>{errandFeeLocale}원</AuctionFee>
          </AuctionStart>
          <CurrentBidContainer>
            <Bid>현재 입찰가</Bid>
            <CurrentBid>{currentBidAmount}원</CurrentBid>
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
        </BidPriceContainer>
        <Terms />
        <Button
          size="large"
          color="primary"
          text={buttonText}
          onClick={handleBidClick}
          disabled={isAuctionClosed}
        />
      </ContentWrapper>
    </FormProvider>
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
  width: 100%;
  padding: 10px;
  font-size: 13px;
  border: 1px solid ${({ theme }) => theme.color.grey50};
  border-radius: 4px;
  color: ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.color.grey50};
`;
