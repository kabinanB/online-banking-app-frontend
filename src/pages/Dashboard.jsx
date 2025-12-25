import { useState, useEffect } from "react";
import { getAccountInfo } from "../api/accountApi";
import { getCurrentUser } from "../api/userApi";

export default function Dashboard() {
  const [account, setAccount] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accountData = await getAccountInfo();
        const userData = await getCurrentUser();
        setAccount(accountData);
        setUser(userData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  if (!account || !user) return <p>Loading...</p>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="bg-white shadow rounded p-6 space-y-4 max-w-md">
        <p><span className="font-semibold">User:</span> {user.username} ({user.email})</p>
        <p><span className="font-semibold">Account Number:</span> {account.accountNumber}</p>
        <p><span className="font-semibold">Balance:</span> ${account.balance.toFixed(2)} {account.currency}</p>
      </div>
    </div>
  );
}
