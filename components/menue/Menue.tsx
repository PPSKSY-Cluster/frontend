import { FC } from "react";
import styles from "./Menue.module.css";

interface Props {}

const Menue: FC<Props> = ({}) => {
  return (
    <div className={styles.menue}>
      <div className={styles.menueCentered}>
        <h3>Cluster Trhuster</h3>
        <ul className={styles.navbar}>
          <li className={styles.navbarElement}>Cluster</li>
          <li className={styles.navbarElement}>Options</li>
        </ul>
      </div>
    </div>
  );
};

export default Menue;
