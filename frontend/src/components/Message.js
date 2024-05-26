import React, { useEffect, useState } from "react";
import "./Message.css"; // Include your modal styling here

export default function Message({ message, status, duration = 4000 }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timeout);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className={`message ${status === "ok" ? "ok" : "bad"}`}>
      {status === "ok" ? (
        <i className="fa-solid fa-circle-check"></i>
      ) : (
        <i className="fa-solid fa-circle-xmark"></i>
      )}
      <p>{message}</p>
    </div>
  );
}
