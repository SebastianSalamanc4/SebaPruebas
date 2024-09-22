import React from "react";
import Logo from "../Assets/Mitversalogo2_pe.png";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="Logo de la empresa" />
      </div>
      <div className="navbar-links-container">
        <a href="#">Home</a>
        <a href="#">Información</a>
        <a href="#">Comentarios</a>
        <button className="primary-button">Inicia sesión</button>
      </div>
    </nav>
  );
};

export default Navbar;
