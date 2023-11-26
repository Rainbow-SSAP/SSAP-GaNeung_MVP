import React, { ReactNode, useEffect } from "react";
import styled from "styled-components";
import { Header, HeaderProps } from "./@common/Header/Header";
import Footer from "./@common/Footer/Footer";

export interface TemplateProps {
  headerProps?: HeaderProps;
  children?: ReactNode;
}

function Template({ children, headerProps }: TemplateProps) {
  useEffect(() => {
    function setVHVariable() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }

    setVHVariable();
    window.addEventListener("resize", setVHVariable);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", setVHVariable);
    };
  }, []);

  return (
    <Layout>
      <Header {...headerProps} />
      <Container>{children}</Container>
      <Footer />
    </Layout>
  );
}

const Layout = styled.div`
  position: relative;
  width: 100%;
  min-width: 320px;
  max-height: calc(var(--vh, 1vh) * 100);
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: white;

  /* 웹 환경에서의 스타일 */
  @media (min-width: 321px) {
    max-width: 768px;
    min-width: 320px;
    margin: 0 auto;
  }
`;
const Container = styled.section`
  width: 100%;
  height: 100%;
  min-height: calc((var(--vh, 1vh) * 100));
`;

export default Template;
