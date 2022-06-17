import { FC } from "react";
import { IMobileMenu } from "types/MobileMenu";
import Navbar from "../navbar/Navbar";

interface MainProps {
  children?: React.ReactNode;
  mobileMenu?: IMobileMenu;
}

const Main: FC<MainProps> = ({ children, mobileMenu }) => {
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
