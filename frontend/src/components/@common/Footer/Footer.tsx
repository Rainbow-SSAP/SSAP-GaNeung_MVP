import React from "react";
import styled from "styled-components";
import logo from "../../../assets/images/ssap_logo_B.svg";

function Footer() {
  return (
    <FooterContainer>
      <FootTop>
        <li>이용약관</li>
        <li>개인정보처리방침</li>
        <li>고객센터</li>
        <li>카카오 문의</li>
      </FootTop>
      <FootBottom>
        <div>
          <p>Contact ssap.rainbow@gmail.com</p>
          <p>Copyright SSAP. All rights reserved</p>
        </div>
        <Logo>
          <img src={logo} alt="SSAP 로고" />
        </Logo>
      </FootBottom>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  padding: 4rem 3vw 4rem;
  flex-flow: column;
  grid-gap: 20px;
  border-top: 1px solid ${({ theme }) => theme.color.grey50};
  margin-top: 2rem;
  p {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.color.grey600};
  }
`;

const FootTop = styled.ul`
  display: flex;
  grid-gap: 20px;
  li {
    font-size: 1.4rem;
  }
`;

const FootBottom = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: flex-end;
  p {
    font-size: 1.2rem;
    margin-bottom: 6px;
    color: ${({ theme }) => theme.color.grey600};
  }
`;
const Logo = styled.div`
  width: 80px;
  img {
    width: 100%;
  }
`;

export default Footer;
