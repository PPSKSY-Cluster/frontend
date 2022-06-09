import { FC } from "react";
import Cluster from "../cluster/Cluster";
import Navbar from "../navbar/Navbar";

interface Props {}

const Main: FC<Props> = ({}) => {
  return (
    <div style={{ paddingTop: "60px" }}>
      <Navbar />
      <div
        className="d-none d-md-block"
        style={{ height: "210px", width: "2880px" }}
      >
        <img src="header-banner-day.jpg" className="w-100 h-100" alt="banner" />
      </div>
      <Cluster />
    </div>
  );
};

export default Main;
