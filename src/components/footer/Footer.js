import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <h1>This is my footer.</h1>
      <p className={styles.copyright}>{new Date().getFullYear()} Copyright: <a href="https://www.williamsteinmetz.com">William Steinmetz</a></p>
      </div>
    </footer>
  );
}

export default Footer;
