import { useState } from "react";
import "./image.css";
import { useSelector } from "react-redux";
import { getCsrfToken } from "../utils/auth";

const apiDomain = process.env.REACT_APP_API_DOMAIN;

export default function Image({ id, triggerLoading, ...props }) {
  const [isLoading, setIsLoading] = useState(true);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  async function handleDelete() {
    const response = await fetch(`${apiDomain}delete-image/?id=${id}`, {
      method: "POST",
      credentials: "include",
      headers: {
        "X-CSRFToken": getCsrfToken(),
      },
    });
    if (response.ok) {
      triggerLoading(true);
    }
  }

  return (
    <div className={`image-container ${isLoading ? "loading" : ""}`}>
      <img
        onLoad={() => {
          setIsLoading(false);
        }}
        className="image"
        {...props}
      />
      <div className="loader"></div>
      {isAuthenticated && (
        <button className="delete-btn" onClick={handleDelete}>
          Delete
        </button>
      )}
    </div>
  );
}
