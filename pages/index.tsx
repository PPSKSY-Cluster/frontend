import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Auth from "../components/auth/Auth";
import Main from "../components/main/Main";

export default function Home() {
  const [authenticated, setAuthenticated] = useState(false);

  const authenticate = () => {
    setAuthenticated(!authenticated);
  };

  return (
    <>
      <Head>
        <title>Cluster Thruster</title>
        <meta name="description" content="manager for cluster resources" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {authenticated ? (
        <Main></Main>
      ) : (
        <Auth authenticate={authenticate}></Auth>
      )}
    </>
  );
}
