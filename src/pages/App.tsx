import "../styles/App.css";
import "../styles/MobileApp.css";
import image0 from "../assets/desktop-image-hero-1.jpg";
import image1 from "../assets/desktop-image-hero-2.jpg";
import image2 from "../assets/desktop-image-hero-3.jpg";
import { Nav } from "../components/Nav";
import { AboutUs } from "../components/AboutUs";
import { Section } from "../components/Section";
import { useState } from "react";

const App = () => {
  const [number, setNumber] = useState<number>(0);
  const images = [image0, image1, image2];

  return (
    <div className="main">
      <div
        style={{ backgroundImage: `url(${images[number]})` }}
        className="top-left"
      >
        <Nav />
      </div>
      <div className="top-right">
        <Section number={number} setNumber={setNumber} />
      </div>
      <div className="bottom-left"></div>
      <div className="bottom-middle">
        <AboutUs />
      </div>
      <div className="bottom-right"></div>
    </div>
  );
};

export default App;
