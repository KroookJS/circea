import React from "react";
import styles from "./BlockContent.module.scss";
import BlockText from "./BlockText";

function LeftBlock({ data }) {
  const img = data.img_2;

  return (
    <div
      style={{ justifyContent: "flex-end", gap: "0 123px" }}
      className={styles.content}
    >
      <BlockText data={data} />
      <div className={styles.blockImgCastom}>
        <img className={styles.img} src={img} />
      </div>
    </div>
  );
}

export default LeftBlock;
