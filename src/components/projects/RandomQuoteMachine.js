import React from "react";

import styles from "./projects.module.css";

import RandomQuoteMachineImg from "../../assets/projects/RQuoteMachine.png";

const { styledCard, card__image, card__overlay, card__title } = styles;

export default function RandomQuoteMachine() {
  return (
    <div className={styledCard}>
      <img
        alt="projetc img"
        src={RandomQuoteMachineImg}
        className={card__image}
      />
      <div className={card__overlay}>
        <h2 className={card__title}>Random Quote Machine</h2>
        <p>
          Como el título indica, una maquina de frases aleatorias, inspiradoras
          y con colores animados.
        </p>
      </div>
    </div>
  );
}
