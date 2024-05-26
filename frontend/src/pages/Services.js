import ContactForm from "../components/ContactForm";
import ServiceCard from "../components/ServiceCard";
import "./services.css";

import balImg from "../assets/images/services/bal.jpg";
import semeinaImg from "../assets/images/services/semeina.jpg";
import krushteneImg from "../assets/images/services/krushtene.jpg";
import artistichnaImg from "../assets/images/services/artistichna.jpg";
import reportajnaImg from "../assets/images/services/reportajna.jpg";
import reklamnaImg from "../assets/images/services/reklamna.JPG";

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
        <ServiceCard
          title="Свето кръщение"
          image={krushteneImg}
          infoList={[
            "Заснемане на цялото кръщене + общи снимки с гостите и индивидуални на кръщелника.",
            "Неограничен брой кадри.",
            "Селектирани и обработени кадри в репортажен и артистичен стил.",
            "Възможност за изработка на висококачествен персонализиран албум/фотокнига",
          ]}
        />
        <ServiceCard
          title="Артистична портретна фотосесия"
          image={artistichnaImg}
          infoList={[
            "Фотосесия на локация по Ваш избор или по наше предложение.",
            "Неограничен брой селектирани и обработени кадри",
          ]}
        />
        <ServiceCard
          title="Репортажна фотография"
          image={reportajnaImg}
          infoList={[
            "Отразяване на събитие",
            "Неограничен брой селектирани и обработени кадри",
            "Възможност за изработка на подходящ банер в стила на събитието.",
          ]}
        />
        <ServiceCard
          title="Рекламна фотография"
          image={reklamnaImg}
          infoList={[
            "Заснемане с професионално осветелние и подходящ декор",
            "Селектирани и обработени кадри",
            "Възможност за изработка на подходящ банер в стила на събитието.",
            "Възможност за изработка на физически каталог",
          ]}
        />
      </section>
      <section className="contacts-container">
        <h3>Свържете се с мен</h3>
        <p>С удоволствие ще обсъдим идеите Ви, споделете ни малко повече!</p>
        <ContactForm />
      </section>
    </main>
  );
}
