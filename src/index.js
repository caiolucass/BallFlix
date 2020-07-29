import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/Home";

/*Criar um rota "SPA" sem o refrash da page*/
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CadastroVideo from "./pages/CadastroVideo";

/*Função para pagina não encontrada/invalida*/
const Pagina404 = () => <section>Error:404. Página não encontrada</section>;

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
