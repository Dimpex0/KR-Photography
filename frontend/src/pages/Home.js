import hero1 from "../assets/images/hero1.jpg";
import hero2 from "../assets/images/hero2.jpg";
import hero3 from "../assets/images/hero3.jpg";
import hero4 from "../assets/images/hero4.JPG";
import hero5 from "../assets/images/hero5.jpg";
import hero6 from "../assets/images/hero6.jpg";

import "./home.css";

export default function Home() {
  const images = [hero6, hero1, hero2, hero4, hero3, hero5];

  document
    .querySelector('meta[property="og:title"]')
    .setAttribute("content", "KR Photography | Karolina Ruseva");

  return (
    <>
      <div className="hero-container">
        {images.map((img, index) => (
          <img
            key={index}
            className="hero-image"
            src={img}
            alt={`hero ${index + 1}`}
          />
        ))}
        <h1>Karolina Ruseva</h1>
      </div>
      <main className="home-main">
        <h1>Моята цел</h1>
        <p>
          Стремя се, чрез фотографията си, всеки път да ви връщам към
          съкровеното пътешествие, което животът е разкрил пред вас и неговите
          най-значими и специални моменти. Запечатаната емоция във всеки кадър,
          която все още предизвиква вълнение, автентичното предаване на
          усещането от вашите незабравими мигове са задължителна част от
          работата ми, защото за мен именно това е изкуство!
        </p>
      </main>
    </>
  );
}
