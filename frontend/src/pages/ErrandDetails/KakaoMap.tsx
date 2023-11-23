import React, { useEffect } from "react";
declare global {
  interface Window {
    kakao: any;
  }
}
const { kakao } = window;

const KakaoMap = () => {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), //지도 중심 좌표
      level: 3, //지도의 레벨(확대, 축소 정도)
    };
    const map = new kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
  }, []);
  return (
    <div
      id="map"
      style={{
        width: "27.5rem",
        height: "15rem",
      }}
    ></div>
  );
};

export default KakaoMap;
