import { FC, useState } from "react";
import ClusterAPI from "api/cluster";
import ClusterForm from "./ClusterForm";
import { ICluster } from "types/Cluster";

const ClusterCreation: FC = () => {
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
      response.status === 201 ? alert("Success") : alert("Failed");
    } catch (error) {
      console.log(error);
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
