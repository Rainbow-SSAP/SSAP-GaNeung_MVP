import { APP_URL, accessToken } from "./OAuth";
import api from "./api";

// 카테고리 리스트 가져오기
export const getCategories = async () => {
  try {
    const response = await api.get(`${APP_URL}/api/categories`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        // "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    // 오류 처리
    console.error(error);
    throw error;
  }
};

// 하위 카테고리 리스트 가져오기
export const getSubCategories = async (categoryId) => {
  try {
    const response = await api.get(`${APP_URL}/api/categories/${categoryId}/items`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        // "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    // 오류 처리
    console.error(error);
    throw error;
  }
};
