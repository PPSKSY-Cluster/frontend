import Head from "node_modules/next/head";
import App from "components/App";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cluster Thruster</title>
        <meta name="description" content="manager for cluster resources" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App />
    </>
  );
}
