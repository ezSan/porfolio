import React from "react";
import TrekkingPole from "../../../assets/trekking-pole.png";
import styles from "./logo.module.css";

const { styledImg, logoCtn, styledLogoTitle,logoLetters, logoTitle } =
  styles;

export default function Logo() {
  return (
    <p className={logoTitle}>Ezequiel Sanchez</p>
  );
}






/* Logo a modificar */


{/* <div className={logoCtn}>
<img src={TrekkingPole} className={styledImg} alt="trekkingPolesLogo" />
<div className={styledLogoTitle}>
  <p className={logoLetters}>E</p>
  <p className={logoLetters}>S</p>
</div>
</div> */}