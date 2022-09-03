import React from "react";
import { Link } from "react-router-dom";
import "./Options.css";

export default (props) => {
  return (
    <Link className="options" to={`${props.opcao}`}>
      {props.opcao}
    </Link>
  );
};
