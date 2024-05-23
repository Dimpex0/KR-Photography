import { useState } from "react";
import { getCsrfToken } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../store";

const apiDomain = process.env.REACT_APP_API_DOMAIN;

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch(`${apiDomain}login/`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      credentials: "include",
      headers: {
        "X-CSRFToken": getCsrfToken(),
      },
    });
    if (!response.ok) {
      const responseData = await response.json();
      setError(responseData.message);
    } else {
      dispatch(authActions.authenticate(true));
      return navigate("/");
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
