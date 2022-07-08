import ClusterAPI from "api/cluster";
import ConfirmDialog from "components/dialog/ConfirmDialog";
import { useEffect, useState } from "react";
import ReservationItem from "./ReservationItem";
import ClusterUpdate from "./ClusterUpdate";
import { IReservation } from "../../types/Reservation";

const ClusterTable = () => {
  const clusterB: IReservation[] = [
    {
      _id: "1",
      cluster: "Cluster 1",
      from: 1,
      to: 100,
      nodes: 2,
    },
    {
      _id: "2",
      cluster: "Cluster 2",
      from: 100,
      to: 2,
      nodes: 3,
    },
  ];
  const initCluster = {
    cluster: "Cluster 1",
    from: 1,
    to: 100,
    nodes: 2,
  };

  const [cluster, setCluster] = useState(clusterB);
  const [currentItem, setCurrentItem] = useState<IReservation>(initCluster);

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
        ? setCluster(cluster.filter((el) => el._id != currentItem._id))
        : alert("Uups! Something went wrong!");
    } catch (error) {
      console.log(error);
    }
  };

  const onUpdateClick = async (updatedItem: ICluster) => {
    try {
      const response = await ClusterAPI.update(updatedItem);
      if (response.status === 200) {
        const newCluster = cluster.map((el) => {
          return el._id === updatedItem._id ? updatedItem : el;
        });
        setCluster(newCluster);
      } else {
        alert("Uups! Something went wrong!");
      }
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
            <th className="text-center col-md-3">Cluster</th>
            <th className="text-center col-md-3">Von</th>
            <th className="text-center col-md-3">Bis</th>
            <th className="text-center col-md-1">Bearbeiten</th>
            <th className="text-center col-md-1">Löschen</th>
          </tr>
        </thead>
        <tbody>
          {cluster?.map((clusterItem, index) => {
            return (
              <ReservationItem
                key={clusterItem._id}
                clusterItem={clusterItem}
                count={++index}
                setCurrentItem={setCurrentItem}
              ></ReservationItem>
            );
          })}
        </tbody>
      </table>

      <ConfirmDialog
        id={"clusterDeletion"}
        accept={{ caption: "Löschen", onClick: onDeleteClick }}
        title={"Cluster Löschen"}
        text={`Möchten Sie die Reservierung wirklich löschen?`}
      />
      <ClusterUpdate currentItem={currentItem} onSubmit={onUpdateClick} />
    </>
  );
};
export default ClusterTable;
