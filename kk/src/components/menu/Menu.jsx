import React, { useEffect } from "react";
import "./Menu.css";
import SideMenu from "./side-menu/SideMenu";

export default (props) => {
  useEffect(() => {
    document.getElementsByClassName("footer")[0].classList.add("footer-menu");

    return () => {
      document
        .getElementsByClassName("footer")[0]
        .classList.remove("footer-menu");
    };
  }, []);
  return (
    <section className="section-menu">
      <SideMenu />
      <div id="menu">{props.children}</div>
    </section>
  );
};
