import { useState } from "react";
import "./image.css";
import { useSelector } from "react-redux";
import { getCsrfToken } from "../utils/auth";
import { API_DOMAIN } from "../utils/constants";

export default function Image({ id, triggerLoading, dimensions, ...props }) {
  const [isLoading, setIsLoading] = useState(true);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const vertical = dimensions.width < dimensions.height;

  async function handleDelete() {
    const response = await fetch(`${API_DOMAIN}delete-image/?id=${id}`, {
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
    <div
      className={`image-container ${isLoading ? "loading" : ""} ${
        vertical ? "vertical" : "horizontal"
      }`}
    >
      <img
        onLoad={() => {
          setIsLoading(false);
        }}
        className="image"
        alt=""
        {...props}
      />
      {isLoading && <div className="loader"></div>}
      {isAuthenticated && (
        <button className="delete-btn" onClick={handleDelete}>
          Delete
        </button>
      )}
    </div>
  );
}
