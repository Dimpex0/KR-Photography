import { useSelector } from "react-redux";
import heroImg from "../assets/images/hero.png";
import "./home.css";

export default function Home() {
  // const auth = useSelector((state) => state.auth);
  // return <div>{auth.isAuthenticated ? <p>yes</p> : <p>no</p>}</div>;
  return (
    <>
      <img className="hero-image" src={heroImg} alt="hero" />
      <main className="home-main">
        <h1>Hi</h1>
      </main>
    </>
  );
}
