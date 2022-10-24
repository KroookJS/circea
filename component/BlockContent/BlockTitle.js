import styles from "./BlockContent.module.scss";
import clsx from "clsx";

function BlockTitle({ title, position }) {
  return (
    <div>
      <h1
        className={clsx(styles.title, {
          [styles.titleStart]: position,
        })}
      >
        {title}
      </h1>
    </div>
  );
}

export default BlockTitle;
