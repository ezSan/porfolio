import React from "react";

import styles from "./projects.module.css";
import Gifos from "./Gifos";
import Landing from "./Landing";
import RandomQuoteMachine from "./RandomQuoteMachine";
import DataWarehouse from "./DataWarehouse";
const { styledProjectsContainer, styledProjectsContainerBox } = styles;

export default function Projects() {
  return (
    <div className={styledProjectsContainer}>
      <h3>Proyectos</h3>
      <div className={styledProjectsContainerBox}>
        <Gifos />
        <Landing />
        <RandomQuoteMachine />
        <DataWarehouse />
      </div>
    </div>
  );
}
