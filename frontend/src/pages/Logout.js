import { useState } from "react";
import { csrfToken } from "../utils/auth";

const apiDomain = process.env.REACT_APP_API_DOMAIN;

export default function Logout() {
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch(`${apiDomain}logout/`, {
      method: "POST",
      credentials: "include",
      headers: {
        "X-CSRFToken": csrfToken,
      },
    });
    if (!response.ok) {
      setError('Couldn"t logout');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <button>LOGOUT</button>
      {error && <p>{error}</p>}
    </form>
  );
}
