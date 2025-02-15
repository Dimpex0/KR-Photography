import { useState } from "react";
import { getCsrfToken } from "../utils/auth";
import "./PostImagesToCategoryForm.css";
import { API_DOMAIN } from "../utils/constants";

export default function PostImagesToCategoryForm({
  children,
  category,
  triggerLoading,
  ...props
}) {
  const [message, setMessage] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  async function handleFormSubmit(e) {
    e.preventDefault();
    setIsUploading(true);
    const data = new FormData(e.target);

    const response = await fetch(
      `${API_DOMAIN}post-images-to-category/?category=${category}`,
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
    setIsUploading(false);
    e.target.reset();
  }
  return (
    <form {...props} className="admin-form" onSubmit={handleFormSubmit}>
      {children}
      <button disabled={isUploading}>
        {isUploading ? "Снимките се качват" : "Качи"}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
}
