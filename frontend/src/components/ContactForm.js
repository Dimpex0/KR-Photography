import "./ContactForm.css";

export default function ContactForm() {
  return (
    <div>
      <form className="contact-form">
        <div className="form-row">
          <input name="first-name" placeholer="Име" required />
          <input name="last-name" placeholer="Фамилия" required />
        </div>
        <div className="form-row">
          <input name="phone" type="tel" placeholer="Телефон" required />
          <input name="mail" placeholer="Имейл" required />
        </div>
        <textarea placeholer="Повече информация" required />
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
