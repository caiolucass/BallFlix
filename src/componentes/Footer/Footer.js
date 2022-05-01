import React, { Component } from "react";
import { FooterPrincipal } from "./FooterStyle.js";
import Img from "../../assets/Img/bola.png";

export default class Footer extends Component {
  render() {
    return (
      <FooterPrincipal>
        <a href="">
          <img className="Bola" src={Img} alt="Logo Site" />
        </a>
        <p>
          Caio Lucas
        </p>
      </FooterPrincipal>
    );
  }
}
