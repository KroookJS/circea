import React from "react";
import clsx from "clsx";

import BlockContent from "../BlockContent/BlockContent";
import BlockTitle from "../BlockContent/BlockTitle";
import styles from "./BlockContent.module.scss";

function ContainerBlock({ data, position }) {
  return (
    <div
      className={clsx(styles.wrraper, {
        [styles.wrraperMobile]: position,
      })}
    >
      <div className={styles.content}>
        <div className={styles.titleBlock}>
          <BlockTitle title={data.title} />
        </div>
        <BlockContent data={data} />
      </div>
    </div>
  );
}

export default ContainerBlock;
