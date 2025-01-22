import hero1Img from "../assets/images/hero1-min.jpg";
import hero2Img from "../assets/images/hero2-min.JPG";
import hero3Img from "../assets/images/hero3-min.JPG";
import hero4Img from "../assets/images/hero4-min.jpg";
import hero5Img from "../assets/images/hero5-min.jpg";
import "./home.css";

export default function Home() {
  const images = [hero3Img, hero4Img, hero5Img, hero2Img, hero1Img];

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
        <h1>Моята цел!</h1>
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
