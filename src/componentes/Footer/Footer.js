import React, { Component } from "react";
import { FooterPrincipal } from "./FooterStyle.js";
import Img from "../../assets/Img/bola.png";

export default class Footer extends Component {
  render() {
    return (
      <FooterPrincipal>
        <a href="https://www.alura.com.br/">
          <img className="Bola" src={Img} alt="Logo Site" />
        </a>
        <p>
          Site criado com o aprendizado adquirido durante a{" "}
          <a className="Link" href="https://www.alura.com.br/">
            Imersão React da Alura
          </a>
        </p>
      </FooterPrincipal>
    );
  }
}
