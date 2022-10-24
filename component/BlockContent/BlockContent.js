import React from "react";
import styles from "./BlockContent.module.scss";
import LeftBlock from "./LeftBlock";
import RigthBlock from "./RigthBlock";
import { motion } from "framer-motion";

function BlockContent({ data }) {
  return (
    <div className={styles.wrraper}>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <RigthBlock data={data} />
      </motion.div>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <LeftBlock data={data} />
      </motion.div>
    </div>
  );
}

export default BlockContent;
