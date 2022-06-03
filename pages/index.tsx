import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Auth from "../components/auth/Auth";
import Cluster from "../components/cluster/Cluster";
import { useState } from "react";

export default function Home() {
  const [authenticated, setAuthenticated] = useState(false);

  const authenticate = () => {
    setAuthenticated(!authenticated);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Cluster Thruster</title>
        <meta name="description" content="manager for cluster resources" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Cluster Thruster</h1>
        {authenticated ? (
          <Cluster></Cluster>
        ) : (
          <Auth authenticate={authenticate}></Auth>
        )}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
