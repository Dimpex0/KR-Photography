import "./Footer.css";
import logoImg from "../assets/images/logo_black_nobg.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="upper-row">
        <img alt="logo" src={logoImg} />
        <p>
          FOCUS<i class="fa-solid fa-camera-retro"></i>BOKUS
        </p>
        <div className="footer-icons-container">
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
      <p>&copy;2024 KR Photography. ALL RIGHTS RESERVED</p>
    </footer>
  );
}
