import { FC, useState } from "react";
import ClusterAPI from "api/cluster";
import ClusterForm from "./ClusterForm";
import { ICluster } from "types/Cluster";

import { useDispatch } from "react-redux";
import { Dispatch } from "src/store";

const ClusterCreation: FC = () => {
  const dispatch = useDispatch<Dispatch>();

  const initCluster = {
    name: "",
    description: "",
    nodes: 1,
    operatingSystem: "",
    type: 0,
  };
  const [cluster] = useState<ICluster>(initCluster);

  const onSubmit = async (updatedItem: ICluster) => {
    try {
      const response = await ClusterAPI.create(updatedItem);
      response.status === 201
        ? dispatch.notifications.success("")
        : dispatch.notifications.error("");
    } catch (error) {
      //console.log(error);
    }
  };

  return (
    <ClusterForm
      title="Neues Cluster erstellen"
      action={{ title: "Erstellen", onSubmit }}
      currentItem={cluster}
    />
  );
};
export default ClusterCreation;
