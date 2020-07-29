import React, { Component } from "react";
import Logo from "../../assets/Img/caioLogo.png";
import "./menu.css";
// import ButtonLink from "../Buttons/ButtonLink/ButtonLink.js";
import { Link } from "react-router-dom";
import Button from "../Button";

export default class menu extends Component {
  render() {
    return (
      <nav className="Menu">
        <Link to="/">
          <img className="Logo" src={Logo} alt="DevCaio logo" />
        </Link>

        <Button as={Link} className="ButtonLink" to="/cadastro/video">
          Novo vídeo
        </Button>
      </nav>
    );
  }
}
