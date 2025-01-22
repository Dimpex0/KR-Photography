import { useState } from "react";
import { getCsrfToken } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
import { API_DOMAIN } from "../utils/constants";

export default function Logout() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch(`${API_DOMAIN}logout/`, {
      method: "POST",
      credentials: "include",
      headers: {
        "X-CSRFToken": getCsrfToken(),
      },
    });
    if (!response.ok) {
      setError('Couldn"t logout');
    } else {
      dispatch(authActions.authenticate(false));
      return navigate("/");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <button>LOGOUT</button>
      {error && <p>{error}</p>}
    </form>
  );
}
