import { useState, useEffect } from "react";
import { getUserTransactions, createTransaction } from "../api/transactionApi";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [type, setType] = useState("Deposit");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const data = await getUserTransactions();
      setTransactions(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTransaction({ type, amount: parseFloat(amount) });
      setAmount("");
      fetchTransactions();
    } catch (err) {
      console.error(err);
    }
  };

  return (
  <div className="p-8">
    <h1 className="text-3xl font-bold mb-6">Transactions</h1>

    <form onSubmit={handleSubmit} className="mb-6 flex space-x-4 items-center">
      <select
        className="p-2 border rounded"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="Deposit">Deposit</option>
        <option value="Withdrawal">Withdrawal</option>
      </select>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="p-2 border rounded"
      />
      <button className="bg-green-600 text-white p-2 rounded hover:bg-green-700">Create</button>
    </form>

    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          <th className="border p-2">ID</th>
          <th className="border p-2">Type</th>
          <th className="border p-2">Amount ($)</th>
          <th className="border p-2">Date</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(tx => (
          <tr key={tx.id}>
            <td className="border p-2">{tx.id}</td>
            <td className="border p-2">{tx.type}</td>
            <td className="border p-2">{tx.amount}</td>
            <td className="border p-2">{tx.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}
