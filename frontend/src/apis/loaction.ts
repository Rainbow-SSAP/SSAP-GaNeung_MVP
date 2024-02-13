import axios from "axios";
import api from "./api";

// 카카오 위치
const getKakaoLocation = async (x, y) => {
  try {
    const response = await axios.get(
      `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${x}&y=${y}`,
      {
        headers: {
          Authorization: `KakaoAK ${process.env.REACT_APP_REST_API_KEY}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error("주소 정보를 가져오는 데 실패했습니다:", error);
    throw error;
  }
};

export default getKakaoLocation;

// 사용자 위치 주소 저장
export const fetchUserAddress = async ({ address, email }) => {
  console.table("fetchUserAddress: ", address);
  try {
    const response = await api.post(
      `/api/user-address`,
      { address, email },
      {
        headers: {
          // Authorization: `Bearer ${accessToken}`, // TODO 로컬 테스트용
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error("위치 정보 저장에 실패했습니다:", error);
    throw error;
  }
};
