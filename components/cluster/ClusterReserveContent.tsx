import { FC } from "react";
import { ICluster } from "../../types/Cluster";
import { useSelector } from "react-redux";
import { RootState } from "src/store";

interface Props {
  cluster: ICluster;
}

const SingleCluster: FC<Props> = ({ cluster }) => {
  const jwt: string = useSelector((state: RootState) => state.jwt);
  return (
    <>
      <h2 className="text-center">Cluster {cluster.name}</h2>
      <span>{jwt}</span>
      <div>
        <p>{cluster.name}</p>
        <p>{cluster.description}</p>

        <button className="btn btn-secondary">Reservieren</button>
      </div>
    </>
  );
};

export default SingleCluster;
