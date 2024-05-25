import "./ContactForm.css";
import { useSelector } from "react-redux";

export default function ContactForm() {
  const categories = useSelector((state) => state.categories.categories);
  return (
    <div>
      <form className="contact-form">
        <div className="form-row">
          <input type="text" name="first-name" placeholder="Име" required />
          <input name="last-name" placeholder="Фамилия" required />
        </div>
        <div className="form-row">
          <input name="phone" type="tel" placeholder="Телефон" required />
          <input name="mail" placeholder="Имейл" required />
        </div>
        <select name="category" required>
          {categories &&
            categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
        </select>
        <textarea placeholder="Повече информация..." required />
        <button>Изпрати</button>
      </form>
      <div className="icons-container">
        <i className="fa-solid fa-phone"></i>
        <i className="fa-solid fa-envelope"></i>
        <i className="fa-brands fa-square-instagram"></i>
      </div>
    </div>
  );
}
