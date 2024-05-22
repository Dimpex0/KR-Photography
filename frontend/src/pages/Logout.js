import { csrfToken } from "../utils/auth";

export default function Logout() {
  const domain = process.env.REACT_APP_DOMAIN;
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch(`${domain}logout/`, {
      method: "POST",
      credentials: "include",
      headers: {
        "X-CSRFToken": csrfToken,
      },
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <button>LOGOUT</button>
    </form>
  );
}
