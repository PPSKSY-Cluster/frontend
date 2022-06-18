import Popup from "components/popup/Popup";
import React, { Dispatch, FC, SetStateAction } from "react";
import { ICluster } from "types/Cluster";
import ClusterReserveContent from "./ClusterReserveContent";

interface ClusterUpdateProps {
  currentItem: ICluster;
  setCurrentItem: Dispatch<SetStateAction<ICluster>>;
  onSubmit: () => {};
}
const ClusterReserve: FC<ClusterUpdateProps> = ({
  currentItem,
  onSubmit,
  setCurrentItem,
}) => {
  return (
    <Popup id={"clusterReserve"} title={"Cluster Reservieren"}>
      <ClusterReserveContent cluster={currentItem} />
    </Popup>
  );
};
export default ClusterReserve;
