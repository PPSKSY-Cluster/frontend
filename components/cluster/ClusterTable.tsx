import ClusterAPI from "api/cluster";
import ConfirmDialog from "components/dialog/ConfirmDialog";
import { useEffect, useState } from "react";
import { ICluster } from "../../types/Cluster";
import ClusterItem from "./ClusterItem";
import ClusterUpdate from "./ClusterUpdate";
import ClusterReserve from "./ClusterReserve";

import { useDispatch } from "react-redux";
import { Dispatch } from "src/store";

const ClusterTable = () => {
  const clusterB: ICluster[] = [
    {
      _id: "1",
      name: "Cluster 1",
      description: "RAM",
      nodes: 2,
      operatingSystem: "",
      type: 2,
    },
    {
      _id: "2",
      name: "Cluster 2",
      description: "CPU",
      nodes: 3,
      operatingSystem: "",
      type: 1,
    },
  ];
  const initCluster = {
    name: "",
    description: "",
    nodes: 1,
    operatingSystem: "",
    type: 0,
  };

  const dispatch = useDispatch<Dispatch>();

  const [cluster, setCluster] = useState(clusterB);
  const [currentItem, setCurrentItem] = useState<ICluster>(initCluster);

  useEffect(() => {
    async function getCluster() {
      try {
        const response = await ClusterAPI.getAll();
        if (response.data?.length > 0) setCluster(response.data);
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
        : dispatch.notifications.error("");
      response.status === 204 ? dispatch.notifications.success("") : null;
    } catch (error) {}
  };

  const onUpdateClick = async (updatedItem: ICluster) => {
    try {
      const response = await ClusterAPI.update(updatedItem);
      if (response.status === 200) {
        const newCluster = cluster.map((el) => {
          return el._id === updatedItem._id ? updatedItem : el;
        });
        setCluster(newCluster);
        dispatch.notifications.success("");
      } else {
        dispatch.notifications.error("");
      }
    } catch (error) {}
  };

  const onReserveClick = async () => {
    try {
      const response = await ClusterAPI.update(currentItem);
      response.status === 202
        ? dispatch.notifications.success("")
        : dispatch.notifications.error("");
    } catch (error) {}
  };
  
  if(localStorage.getItem("userType") && parseInt(localStorage.getItem("userType")) > 0){//Admin
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
              <th className="text-center col-md-1">L??schen</th>
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
          accept={{ caption: "L??schen", onClick: onDeleteClick }}
          title={"Cluster L??schen"}
          text={`M??chten Sie ${currentItem?.name} wirklich l??schen?`}
        />
        <ClusterUpdate
          currentItem={currentItem}
          onSubmit={onUpdateClick}
        />
        <ClusterReserve
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
          onSubmit={onReserveClick}
        />
      </>
    );
  }else{//User
    return(
      <>
      <table className="table table-hover m-3">
        <thead>
          <tr>
            <th className="text-center col-md-1">Nr</th>
            <th className="text-center col-md-3">Name</th>
            <th className="text-center col-md-6">Beschreibung</th>
            <th className="text-center col-md-2">Reservieren</th>
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
        accept={{ caption: "L??schen", onClick: onDeleteClick }}
        title={"Cluster L??schen"}
        text={`M??chten Sie ${currentItem?.name} wirklich l??schen?`}
      />
      <ClusterUpdate currentItem={currentItem} onSubmit={onUpdateClick} />
      <ClusterReserve
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
          onSubmit={onReserveClick}
        />
    </>
    );
  };
}
export default ClusterTable;
