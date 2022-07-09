import Popup from "components/popup/Popup";
import React, { FC } from "react";
import { ICluster } from "types/Cluster";
import ClusterForm from "./ClusterForm";

interface ClusterUpdateProps {
  currentItem: ICluster;
  onSubmit: (updatedItem: ICluster) => {};
}
const ClusterUpdate: FC<ClusterUpdateProps> = ({ currentItem, onSubmit }) => {
  return (
    <Popup id={"clusterUpdate"} title={"Cluster verändern"} size="modal-xl">
      <ClusterForm
        title={""}
        currentItem={currentItem}
        action={{ title: "Änderungen speichern", onSubmit }}
        data-bs-toggle="modal"
        data-bs-target="#clusterUpdate"
      />
    </Popup>
  );
};
export default ClusterUpdate;
