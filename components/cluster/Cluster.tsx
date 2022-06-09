import Sidebar from "components/sidebar/Sidebar";
import { FC } from "react";
import { ICluster } from "../../types/Cluster";
import ClusterItem from "../cluster/ClusterItem";

interface Props {}

const Cluster: FC<Props> = ({}) => {
  const cluster1: ICluster = { id: 1, name: "Cluster 1", description: "RAM" };
  const cluster2: ICluster = { id: 2, name: "Cluster 2", description: "CPU" };
  const cluster: ICluster[] = [cluster1, cluster2];

  return (
    <div className="d-flex flex-row">
      <Sidebar
        title={"Cluster"}
        elements={["Alle Cluster anzeigen", "Neues Cluster erstellen"]}
      />
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
    </div>
  );
};

export default Cluster;
