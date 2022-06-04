import { FC } from "react";
import { ICluster } from "../../types/Cluster";

interface Props {
  clusterItem: ICluster;
  count: number;
}

const ClusterItem: FC<Props> = ({ clusterItem, count }) => {
  return (
    <>
      <tr>
        <td>{count}</td>
        <td>{clusterItem.name}</td>
        <td>{clusterItem.description}</td>
      </tr>
    </>
  );
};

export default ClusterItem;
