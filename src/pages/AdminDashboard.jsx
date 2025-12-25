import { useState, useEffect } from "react";
import api from "../api/axios";

export default function AdminDashboard() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const res = await api.get("/admin/transactions");
      setTransactions(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAction = async (id, action) => {
    try {
      await api.post(`/admin/transactions/${id}/${action}`);
      fetchTransactions();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-8">
    <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          <th className="border p-2">ID</th>
          <th className="border p-2">User</th>
          <th className="border p-2">Type</th>
          <th className="border p-2">Amount ($)</th>
          <th className="border p-2">Date</th>
          <th className="border p-2">Status</th>
          <th className="border p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(tx => (
          <tr key={tx.id}>
            <td className="border p-2">{tx.id}</td>
            <td className="border p-2">{tx.user.username}</td>
            <td className="border p-2">{tx.type}</td>
            <td className="border p-2">{tx.amount}</td>
            <td className="border p-2">{tx.date}</td>
            <td className="border p-2">{tx.status}</td>
            <td className="border p-2 space-x-2">
              <button
                className="bg-green-600 text-white p-1 rounded hover:bg-green-700"
                onClick={() => handleAction(tx.id, "approve")}
              >
                Approve
              </button>
              <button
                className="bg-red-600 text-white p-1 rounded hover:bg-red-700"
                onClick={() => handleAction(tx.id, "reject")}
              >
                Reject
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}
