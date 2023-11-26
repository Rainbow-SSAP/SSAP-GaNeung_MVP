import { accessToken } from "./OAuth";
import api from "./api";

// 카테고리 리스트 가져오기
export const getCategories = async () => {
  try {
    const response = await api.get(`/api/categories`, {
      headers: {
        // Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log("category.ts 안 response.data:", response.data);
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
    const response = await api.get(`/api/categories/${categoryId}/items`, {
      headers: {
        // Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    // 오류 처리
    console.error(error);
    throw error;
  }
};
