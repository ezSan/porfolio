import React from "react";
import styles from "./skills.module.css";

import Bootstrap from "../../assets/frontEndIcons/bootstrap.svg";
import Css from "../../assets/frontEndIcons/css3.svg";
import Html from "../../assets/frontEndIcons/html5.svg";
import Javascript from "../../assets/frontEndIcons/javascript.svg";
import Mui from "../../assets/frontEndIcons/mui.svg";
import ReactIcon from "../../assets/frontEndIcons/React.png";
import Sass from "../../assets/frontEndIcons/sass.svg";
import Redux from "../../assets/frontEndIcons/redux.svg";

/* back end icons */

import Express from "../../assets/backEndIcons/expressjs.svg";
import Mongo from "../../assets/backEndIcons/mongo.svg";
import NodeJs from "../../assets/backEndIcons/nodejs.png";
import Sql from "../../assets/backEndIcons/sql.svg";
import PhpIcon from "../../assets/backEndIcons/phpIcon.png";
import Sequelize from "../../assets/backEndIcons/sequelize.png";

/* develop Icons */

import GitIcon from "../../assets/desarrolloIcons/git.svg";
import Slack from "../../assets/desarrolloIcons/slack.png";
import Agile from "../../assets/desarrolloIcons/agile.png";

const {
  styledIcon,
  iconsContainer,
  skillsContainer,
  tecnologiasStyled,
  skillsTitle,
  habilidadesTitle
  
} = styles;

export default function Skills() {
  return (
    <div>
    <h3>Habilidades</h3>
      <div className={tecnologiasStyled}>
        <div className={skillsContainer}>
          <h4 className={skillsTitle}>Front End</h4>
          <div className={iconsContainer}>
            <img src={Bootstrap} alt="icon" className={styledIcon} />
            <img src={Css} alt="icon" className={styledIcon} />
            <img src={Html} alt="icon" className={styledIcon} />
            <img src={Javascript} alt="icon" className={styledIcon} />
            <img src={Mui} alt="icon" className={styledIcon} />
            <img src={ReactIcon} alt="icon" className={styledIcon} />
            <img src={Sass} alt="icon" className={styledIcon} />
            <img src={Redux} alt="icon" className={styledIcon} />
          </div>
        </div>

        <div className={skillsContainer}>
          <h4 className={skillsTitle}>Back End</h4>
          <div className={iconsContainer}>
            <img src={Express} alt="icon" className={styledIcon} />
            <img src={Javascript} alt="icon" className={styledIcon} />
            <img src={Mongo} alt="icon" className={styledIcon} />
            <img src={NodeJs} alt="icon" className={styledIcon} />
            <img src={Sql} alt="icon" className={styledIcon} />
            <img src={PhpIcon} alt="icon" className={styledIcon} />
            <img src={Sequelize} alt="icon" className={styledIcon} />
          </div>
        </div>

        <div className={skillsContainer}>
          <h4 className={skillsTitle}>Desarrollo</h4>
          <div className={iconsContainer}>
            <img src={Slack} alt="icon" className={styledIcon} />
            <img src={GitIcon} alt="icon" className={styledIcon} />
            <img src={Agile} alt="icon" className={styledIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}
