import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.HeroImg}>
      <div className={styles.HeroText}>
        <h1 className={styles.HeroHeader}>I am William Steinmetz</h1>
        <p className={styles.HeroSubText}>
          Professional Aviator turned Web Developer
        </p>
      </div>
    </div>
  );
}

export default Hero;
