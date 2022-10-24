import React from "react";
import styles from "./BlockContent.module.scss";
import BlockText from "./BlockText";

function RigthBlock({ data }) {
  const img = data.img;
  return (
    <div className={styles.content}>
      <div className={styles.blockImg}>
        <img className={styles.img} src={img} />
      </div>
      <BlockText data={data} />
    </div>
  );
}

export default RigthBlock;
