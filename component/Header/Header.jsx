import React from "react";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrraper}>
        <div className={styles.container}>
          <div>
            <img className={styles.logoBlock} src="./img/logo.svg" alt="logo" />
          </div>

          <div className={styles.numberBlock}>
            <a>+7 (495) 495-49-54</a>
          </div>
          <img className={styles.mobile} src="./mobile.svg" />
        </div>
      </div>
    </header>
  );
}

export default Header;
