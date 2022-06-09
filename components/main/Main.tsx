import { FC } from "react";
import Cluster from "../cluster/Cluster";
import Navbar from "../navbar/Navbar";
import styles from "../../styles/Home.module.css";

interface Props {}

const Main: FC<Props> = ({}) => {
  return (
    <body style={{ paddingTop: "60px" }}>
      <Navbar />
      <div
        className="d-none d-md-block"
        style={{ height: "210px", width: "2880px" }}
      >
        <img src="header-banner-day.jpg" className="w-100 h-100" alt="banner" />
      </div>
      <div className={styles.container}>
        <main className={styles.main}>
          <Cluster></Cluster>
        </main>
      </div>
    </body>
  );
};

export default Main;
