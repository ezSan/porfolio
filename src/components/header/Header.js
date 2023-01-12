import React from 'react';
import Logo from './logo/Logo';
import NavBar from './navBar/NavBar'
import styles from './header.module.css';


const {styledHeader} = styles;



export default function Header() {
  return (
    <div className={styledHeader}>
        <Logo/>
        <NavBar/>
    </div>
  )
}
