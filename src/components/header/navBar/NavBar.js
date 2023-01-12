import React from "react";
import styles from "./navBar.module.css";

const { styledNavBar } = styles;

export default function NavBar() {
  return (
    <div className={styledNavBar}>
      <a>Sobre mi</a>
      <a>Habilidades</a>
      <a>Proyectos</a>
      <a>Contacto</a>
    </div>
  );
}
