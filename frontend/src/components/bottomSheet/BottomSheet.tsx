import React from "react";
import Header from "./Header";
import styled from "styled-components";
import { motion } from "framer-motion";
import { BOTTOM_SHEET_HEIGHT } from "../../constants/common";
import useBottomSheet from "../../hooks/bottomSheet/useBottomSheet";
import Content from "./Content";

const BottomSheet = ({ children, isOpen, setIsOpen }) => {
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
        <Content setIsOpen={setIsOpen} />
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
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  height: ${BOTTOM_SHEET_HEIGHT}px;

  margin: 0 auto;

  overflow: auto;
`;

const ContentWrapper = styled.div`
  height: 80vh;
  padding: 10px;
`;

export default BottomSheet;
