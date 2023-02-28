import React from "react";

import styles from './projects.module.css';

import GifosImg from '../../assets/projects/gifos.png'


const { styledCard, card__image, card__overlay, card__title } = styles;


export default function Gifos() {
  return (
    <div className={styledCard}>
    <img alt="projetc img" src={GifosImg}  className={card__image}/>
      <div className={card__overlay}>
        <h2 className={card__title}>Gifos</h2>
        <p>
          Búsqueda, trendings, favoritos, descarga y creación de Gif utilizando
          la cámara web.
        </p>
      </div>
    </div>
  );
}
