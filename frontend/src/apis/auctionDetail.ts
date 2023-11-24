import axios from "axios";
import React from "react";

export const getAuctionDetail = async (auctionId, accessToken) => {
  try {
    const response = await axios.get(`/api/bids/${auctionId}/latest-bid`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
