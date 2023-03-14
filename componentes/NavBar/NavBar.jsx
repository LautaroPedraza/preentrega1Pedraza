import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import CardWidget from "../CartWidget/CardWidget";

function NavBar() {
  return (
    <div className="navbar">
      <div className="container-one">
        <Link to="/">
          <h2 className="Tittle">Tienda Mock</h2>
        </Link>
        <div>
          <CardWidget />
        </div>
      </div>
      <div className="container-two">
        <div className="nav-button">
          <Link to="tecnology/electronics">
            <h2 className="Tittle">Tecnologia</h2>
          </Link>
        </div>
        <div className="nav-button">
          <Link to="costume/men's clothing">
            <h2 className="Tittle">Indumentaria hombres</h2>
          </Link>
        </div>
        <div className="nav-button">
          <Link to="costume/women's clothing">
            <h2 className="Tittle">Indumentaria mujeres</h2>
          </Link>
        </div>
        <div className="nav-button">
          <Link to="jewelerys/jewelery">
            <h2 className="Tittle">Joyeria</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;