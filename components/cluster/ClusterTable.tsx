import { ICluster } from "../../types/Cluster";

import ClusterItem from "./ClusterItem";
const ClusterTable = () => {
  const cluster: ICluster[] = [
    { id: 1, name: "Cluster 1", description: "RAM" },
    { id: 2, name: "Cluster 2", description: "CPU" },
  ];
  return (
    <table className="table m-3">
      <thead>
        <tr>
          <th>Nr</th>
          <th>Name</th>
          <th>Beschreibung</th>
        </tr>
      </thead>
      <tbody>
        {cluster.map((clusterItem, index) => {
          return (
            <ClusterItem
              key={clusterItem.id}
              clusterItem={clusterItem}
              count={++index}
            ></ClusterItem>
          );
        })}
      </tbody>
    </table>
  );
};
export default ClusterTable;
