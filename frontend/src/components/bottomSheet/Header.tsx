import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <HeaderWrapper>
      <HandleBar />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled(motion.div)`
  height: 48px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  position: relative;
  padding-top: 16px;
  padding-bottom: 4px;
`;

const HandleBar = styled(motion.div)`
  width: 32px;
  height: 4px;
  border-radius: 2px;
  background-color: #d0d0d0;
  margin: auto;
`;

export default Header;
