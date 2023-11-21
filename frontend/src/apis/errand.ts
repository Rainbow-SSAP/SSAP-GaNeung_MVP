import axios from "axios";
import { ErrandFormData } from "../types/errand";

const APP_URL = process.env.REACT_APP_JAVASCRIPT_API_KEY;
const accessToken = process.env.REACT_APP_ACCESSTOKEN;
const userEmail = "ssap.rainbow@gmail.com";

// 심부름 요청 데이터 보내기
export const ErrandRequestPost = async (errandFormData: ErrandFormData) => {
  const formData = {
    ...errandFormData,
    email: userEmail, // 이메일 추가
  };
  console.log("ErrandRequestPost", formData);
  try {
    const response = await axios.post(`${APP_URL}/api/request`, formData, {
      headers: {
        // Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        // TODO 이미지 파일 타입 보낼 때 수정 필요
        // 현재 api 호출시 multipart 타입을 지원하지 않음..
        // "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    // 오류 처리
    console.error(error);
    throw error;
  }
};
