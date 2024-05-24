import ContactForm from "../components/ContactForm";
import "./services.css";

export default function Services() {
  return (
    <main className="services-main">
      <section className="services-container"></section>
      <section className="contacts-container">
        <h3>Свържете се с мен</h3>
        <ContactForm />
      </section>
    </main>
  );
}
