import { useState, useEffect } from "react";

const mockTransactions = [
  { id: 1, type: "Deposit", amount: 500, date: "2025-12-20" },
  { id: 2, type: "Withdrawal", amount: 200, date: "2025-12-21" },
  { id: 3, type: "Deposit", amount: 300, date: "2025-12-22" },
];

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    setTransactions(mockTransactions);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Transactions</h1>
      <table border="1" cellPadding="10" style={{ width: "100%", marginTop: "20px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Amount ($)</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.id}>
              <td>{tx.id}</td>
              <td>{tx.type}</td>
              <td>{tx.amount}</td>
              <td>{tx.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
