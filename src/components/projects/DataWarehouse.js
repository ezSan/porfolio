import React from "react";
import styles from "./projects.module.css";
import DataWarehouseImg from "../../assets/projects/dataWarehouse.png";

const { styledCard, card__image, card__overlay, card__title } = styles;

export default function DataWarehouse() {
  return (
    <div className={styledCard}>
      <img alt="projetc img" src={DataWarehouseImg} className={card__image} />
      <div className={card__overlay}>
        <h2 className={card__title}>Data Warehouse - WebApp</h2>
        <p>
          Plataforma que permite a una empresa de marketing
          gestionar todos los contactos de sus clientes para sus campañas
          comerciales.
        </p>
      </div>
    </div>
  );
}
