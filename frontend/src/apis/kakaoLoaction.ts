import axios from "axios";

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
