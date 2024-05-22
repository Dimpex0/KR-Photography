import { useState } from "react";
import { csrfToken } from "../utils/auth";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const domain = process.env.REACT_APP_DOMAIN;

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch(`${domain}login/`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      credentials: "include",
      headers: {
        "X-CSRFToken": csrfToken,
      },
    });
    if (!response.ok) {
      const responseData = await response.json();
      setError(responseData.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button>Login</button>
      {error && <h1>{error}</h1>}
    </form>
  );
}
