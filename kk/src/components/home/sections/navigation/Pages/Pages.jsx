import React from "react";
import "./Pages.css";
export default (props) => (
  <div className="icons" {...props}>
    <a href={props.link} className={props.children}>
      <h3>{props.children}</h3>
    </a>
  </div>
);
