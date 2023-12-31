import api from "./api";

const getErrandDetails = async (taskId, accessToken) => {
  const response = await api.get(`/api/errands/${taskId}`, {
    headers: {
      // Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  console.log("response.data:", response.data);
  return response.data;
};

export { getErrandDetails };
