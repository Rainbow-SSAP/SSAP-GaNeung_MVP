import api from "./api";

export const getAuctionDetail = async (auctionId, accessToken) => {
  try {
    const response = await api.get(`/api/bids/${auctionId}/latest-bid`, {
      headers: {
        // Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
