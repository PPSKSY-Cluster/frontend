import { FC } from "react";
import Cluster from "../cluster/Cluster";
import Menue from "../menue/Menue";
import styles from "../../styles/Home.module.css";

interface Props {}

const Main: FC<Props> = ({}) => {
  return (
    <>
      <Menue></Menue>
      <div className={styles.container}>
        <main className={styles.main}>
          <Cluster></Cluster>
        </main>
      </div>
    </>
  );
};

export default Main;
