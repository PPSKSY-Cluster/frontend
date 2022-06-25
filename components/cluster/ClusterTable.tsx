import ClusterAPI from "api/cluster";
import ConfirmDialog from "components/dialog/ConfirmDialog";
import { useEffect, useState } from "react";
import { ICluster } from "../../types/Cluster";
import ClusterItem from "./ClusterItem";
import ClusterUpdate from "./ClusterUpdate";
import ClusterReserve from "./ClusterReserve";

const ClusterTable = () => {
  const clusterB: ICluster[] = [
    { _id: "1", name: "Cluster 1", description: "RAM" },
    { _id: "2", name: "Cluster 2", description: "CPU" },
  ];
  const [cluster, setCluster] = useState(clusterB);
  const [currentItem, setCurrentItem] = useState<ICluster>({
    name: "",
    description: "",
  });

  useEffect(() => {
    async function getCluster() {
      try {
        const response = await ClusterAPI.getAll();
        if (response.data.length > 0) setCluster(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getCluster();
  }, []);

  const onDeleteClick = async () => {
    try {
      const response = await ClusterAPI.delete(currentItem._id);
      response.status === 204
        ? alert("Cluster successfully deleted!")
        : alert("Uups! Something went wrong!");
    } catch (error) {
      console.log(error);
    }
  };
  const onUpdateClick = async () => {
    try {
      const response = await ClusterAPI.update(currentItem);
      response.status === 202
        ? alert("Cluster successfully updated!")
        : alert("Uups! Something went wrong!");
    } catch (error) {
      console.log(error);
    }
  };

  const onReserveClick = async () => {
    try {
      const response = await ClusterAPI.update(currentItem);
      response.status === 202
        ? alert("Cluster successfully updated!")
        : alert("Uups! Something went wrong!");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <table className="table table-hover m-3">
        <thead>
          <tr>
            <th className="text-center col-md-1">Nr</th>
            <th className="text-center col-md-2">Name</th>
            <th className="text-center col-md-6">Beschreibung</th>
            <th className="text-center col-md-1">Reservieren</th>
            <th className="text-center col-md-1">Bearbeiten</th>
            <th className="text-center col-md-1">Löschen</th>
          </tr>
        </thead>
        <tbody>
          {cluster?.map((clusterItem, index) => {
            return (
              <ClusterItem
                key={clusterItem._id}
                clusterItem={clusterItem}
                count={++index}
                setCurrentItem={setCurrentItem}
              ></ClusterItem>
            );
          })}
        </tbody>
      </table>

      <ConfirmDialog
        id={"clusterDeletion"}
        accept={{ caption: "Löschen", onClick: onDeleteClick }}
        title={"Cluster Löschen"}
        text={`Möchten Sie ${currentItem?.name} wirklich löschen?`}
      />
      <ClusterUpdate
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        onSubmit={onUpdateClick}
      />
      <ClusterReserve
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        onSubmit={onReserveClick}
      />
    </>
  );
};
export default ClusterTable;
