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
import getKakaoLocation from "../../apis/kakaoLoaction";

declare global {
  interface Window {
    kakao: any;
  }
}

function HomePage() {
  const [authInfo, setAuthInfo] = useRecoilState(authInfoState);
  const [loading, setLoading] = useRecoilState(loadingState);
  const navigate = useNavigate();
  setLoading(false);

  useLockBodyScroll(loading);

  const fetchLocation = async () => {
    if (!authInfo.address) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(async (position) => {
        const x = position.coords.longitude; // 경도
        const y = position.coords.latitude; // 위도

        if (x && y) {
          const data = await getKakaoLocation(x, y);
          const address_name = data.documents[1].address_name;
          const region_3depth_name = data.documents[1].region_3depth_name;
          console.log("현재 위치 정보: ", address_name);

          setAuthInfo({
            ...authInfo,
            address: address_name,
            shortAddress: region_3depth_name,
          });
        }
      });
    }
  };

  useEffect(() => {
    fetchLocation();
  }, []);

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
