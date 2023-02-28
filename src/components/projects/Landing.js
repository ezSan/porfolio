import React from 'react';
import styles from './projects.module.css';
import LandingImg from '../../assets/projects/landing.png';

const { styledCard, card__image, card__overlay, card__title } = styles;


export default function Landing() {
  return (
    <div className={styledCard}>
    <img alt="projetc img" src={LandingImg}  className={card__image}/>
      <div className={card__overlay}>
        <h2 className={card__title}>Pale Blue Dot - Landing Page</h2>
        <p>
        Landing page, canal dedicado a podcast de programación y tecnología
        </p>
      </div>
    </div>
  )
}
