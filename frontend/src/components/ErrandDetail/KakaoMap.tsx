import React, { useEffect } from "react";
import { CLIENT_ID } from "../../apis/OAuth";

declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMap = ({ data }) => {
  useEffect(() => {
    const container = document.getElementById("map");

    // 비동기로 카카오 지도 API 스크립트 로드
    const script = document.createElement("script");
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${CLIENT_ID}&autoload=true`;
    document.head.appendChild(script);

    script.onload = () => {
      console.log("카카오 맵 API 스크립트 로드 성공");

      window.kakao.maps.load(() => {
        console.log("카카오 맵 API 로드 성공");
        console.log("Kakao maps services 객체1:", window.kakao.maps.services);
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);
        console.log("Kakao maps services 객체2:", window.kakao.maps.services);

        // 주소-좌표 변환 객체를 생성
        if (window.kakao.maps.services) {
          console.log("Kakao maps services 객체 로드 성공");

          const geocoder = new window.kakao.maps.services.Geocoder();

          // 주소로 좌표를 검색
          geocoder.addressSearch(data.roadAddress, (result, status) => {
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x,
              );

              // 결과값으로 받은 위치를 마커로 표시
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });

              // 인포윈도우로 장소에 대한 설명을 표시
              const infowindow = new window.kakao.maps.InfoWindow({
                content:
                  '<div style="width:150px;text-align:center;padding:6px 0;">심부름 장소</div>',
              });
              infowindow.open(map, marker);

              // 지도의 중심을 결과값으로 받은 위치로 이동
              map.setCenter(coords);
            }
          });
        } else {
          console.log("Kakao maps services 객체가 아직 로드되지 않았습니다.");
        }
      });
    };

    script.onerror = () => {
      console.error("카카오 맵 API 스크립트 로드 실패");
    };

    // TODO: 지도 width 변경
  }, []);

  return (
    <div
      id="map"
      style={{
        width: "32rem",
        height: "15rem",
      }}
    ></div>
  );
};

export default KakaoMap;
