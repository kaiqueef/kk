import React, { useEffect } from "react";
import "../components/not-found/NotFound.css";

const NotFound = (props) => {
  const currentNotFoundPage =
    JSON.parse(window.localStorage.getItem("currentNotFoundPage")) || 1;
  const lastImage = 10;

  // let currentImage;
  const image = require(`../images/not-found/${currentNotFoundPage}.gif`);

  const resetCounter = () => {
    window.localStorage.setItem("currentNotFoundPage", 1);
  };

  useEffect(() => {
    if (currentNotFoundPage < lastImage)
      window.localStorage.setItem(
        "currentNotFoundPage",
        currentNotFoundPage + 1
      );

    return () => {
      resetCounter();
    };
  }, []);

  return (
    <>
      <h1>Página não encontrada. ):</h1>
      <section className="notFound">
        <img src={image} alt="Not found" />
      </section>
    </>
  );
};

export default NotFound;
