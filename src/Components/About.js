import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/IMGPresent.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="Background about section" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="Image of the presentation" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading"></p>
        <h1 className="primary-heading">
          La rapidez y el cuidado es primordial a la hora del envío
        </h1>
        <p className="primary-text">
          Nuestra empresa se caracteriza por la innovación, rapidez y versatilidad a la hora de enviar productos.
        </p>
        <p className="primary-text">
          No dejes tus pedidos en las manos de cualquiera.
        </p>
      </div>
    </div>
  );
};

export default About;
