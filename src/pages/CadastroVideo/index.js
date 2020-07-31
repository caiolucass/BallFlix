import React, { Component } from "react";
import PageDefault from "../../componentes/PageDefault";
import { Link } from "react-router-dom";

export default class CadastroVideo extends Component {
  render() {
    return (
      <PageDefault>
        <h1>Cadastro de Vídeo</h1>
        <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
        <br></br>
        <br></br>
        <Link to="/">Ir para home</Link>
      </PageDefault>
    );
  }
}
