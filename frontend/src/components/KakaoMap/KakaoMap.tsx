import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useCurrentLocation from "../../hooks/useCurrentLocation";
import { useFormContext } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { jibunAddrState, roadAddrState } from "../../recoil/atoms/errand";

declare global {
  interface Window {
    kakao: any;
  }
}

function KakaoMap() {
  const [map, setMap] = useState<any>();
  const [marker, setMarker] = useState<any>();
  const roadAddr = useRecoilValue(roadAddrState);
  const jibunAddr = useRecoilValue(jibunAddrState);
  const { setValue } = useFormContext();

  const KAKAO_API = process.env.REACT_APP_KAKAO_JAVASCRIPT_API_KEY;

  useEffect(() => {
    // 스크립트 로딩
    const script = document.createElement("script");
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API}&autoload=false&libraries=services`;
    document.head.appendChild(script);

    // 카카오맵 불러오기
    script.onload = () => {
      console.log("스크립트 로딩 시작");
      window.kakao.maps.load(() => {
        console.log("스크립트 로딩 완료");
        const mapContainer = document.getElementById("map"); // 지도 표시할 div
        const mapOption = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도 중심 좌표
          level: 3,
        };

        // 지도를 생성합니다
        const kakaoMap = new window.kakao.maps.Map(mapContainer, mapOption);
        setMap(kakaoMap);
        console.log("지도 생성", map);

        // 지도를 클릭한 위치에 표출할 마커입니다
        const kakaoMarker = new window.kakao.maps.Marker();
        setMarker(kakaoMarker);
        console.log("마커 설정", marker);
      });
    };
  }, []);

  // map 상태가 설정된 후 현재 위치 가져오기
  useCurrentLocation(map, marker);

  useEffect(() => {
    // 도로명 주소가 있으면 도로명 주소를 사용하고, 없으면 지번 주소를 사용
    const address = roadAddr || jibunAddr;
    // 주소 데이터 업뎃
    setValue("roadAddress", address);
    setValue("jibunAddress", jibunAddr);
  }, [roadAddr, jibunAddr]);

  return (
    <div>
      <Map id="map" />
      {/* <div onClick={}>현재 위치</div> */}
    </div>
  );
}

const Map = styled.div`
  width: 100%;
  height: 300px;
`;

export default KakaoMap;
