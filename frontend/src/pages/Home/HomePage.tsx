import React, { useEffect, useState } from "react";
import Main from "../../components/Main/Main";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/@common/Button/Button";
import Template from "../../components/Template";
import { useRecoilState, useSetRecoilState } from "recoil";
import { userLocationState } from "../../recoil/atoms/LocationState";
import { loadingState } from "../../recoil/atoms/settingsState";
import Loading from "../../components/Loading/Loding";

declare global {
  interface Window {
    kakao: any;
  }
}

function HomePage() {
  // const [currentLocation, setCurrentLocation] = useState(null);
  const [userLocation, setUserLocation] = useRecoilState(userLocationState);
  const [loading, setLoading] = useRecoilState(loadingState);
  const navigate = useNavigate();

  useEffect(() => {
    // GeoLocation을 이용해서 접속 위치를 얻어옵니다
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude; // 위도
      const lon = position.coords.longitude; // 경도
      console.log("위도, 경도값: ", lat, lon);

      if (window.kakao.maps.services) {
        // 주소-좌표 변환 객체를 생성
        const geocoder = new window.kakao.maps.services.Geocoder();
        console.log("주소-좌표 변환 객체를 생성");
        geocoder.coord2Address(lon, lat, (result: any, status: any) => {
          console.log("주소-좌표 변환", lon, lat);
          if (status === window.kakao.maps.services.Status.OK) {
            // 지번 주소
            const jibunAddress = result[0].address
              ? result[0].address.address_name
              : "";

            console.log("지번 주소: ", jibunAddress);

            // setUserLocation({ address: jibunAddress });
            setUserLocation(jibunAddress);
            setLoading(false);
          }
        });
      }
    });
  }, []);

  // 요청서 작성하기로 이동
  const handleRequestClick = () => {
    navigate("/errand/request");
  };

  return (
    <Template headerProps={{ type: "logo" }}>
      {loading && <Loading />}
      <Main />
      <Button
        fixed
        text="✋ 요청하기"
        size="medium"
        onClick={handleRequestClick}
      />
    </Template>
  );
}

export default HomePage;
