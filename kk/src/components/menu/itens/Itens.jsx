import React from "react";
const Itens = () => {
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
    return images.map((image) => {
      return (
        <div className="preview">
          <img src={image} onClick={toggleClass}></img>
        </div>
      );
    });
  }
  return <>{getProdutosListItem()}</>;
};

export default Itens;
