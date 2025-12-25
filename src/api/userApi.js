import api from "./axios";

// Get current logged-in user info
export const getCurrentUser = async () => {
  const response = await api.get("/users/me");
  return response.data;
};

// Update user profile
export const updateUserProfile = async (userData) => {
  const response = await api.put("/users/me", userData);
  return response.data;
};

// Change password
export const changePassword = async (oldPassword, newPassword) => {
  const response = await api.post("/users/me/password", { oldPassword, newPassword });
  return response.data;
};
