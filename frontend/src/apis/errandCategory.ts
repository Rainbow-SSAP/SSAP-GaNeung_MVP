import api from "./api";
import { accessToken } from "./OAuth";

const fetchErrandCategory = async (categoryId, location: string) => {
  try {
    const response = await api.get(
      `/api/errands/category/${categoryId}?address=${location}&page=0&size=100`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },

      },
    );
    console.log("fetchErrandCategory", response.data);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("카테고리 데이터를 가져오는데 실패함.");
    }
  } catch (error) {
    console.log(error);
  }
};

export { fetchErrandCategory };
