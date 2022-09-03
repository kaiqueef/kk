import React, { Component } from "react";
import Pages from "./Pages/Pages";
import Modelos from "../../../../images/navigation/Modelos.png";
import Portfolio from "../../../../images/navigation/Portfolio.jpg";
import Texturas from "../../../../images/navigation/Texturas.png";

export default (props) => (
  <section className="navigation">
    <div className="navigation-wrapper">
      <Pages link="/modelos" style={{ backgroundImage: `url(${Modelos})` }}>
        modelos
      </Pages>
      <Pages link="/texturas" style={{ backgroundImage: `url(${Texturas})` }}>
        texturas
      </Pages>
      <Pages link="/portfolio" style={{ backgroundImage: `url(${Portfolio})` }}>
        Portfólio
      </Pages>
    </div>
  </section>
);
