import ContactForm from "../components/ContactForm";
import ServiceCard from "../components/ServiceCard";
import "./services.css";

import balImg from "../assets/images/services/bal.jpg";
import semeinaImg from "../assets/images/services/semeina.jpg";

// TODO: Compress images

export default function Services() {
  return (
    <main className="services-main">
      <section className="services-container">
        <ServiceCard
          image={balImg}
          title="Абитуриентски бал"
          infoList={[
            "Заснемане на целия бал от подготовка на абитуриента до изпращането в ресторанта или индивидуална артистична фотосесия на предварително уговорено място.",
            "Неограничен брой кадри.",
            "Предаване на снимките на флашка/линк в jpg/png формат.",
          ]}
        />
        <ServiceCard
          title="Семейна фотография"
          image={semeinaImg}
          infoList={[
            "Фотосесия на локация по Ваш избор или по наше предложение.",
            "Неограничен брой кадри.",
            "Предаване на снимките на флашка/линк в jpg/png формат.",
          ]}
        >
          <p>за бременни/двойки/новородени</p>
        </ServiceCard>
      </section>
      <section className="contacts-container">
        <h3>Свържете се с мен</h3>
        <ContactForm />
      </section>
    </main>
  );
}
