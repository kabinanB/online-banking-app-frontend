import api from "./axios";

// Get current user account info
export const getAccountInfo = async () => {
  const response = await api.get("/account"); // backend endpoint
  return response.data;
};
