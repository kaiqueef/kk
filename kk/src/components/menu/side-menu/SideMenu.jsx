import React from "react";
import Options from "./Options/Options";
import "./SideMenu.css";

export default () => {
  return (
    <>
      <div id="side-menu">
        <hr></hr>
        <nav>
          <Options opcao="All"></Options>
          <Options opcao="ArchViz"></Options>
          <Options opcao="3d"></Options>
          <Options opcao="Grafite"></Options>
        </nav>
      </div>
    </>
  );
};
