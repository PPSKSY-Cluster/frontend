import { FC } from "react";
import { ICluster } from "../../types/Cluster";

interface Props {
  cluster: ICluster;
}

const SingleCluster: FC<Props> = ({ cluster }) => {
  return (
    <>
      <h2 className="text-center">Cluster {cluster.name}</h2>
      <span></span>
      <div>
        <p>10-12</p>
        <p>12-14</p>
        <button className="btn btn-secondary">Reservieren</button>
      </div>
    </>
  );
};

export default SingleCluster;
