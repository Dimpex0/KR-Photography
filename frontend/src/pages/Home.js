import hero1Img from "../assets/images/hero1-min.jpg";
import hero2Img from "../assets/images/hero2-min.JPG";
import hero3Img from "../assets/images/hero3-min.JPG";
import hero4Img from "../assets/images/hero4-min.jpg";
import hero5Img from "../assets/images/hero5-min.jpg";
import "./home.css";

export default function Home() {
  const images = [hero1Img, hero2Img, hero3Img, hero4Img, hero5Img];

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
      </div>
      {/* <img className="hero-image" src={currentImage} alt="hero" /> */}
      <main className="home-main">
        <h1>Hi</h1>
      </main>
    </>
  );
}
