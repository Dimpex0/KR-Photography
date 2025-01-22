import { useState, useEffect } from "react";
import "./ContactForm.css";
import { useSelector } from "react-redux";
import { getCsrfToken } from "../utils/auth";
import Message from "./Message";
import { API_DOMAIN } from "../utils/constants";

export default function ContactForm() {
  const categories = useSelector((state) => state.categories.categories);
  const [isSending, setIsSending] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [messageStatus, setMessageStatus] = useState("");

  useEffect(() => {
    let timeout;
    if (showMessage) {
      timeout = setTimeout(() => {
        setShowMessage(false);
      }, 4000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [showMessage]);

  useEffect(() => {
    function handleScroll() {
      var fixedElement =
        document.getElementsByClassName("contacts-container")[0];
      var footer = document.getElementsByClassName("footer")[0];
      var footerRect = footer.getBoundingClientRect();
      var fixedElementRect = fixedElement.getBoundingClientRect();

      if (footerRect.top <= window.innerHeight) {
        fixedElement.style.top =
          footerRect.top - fixedElementRect.height - 20 + "px";
      } else {
        fixedElement.style.top = "0";
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSending(true);
    const formData = new FormData(e.target);
    const response = await fetch(`${API_DOMAIN}send-mail/`, {
      method: "POST",
      credentials: "include",
      body: formData,
      headers: {
        "X-CSRFToken": getCsrfToken(),
      },
    });
    const responseData = await response.json();
    setMessage(responseData.message);
    setShowMessage(true);

    if (response.ok) {
      setMessageStatus("ok");
    } else {
      setMessageStatus("bad");
    }
    setIsSending(false);
    e.target.reset();
  }

  return (
    <div>
      {showMessage && <Message message={message} status={messageStatus} />}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <input type="text" name="first-name" placeholder="Име" required />
          <input name="last-name" placeholder="Фамилия" required />
        </div>
        <div className="form-row">
          <input name="phone" type="tel" placeholder="Телефон" required />
          <input name="mail" placeholder="Имейл" required />
        </div>
        <select name="service" required>
          {categories &&
            categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
        </select>
        <textarea
          name="description"
          placeholder="Повече информация..."
          required
        />
        <button disabled={isSending}>
          {isSending ? "Изпраща се" : "Изпрати"}
        </button>
      </form>
      <div className="icons-container">
        <a href="tel:+359878367385">
          <i className="fa-solid fa-phone"></i>
        </a>
        <a href="mailto:karoliaruseva@icloud.com">
          <i className="fa-solid fa-envelope"></i>
        </a>
        <a href="https://www.instagram.com/krln.ph/" target="_blank">
          <i className="fa-brands fa-square-instagram"></i>
        </a>
      </div>
    </div>
  );
}
