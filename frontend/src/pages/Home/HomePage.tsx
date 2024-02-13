import React, { useEffect } from "react";
import Main from "../../components/Main/Main";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/@common/Button/Button";
import Template from "../../components/Template";
import { useRecoilState } from "recoil";
import { loadingState } from "../../recoil/atoms/settingsState";
import Loading from "../../components/Loading/Loding";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";
import { authInfoState } from "../../recoil/atoms/userInfo";

function HomePage() {
  const [authInfo, setAuthInfo] = useRecoilState(authInfoState);
  const [loading, setLoading] = useRecoilState(loadingState);
  const navigate = useNavigate();
  setLoading(false);

  useLockBodyScroll(loading);

  useEffect(() => {
    // 사용자의 위치 정보가 없을 경우
    if (!authInfo.address) {
      navigate("/location-consent"); // 위치 정보 동의 페이지로 리디렉션
    }
  }, [authInfo.address, navigate]);

  // 요청서 작성하기로 이동
  const handleRequestClick = () => {
    navigate("/errand/request");
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Template headerProps={{ type: "location" }}>
          <Main />
          <Button
            fixed
            text="✋ 요청하기"
            size="medium"
            onClick={handleRequestClick}
          />
        </Template>
      )}
    </>
  );
}

export default HomePage;
