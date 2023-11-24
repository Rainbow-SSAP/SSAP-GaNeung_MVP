import React from "react";
import Main from "../../components/Main/Main";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/@common/Button/Button";
import Template from "../../components/Template";

function HomePage() {
  const navigate = useNavigate();

  // 요청서 작성하기로 이동
  const handleRequestClick = () => {
    navigate("/errand/request");
  };

  return (
    <Template headerProps={{ type: "logo" }}>
      <HomeWrapper>
        <Main />
        <Button
          fixed
          text="✋ 요청하기"
          size="medium"
          onClick={handleRequestClick}
        />
      </HomeWrapper>
    </Template>
  );
}
const HomeWrapper = styled.div`
  width: 100%;
`;

export default HomePage;
