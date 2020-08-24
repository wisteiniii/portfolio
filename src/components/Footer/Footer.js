import React from "react";
import styles from "./Footer.module.css";
import facebook from "./../../assets/footer-img/facebook.svg";
import linkedin from "./../../assets/footer-img/linkedin.svg";
import twitter from "./../../assets/footer-img/twitter.svg";
import instagram from "./../../assets/footer-img/instagram.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <h1>WilliamSteinmetz.me</h1>
        <div className={styles.logosdiv}>
         <ul className={styles.logos}>

           <a href="https://www.facebook.com/william.steinmetz.i/" target="_blank" rel="noopener noreferrer"><li><img src={facebook} alt="Logo" /></li></a>
           <a href="https://www.linkedin.com/in/williamjsteinmetz/" target="_blank" rel="noopener noreferrer"><li><img src={linkedin} alt="Logo" /></li></a>
           <a href="https://twitter.com/wisteinmetz" target="_blank" rel="noopener noreferrer"><li><img src={twitter} alt="Logo" /></li></a>
           <a href="https://www.instagram.com/meincovfefe/" target="_blank" rel="noopener noreferrer"><li><img src={instagram} alt="Logo" /></li></a>

         </ul> 
        </div>
        <p className={styles.copyright}>
          {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.williamsteinmetz.com">William Steinmetz</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
