import styles from "./navbar.module.css";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
const Navbar = () => {
  const [isopen, setisOpen] = useState(false);
  const handleisOpen = () => {
    setisOpen((open) => !open);
  };
  return (
    <header>
      <nav className={styles.navContainer}>
        <div className={styles.navmenu}>
          <GiHamburgerMenu className={styles.menuicon} onClick={handleisOpen} />
        </div>
        <ul className={`${styles.navList} ${isopen ? styles.is_open : ""}`}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#skill">Skills</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
