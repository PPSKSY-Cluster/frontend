import Popup from "components/popup/Popup";
import React, { Dispatch, FC, SetStateAction } from "react";
import { ICluster } from "types/Cluster";
import { IReservation } from "types/Reservation";
import ClusterForm from "./ReservationForm";

interface ClusterUpdateProps {
  currentItem: IReservation;
  onSubmit: (updatedItem: IReservation) => {};
}
const ClusterUpdate: FC<ClusterUpdateProps> = ({ currentItem, onSubmit }) => {
  return (
    <Popup
      id={"clusterUpdate"}
      title={"Reservierung verändern"}
      size="modal-xl"
    >
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
