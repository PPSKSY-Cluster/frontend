import { FC } from "react";
import { MobileMenu } from "types/MobileMenu";
import Navbar from "../navbar/Navbar";
import User from "../user/User";
import Options from "../user/Options"
import {useState} from "react";
import { setHttpAgentOptions } from "node_modules/next/dist/server/config";

interface Props {
  children?: any;
  mobileMenu?: MobileMenu;
}
const Main: FC<Props> = ({ children, mobileMenu }) => {
  return (
    <div style={{ paddingTop: "60px" }}>
      <Navbar mobileMenu={mobileMenu} />
      <div
        className="d-none d-md-block"
        style={{ height: "210px", width: "2880px" }}
      >
        <img src="header-banner-day.jpg" className="w-100 h-100" alt="banner" />
      </div>
      {children}
    </div>
  );
};

export default Main;
