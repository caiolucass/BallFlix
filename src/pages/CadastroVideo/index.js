import React, { Component } from "react";
import PageDefault from "../../componentes/PageDefault";
import { Link } from "react-router-dom";

export default class CadastroVideo extends Component {
  render() {
    return (
      <section>
        <PageDefault>
          <h1>Cadastro de Vídeo</h1>
          <Link to="cadastro/categoria">Cadastrar Categoria</Link>
        </PageDefault>
      </section>
    );
  }
}
