import React from "react";
import styled from "styled-components";
import { headerImage } from "../../../../assets/headerImages";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isMenuOpenState } from "../../../../recoil/atoms/settingsState";

export interface GnbHeaderProps {
  title?: string;
  leftItems: "back" | "home";
}

export const GnbHeader = (gnbHeaderProps: GnbHeaderProps) => {
  const { title, leftItems } = gnbHeaderProps;
  const [isMenuOpen, setIsMenuOpen] = useRecoilState(isMenuOpenState);
  const navigate = useNavigate();

  // 뒤로가기 버튼 클릭 시
  const handleGoBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  // 홈 버튼 클릭 시
  const handleHome = () => {
    navigate("/home");
  };

  // 닫기 버튼 클릭 시
  const handleClose = () => {
    setIsMenuOpen(!isMenuOpen);
    // TODO bottomsheet일 경우 추가 필요
  };

  return (
    <GnbHeaderWrapper>
      {leftItems === "back" ? (
        <IconWrapper>
          <img
            src={headerImage.arrow_back}
            alt="뒤로가기 버튼"
            onClick={handleGoBack}
          />
        </IconWrapper>
      ) : (
        <IconWrapper>
          <img
            src={headerImage.home_line}
            alt="홈으로 이동 버튼"
            onClick={handleHome}
          />
        </IconWrapper>
      )}
      <Title>{title}</Title>
      <IconWrapper>
        <img src={headerImage.close} alt="닫기 버튼" onClick={handleClose} />
      </IconWrapper>
    </GnbHeaderWrapper>
  );
};

const GnbHeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 5vw;
  justify-content: space-between;
  align-items: center;
  /* border-bottom: 1px solid #e2e2e2; */
  /* box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25); */
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  cursor: pointer;

  img {
    width: 100%;
  }
`;

const Title = styled.h2`
  color: #262626;
  font-size: 1.8rem;
  font-weight: 600;
`;
