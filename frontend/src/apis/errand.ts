import { ErrandFormData } from "../types/errand";
import { accessToken } from "./OAuth";
import api from "./api";

// 심부름 요청 데이터 보내기
export const ErrandRequestPost = async (
  errandFormData: ErrandFormData,
  userEmail: string,
) => {
  console.log(userEmail);
  const formData = {
    ...errandFormData,
    email: userEmail, // 이메일 추가
  };
  console.log("ErrandRequestPost", formData);
  try {
    const response = await api.post(`/api/request`, formData, {
      headers: {
        // Authorization: `Bearer ${accessToken}`, // TODO 로컬 테스트용
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    // 오류 처리
    console.error(error);
    throw error;
  }
};

// 심부름 내역 가져오기
export const getErrands = async () => {
  try {
    const response = await api.get(`/api/errands?page=0&size=100`, {
      headers: {
        // Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    // 오류 처리
    console.error(error);
    throw error;
  }
};
