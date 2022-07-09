import { setDefaultHeader } from "components/auth/API";
import Head from "next/head";
import Router from "next/router";
import React, { FC, useEffect, useState } from "react";
import { IMobileMenu } from "types/MobileMenu";
import Navbar from "../navbar/Navbar";

interface MainProps {
  children?: React.ReactNode;
  mobileMenu?: IMobileMenu;
}

const Main: FC<MainProps> = ({ children, mobileMenu }) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const jwtToken = localStorage.getItem("jwt");
    if (jwtToken === "") {
      Router.push("/");
    } else {
      setAuthenticated(true);
      setDefaultHeader("Authorization", `Bearer ${jwtToken}`);
    }
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
            <img
              src="header-banner-day.jpg"
              className="w-100 h-100"
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
