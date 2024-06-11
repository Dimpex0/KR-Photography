import { useState } from "react";
import "./ServiceCard.css";

export default function ServiceCard({ title, image, infoList, children }) {
  const [infoActive, setInfoActive] = useState(false);

  return (
    <div className="flip-card" onClick={() => setInfoActive(!infoActive)}>
      <div className="flip-card-front">
        <h3>{title}</h3>
        {children}
        <img alt="" src={image} />
      </div>
      <div className={`flip-card-info${infoActive ? " active" : ""}`}>
        <ul>
          {infoList.map((info) => (
            <li key={info}>{info}</li>
          ))}
        </ul>
      </div>
      <p>Натисни тук</p>
    </div>
  );
}
