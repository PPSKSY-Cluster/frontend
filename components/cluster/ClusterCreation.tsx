import { FC, useState } from "react";
import ClusterAPI from "api/cluster";
import ClusterForm from "./ClusterForm";
import { ICluster } from "types/Cluster";

const ClusterCreation: FC = () => {
  const [cluster, setCluster] = useState<ICluster>({
    name: "",
    description: "",
  });

  const onSubmit = async () => {
    try {
      const response = await ClusterAPI.create({
        name: cluster.name.trim(),
        description: cluster.description.trim(),
      });
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
      setCurrentItem={setCluster}
    />
  );
};
export default ClusterCreation;
