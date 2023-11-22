import React from "react";
import styled from "styled-components";
import Home from "../../../assets/Home.png";
import History from "../../../assets/History.png";
import Chat from "../../../assets/Chat.png";
import MyProfile from "../../../assets/MyProfile.png";

const Footer = () => {
  return (
    <Layout>
      <InsideLayout>
        <CommonSection>
          <HomeImage />
          <CommonTitle>홈</CommonTitle>
        </CommonSection>
        <CommonSection>
          <HistoryImage />
          <CommonTitle>이용내역</CommonTitle>
        </CommonSection>
        <CommonSection>
          <ChatImage />
          <CommonTitle>채팅</CommonTitle>
        </CommonSection>
        <CommonSection>
          <MyprofileImage />
          <CommonTitle>내 정보</CommonTitle>
        </CommonSection>
      </InsideLayout>
    </Layout>
  );
};

export default Footer;

const Layout = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  height: 9.1rem;
  flex-shrink: 0;
  box-shadow: 0rem 0.4rem 1.6rem 0rem rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 24px 24px;
`;

const InsideLayout = styled.div`
  display: flex;
  width: 31.4rem;
  height: 70%;
  justify-content: space-between;
  /* background-color: blue; */
  margin: 3rem;
`;

const CommonSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 100%;
  gap: 0.6rem;
  /* background-color: red; */
`;

const HomeImage = styled.div`
  background: url(${Home});
  display: flex;
  padding: 0rem 0.4rem;
  justify-content: center;
  align-items: center;
  gap: 0.1rem;
  height: 2rem;
  width: 2rem;
`;

const CommonTitle = styled.h1`
  color: #262626;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.6rem;
`;

const HistoryImage = styled.div`
  background: url(${History});
  display: flex;
  padding: 0rem 0.4rem;
  justify-content: center;
  align-items: center;
  gap: 0.1rem;
  height: 2rem;
  width: 1.7rem;
`;

const ChatImage = styled.div`
  background: url(${Chat});
  display: flex;
  padding: 0rem 0.4rem;
  justify-content: center;
  align-items: center;
  gap: 0.1rem;
  height: 2rem;
  width: 2.5rem;
`;

const MyprofileImage = styled.div`
  background: url(${MyProfile});
  display: flex;
  padding: 0rem 0.4rem;
  justify-content: center;
  align-items: center;
  gap: 0.1rem;
  height: 2rem;
  width: 2rem;
`;
