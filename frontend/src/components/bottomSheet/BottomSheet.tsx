import React from "react";
import Header from "./Header";
import styled from "styled-components";
import { motion } from "framer-motion";
import { BOTTOM_SHEET_HEIGHT } from "../../constants/common";
import useBottomSheet from "../../hooks/bottomSheet/useBottomSheet";
import Content from "./Content";

const BottomSheet = ({
  data,
  children,
  isOpen,
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
  const { onDragEnd, controls } = useBottomSheet(isOpen, setIsOpen);
  return (
    <Wrapper
      drag="y" // y축으로 드래그
      onDragEnd={onDragEnd}
      initial="hidden"
      animate={controls}
      transition={{
        type: "spring",
        damping: 40,
        stiffness: 400,
      }}
      variants={{
        visible: { y: 0 },
        hidden: { y: "100%" },
      }}
      dragConstraints={{ top: 0 }} // 상단으로 너무 올라가지 않게 처리
      dragElastic={0.2}
    >
      <Header />
      <ContentWrapper>
        <Content
          data={data}
          setIsOpen={setIsOpen}
          // currentBid={currentBid}
          // setCurrentBid={setCurrentBid}
          accessToken={accessToken}
          taskId={taskId}
          userEmail={userEmail}
          auctionId={auctionId}
          // bidAmount={bidAmount}
          termsAgreed={termsAgreed}
          // setBidAmount={setBidAmount}
          auctionData={auctionData}
        />
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  flex-direction: column;
  position: fixed;
  z-index: 10;
  top: 20vh;
  left: 0;
  right: 0;
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
  background-color: white;
  box-shadow: 0rem 0rem 1rem rgba(0, 0, 0, 0.6);
  height: ${BOTTOM_SHEET_HEIGHT}px / 10;

  margin: 0 auto;

  overflow: auto;
`;

const ContentWrapper = styled.div`
  /* width: 37.5rem; */
  height: 55rem;
  flex-shrink: 0;
  border-radius: 2rem;
  background: #fff;
  /* box-shadow: 0px -0.4rem 1rem 0rem rgba(0, 0, 0, 0.1); TODO*/
`;

export default BottomSheet;
