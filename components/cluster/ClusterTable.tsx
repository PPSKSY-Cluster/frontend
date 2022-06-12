import axios from "node_modules/axios/index";
import { useEffect, useState } from "react";
import { ICluster } from "../../types/Cluster";
import ClusterItem from "./ClusterItem";

const ClusterTable = () => {
  const clusterB: ICluster[] = [
    { _id: 1, name: "Cluster 1", description: "RAM" },
    { _id: 2, name: "Cluster 2", description: "CPU" },
  ];
  const [cluster, setCluster] = useState(clusterB);

  useEffect(() => {
    async function getCluster() {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/cresources/",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSwiZXhwIjoxNjU1MTI1NTI3LCJ1c2VybmFtZSI6ImZvbyJ9.ZBDkby7NBxAW5jWtcwmo1BFFPPqHGUYkIxowqPgKMnQ",
            },
          }
        );
        if (response.data.length > 0) setCluster(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getCluster();
  }, [cluster]);

  return (
    <table className="table table-hover m-3">
      <thead>
        <tr>
          <th>Nr</th>
          <th className="text-center">Name</th>
          <th className="text-center">Beschreibung</th>
          <th className="text-center">Bearbeiten</th>
          <th className="text-center">Löschen</th>
        </tr>
      </thead>
      <tbody>
        {cluster?.map((clusterItem, index) => {
          return (
            <ClusterItem
              key={clusterItem._id}
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
