import React from "react";
import Logo from "../Assets/Mitversalogo2.png";
import { FaInstagram } from "react-icons/fa"; // Importar el ícono de Instagram

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="Logo de la empresa" />
        </div>
        <div className="footer-icons">
          <a href="https://www.instagram.com/seba_.salamanca" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Contacto</span>
          <span>
            <a href="mailto:skdalksdm@gmail.com">Correo Electronico</a>
          </span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
