import React from "react";
import "./Images.css";
const Images = () => {
  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(
    require.context(
      "../../../images/portfolio/preview",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  const toggleClass = (element) => {
    const parent = element.target.parentElement;
    parent.classList.toggle("active");
  };

  function getProdutosListItem() {
    return images.map((image, index) => {
      return (
        <div className="image-preview" key={index}>
          <img src={image} onClick={toggleClass} alt={image}></img>
        </div>
      );
    });
  }
  return <>{getProdutosListItem()}</>;
};
export default Images;
