import styles from "../styles/Home.module.scss";

import HomePage from "../component/HomePage/HomePage";

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <HomePage />
      </div>
    </div>
  );
}
