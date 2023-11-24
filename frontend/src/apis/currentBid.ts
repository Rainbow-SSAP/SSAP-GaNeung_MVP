import axios from "axios";
import { accessToken } from "./OAuth";

export const GetCurrentBid = async (
  taskId: string,
  userEmail: string,
  auctionId: string,
  bidAmount: number,
  termsAgreed: boolean,
) => {
  try {
    const response = await axios.post(
      "/api/bids/place",
      {
        taskId,
        userEmail,
        auctionId,
        bidAmount,
        termsAgreed,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    if (response.status === 200) {
      console.log("response", response);
      return response.data;
    } else {
      throw new Error(`API 요청이 실패했습니다. 상태 코드: ${response.status}`);
    }
  } catch (error) {
    console.error("API 호출 중 오류 발생:", error);
    throw error;
  }
};
