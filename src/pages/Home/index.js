import React from "react";
import Menu from "../../componentes/Menu/menu.js";
import Footer from "../../componentes/Footer/Footer.js";
import dadosIniciais from "../../data/dados_iniciais.json";
import BannerMain from "../../componentes/BannerMain";
import Carousel from "../../componentes/Carousel";

function Home() {
  return (
    <section>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={
          "Assista as melhores jogadas dos melhores jogadores do Mundo, na NBA!"
        }
      />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />

      <Carousel category={dadosIniciais.categorias[1]} />

      <Carousel category={dadosIniciais.categorias[2]} />

      <Carousel category={dadosIniciais.categorias[3]} />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[4]} />

      <Footer />
    </section>
  );
}

export default Home;
