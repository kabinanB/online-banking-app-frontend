// import api from "./axios";

// // Fetch user transactions
// export const getUserTransactions = async () => {
//   const response = await api.get("/transactions");
//   return response.data;
// };

// // Create a new transaction
// export const createTransaction = async (transaction) => {
//   const response = await api.post("/transactions", transaction);
//   return response.data;
// };


import api from "./axios";

/**
 * =========================
 * USER TRANSACTIONS
 * =========================
 */

// Get current user's transactions
// GET /transactions/me
export const getUserTransactions = async () => {
  const response = await api.get("/transactions/me");
  return response.data;
};

// Get a single transaction (own only)
// GET /transactions/{id}
export const getTransactionById = async (id) => {
  const response = await api.get(`/transactions/${id}`);
  return response.data;
};

// Create a new transaction
// POST /transactions
export const createTransaction = async (transaction) => {
  const response = await api.post("/transactions", transaction);
  return response.data;
};

/**
 * =========================
 * ADMIN TRANSACTIONS
 * =========================
 */

// Get all transactions (admin only)
// GET /admin/transactions
export const getAllTransactions = async () => {
  const response = await api.get("/admin/transactions");
  return response.data;
};

// Approve transaction
// PUT /admin/transactions/{id}/approve
export const approveTransaction = async (id) => {
  const response = await api.put(`/admin/transactions/${id}/approve`);
  return response.data;
};

// Reject transaction
// PUT /admin/transactions/{id}/reject
export const rejectTransaction = async (id) => {
  const response = await api.put(`/admin/transactions/${id}/reject`);
  return response.data;
};
