import axios from "axios";

// Axios 인스턴스 생성
const api = axios.create({
  baseURL: "https://your-api-url.com",
});

// Request 인터셉터 추가
api.interceptors.request.use(
  async (config) => {
    // 엑세스 토큰을 세션 스토리지에서 가져오기
    const accessToken = sessionStorage.getItem("accessToken");

    // 토큰이 있는 경우 헤더에 추가
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
