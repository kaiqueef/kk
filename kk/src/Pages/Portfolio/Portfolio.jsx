import React, { useState } from "react";
import Menu from "../../components/menu/Menu";
import Images from "./Images";

const Portfolio = (props) => {
  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(
    require.context(
      "../../images/portfolio/preview",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  function getProdutosListItem() {
    return images.map((image) => {
      return (
        <div className="preview">
          <img
            src={image}
            onClick={toggleClass}
            className={isActive ? "active" : null}
          ></img>
        </div>
      );
    });
  }

  return (
    <>
      <Menu pagina="portfolio">
        <Images />
      </Menu>
    </>
  );
};

export default Portfolio;
