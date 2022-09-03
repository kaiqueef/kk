import React, { useEffect } from "react";

import Presentation from "../components/home/sections/presentation/Presentation";
import Navigations from "../components/home/sections/navigation/Navigations";
import Jobs from "../components/home/sections/jobs/Jobs";

import cemetery from "../images/jobs/cemetery.png";
import cemeteryGrayscale from "../images/jobs/cemetery-grayscale.png";
import predio from "../images/jobs/predio.jpg";
import universo from "../images/jobs/universo.jpg";

export default () => {
  window.localStorage.setItem("state", 0);
  return (
    <>
      <Presentation subtitulo="Biblioteca 3d" />
      <Navigations />
      <div className="jobs-header">
        <h3>Portfólio</h3>
      </div>
      <Jobs
        titulo="Encomendas"
        image={cemetery}
        grayImage={cemeteryGrayscale}
      ></Jobs>
      <Jobs titulo="ArchViz" image={predio}></Jobs>
      <Jobs titulo="Espaço" image={universo}></Jobs>
    </>
  );
};
