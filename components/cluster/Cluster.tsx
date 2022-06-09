import { FC } from "react";
import { ICluster } from "../../types/Cluster";
import ClusterItem from "../cluster/ClusterItem";

interface Props {}

const Cluster: FC<Props> = ({}) => {
  const cluster1: ICluster = { id: 1, name: "Cluster 1", description: "" };
  const cluster2: ICluster = { id: 2, name: "Cluster 2", description: "" };
  const cluster: ICluster[] = [cluster1, cluster2];

  let count = 0;

  return (
    <>
      <h2>All Cluster</h2>
      {/* {cluster.map((clusterItem) => {
        count++;
        return (
          <ClusterItem
            key={clusterItem.id}
            clusterItem={clusterItem}
            count={count}
          ></ClusterItem>
        );
      })} */}
    </>
  );
};

export default Cluster;
