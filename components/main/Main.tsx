import { FC } from "react";
import Cluster from "../cluster/Cluster";
import Navbar from "../navbar/Navbar";
import styles from "../../styles/Home.module.css";

interface Props {}

const Main: FC<Props> = ({}) => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>
          <Cluster></Cluster>
        </main>
      </div>
    </>
  );
};

export default Main;
