import { FC } from "react";
import { ICluster } from "../../types/Cluster";

interface Props {
  cluster: ICluster;
}

const SingleCluster: FC<Props> = ({ cluster }) => {
  return (
    <>
      <h2 className="text-center">Cluster {cluster.name}</h2>
      <div>
        <p>{cluster.name}</p>
        <p>{cluster.description}</p>

        <button className="btn btn-secondary">Reservieren</button>
      </div>
    </>
  );
};

export default SingleCluster;
