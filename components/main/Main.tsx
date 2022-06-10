import { FC } from "react";
import Cluster from "../cluster/Cluster";
import Navbar from "../navbar/Navbar";
import User from "../user/User";
import Options from "../user/Options"
import {useState} from "react";
import { setHttpAgentOptions } from "node_modules/next/dist/server/config";

interface Props {}

const Main: FC<Props> = ({}) => {
  const [showCluster, setCluster] = useState(true);
  const [showUser, setUser] = useState(false);
  const [showOptions, setOptions] = useState(false);
  const use = () => {
    setUser(true)
    setCluster(false)
    setOptions(false)
  }
  const clus = () => {
    setCluster(true)
    setUser(false)
    setOptions(false)
  }
  const opt = () => {
    setOptions(true)
    setUser(false)
    setCluster(false)
  }


  return (
    <div style={{ paddingTop: "60px" }}>
      <Navbar use={use} clus={clus} opt={opt}/>
      <div
        className="d-none d-md-block"
        style={{ height: "210px", width: "2880px" }}
      >
        <img src="header-banner-day.jpg" className="w-100 h-100" alt="banner" />
      </div>
      {showCluster && (
        <Cluster />)}
      {showUser && (
        <User opt={opt}/>)}
      {showOptions &&(
        <Options/>)}
    </div>
  );
};

export default Main;
