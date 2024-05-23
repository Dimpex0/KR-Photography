import { useState } from "react";
import { getCsrfToken } from "../utils/auth";

const apiDomain = process.env.REACT_APP_API_DOMAIN;

export default function PostImagesToCategoryForm({
  children,
  category,
  triggerLoading,
  ...props
}) {
  const [message, setMessage] = useState("");

  async function handleFormSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);

    const response = await fetch(
      `${apiDomain}post-images-to-category/?category=${category}`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "X-CSRFToken": getCsrfToken(),
        },
        body: data,
      }
    );

    const responseData = await response.json();
    setMessage(responseData.message);
    triggerLoading(true);
    e.target.reset();
  }
  return (
    <form {...props} className="admin-form" onSubmit={handleFormSubmit}>
      {children}
      {message && <p>{message}</p>}
    </form>
  );
}
