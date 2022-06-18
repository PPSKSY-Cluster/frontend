import Popup from "components/popup/Popup";
import React, { Dispatch, FC, SetStateAction } from "react";
import { ICluster } from "types/Cluster";
import ClusterForm from "./ClusterForm";

interface ClusterUpdateProps {
  currentItem: ICluster;
  setCurrentItem: Dispatch<SetStateAction<ICluster>>;
  onSubmit: () => {};
}
const ClusterUpdate: FC<ClusterUpdateProps> = ({
  currentItem,
  onSubmit,
  setCurrentItem,
}) => {
  return (
    <Popup id={"clusterUpdate"} title={"Cluster verändern"}>
      <ClusterForm
        title={""}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        action={{ title: "Änderungen speichern", onSubmit }}
      />
    </Popup>
  );
};
export default ClusterUpdate;
