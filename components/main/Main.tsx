import { setDefaultHeader, validateAccessToken } from "api/API";
import Head from "next/head";
import Router from "next/router";
import React, { FC, useEffect, useState } from "react";
import { IMobileMenu } from "types/MobileMenu";
import Navbar from "../navbar/Navbar";
import Image from "next/image";

interface MainProps {
  children?: React.ReactNode;
  mobileMenu?: IMobileMenu;
}

const Main: FC<MainProps> = ({ children, mobileMenu }) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    async function onStart() {
      const accessToken = await validateAccessToken();
      if (!accessToken) {
        return Router.push("/");
      }
      if (!children) {
        Router.push("/cluster");
      }
      setDefaultHeader("Authorization", accessToken);
      setAuthenticated(true);
    }
    onStart();
  }, []);

  return (
    authenticated && (
      <>
        <Head>
          <title>Cluster Thruster</title>
          <meta name="description" content="manager for cluster resources" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div style={{ paddingTop: "60px" }}>
          <Navbar mobileMenu={mobileMenu} />
          <div
            className="d-none d-md-block"
            style={{ height: "210px", width: "2880px" }}
          >
            <Image
              src="/header-banner-day.jpg"
              width="2880px"
              height="210px"
              alt="banner"
            />
          </div>
          {children}
        </div>
      </>
    )
  );
};

export default Main;
