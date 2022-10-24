import React from "react";
import styles from "./BlockContent.module.scss";

function BlockText({ data }) {
  const text = data.text;
  const desc = data.desc;

  return (
    <div className={styles.blockText}>
      <h3 className={styles.text}>{text}</h3>
      <p className={styles.desc}>{desc}</p>
    </div>
  );
}

export default BlockText;
