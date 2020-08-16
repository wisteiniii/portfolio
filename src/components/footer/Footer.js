import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <h1>This is my footer.</h1>
      <p className={styles.copyright}>{new Date().getFullYear()} Copyright: <a href="https://www.williamsteinmetz.com">William Steinmetz</a></p>
    </footer>
  );
}

export default Footer;
