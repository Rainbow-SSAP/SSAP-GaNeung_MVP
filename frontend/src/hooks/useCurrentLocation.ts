import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { jibunAddrState, roadAddrState } from "../recoil/atoms/errandState";

function useCurrentLocation(map: any, marker: any) {
  const setRoadAddr = useSetRecoilState(roadAddrState);
  const setJibunAddr = useSetRecoilState(jibunAddrState);

  // 현재 위치
  const getCurrentPosition = () => {
    console.log("위치 얻어오기 시작");
    // GeoLocation을 이용해서 접속 위치를 얻어오기
    navigator.geolocation.getCurrentPosition(
      (pos) => updatePosition(pos.coords.latitude, pos.coords.longitude),
      () => alert("위치 정보를 가져오는데 실패했습니다."),
      { enableHighAccuracy: true, maximumAge: 30000, timeout: 27000 },
    );
  };

  // 주소 변환 및 위치 업데이트 로직
  const updatePosition = (lat: any, lng: any) => {
    // 현재 위치(위도, 경도) 가져오기
    const currentPos = new window.kakao.maps.LatLng(lat, lng);
    console.log("현재 위치(위도, 경도) 가져오기", lat, lng);
    // 중심 좌표를 지정한 좌표로 이동
    map.panTo(currentPos);
    console.log("중심 좌표를 지정한 좌표로 이동", currentPos);

    marker.setMap(null); // 기존 마커 제거
    console.log("기존 마커 제거");
    marker.setPosition(currentPos); // 클릭한 위치에 마커 표시
    console.log("클릭한 위치에 마커 표시", currentPos);
    marker.setMap(map);

    // window.kakao.maps.services 객체가 로드된 후에 Geocoder 객체를 생성
    if (window.kakao.maps.services) {
      // 주소-좌표 변환 객체를 생성
      const geocoder = new window.kakao.maps.services.Geocoder();
      console.log("주소-좌표 변환 객체를 생성");
      geocoder.coord2Address(lng, lat, (result: any, status: any) => {
        console.log("주소-좌표 변환", lng, lat);
        if (status === window.kakao.maps.services.Status.OK) {
          // 도로명 주소
          const roadAddress = result[0].road_address
            ? result[0].road_address.address_name
            : "";
          // 지번 주소
          const jibunAddress = result[0].address
            ? result[0].address.address_name
            : "";

          console.log("도로명 주소: ", roadAddress);
          console.log("지번 주소: ", jibunAddress);

          setRoadAddr(roadAddress);
          setJibunAddr(jibunAddress);
        }
      });
    } else {
      console.log("Kakao maps API 아직 로드되지 않았습니다.");
    }
  };

  // 마커 위치 변경 이벤트 핸들러
  const onMapClick = (mouseEvent: any) => {
    console.log("마커 위치 변경 이벤트 핸들러");
    const clickedPosition = mouseEvent.latLng;
    updatePosition(clickedPosition.getLat(), clickedPosition.getLng());
  };

  useEffect(() => {
    // map 상태가 설정된 후 현재 위치 가져오기
    if (map) {
      getCurrentPosition(); // 현재 위치 가져오기

      console.log("map 상태가 설정된 후 현재 위치 가져오기");
      // 지도 클릭 이벤트 리스너 추가
      window.kakao.maps.event.addListener(map, "click", onMapClick);
    }

    // 지도 클릭 이벤트 리스너 제거
    return () => {
      if (map) {
        window.kakao.maps.event.removeListener(map, "click", onMapClick);
      }
    };
  }, [map, marker]);
}

export default useCurrentLocation;
