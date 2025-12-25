import { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !username.trim()) {
      alert("Please enter a username");
      return;
    }

    login("mock-token", { username, role: "USER" });
    alert(`Logged in as ${username}`);
    navigate("/transactions"); // redirect after login
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Login (Mock)</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
