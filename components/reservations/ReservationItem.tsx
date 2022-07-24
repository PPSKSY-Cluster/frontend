import { FC, useEffect, useState } from "react";
import ClusterAPI from "api/cluster";
import { IReservation } from "../../types/Reservation";

interface ClusterItemProps {
  reservationItem: IReservation;
  count: number;
  setCurrentItem: (item: IReservation) => void;
}

const ClusterItem: FC<ClusterItemProps> = ({
  reservationItem,
  count,
  setCurrentItem,
}) => {
  const [reservation, setReservation] = useState(reservationItem);
  const [clusterName, setClusterName] = useState("...");
  const fromDate = new Date(reservationItem.startTime * 1000);
  const toDate = new Date(reservationItem.endTime * 1000);

  useEffect(() => {
    async function getReservations() {
      try {
        const response = await ClusterAPI.getById(reservation.clusterID);
        setClusterName(response.data.name);
      } catch (error) {
        console.log(error);
      }
    }
    getReservations();
  }, []);

  return (
    <>
      <tr>
        <td className="text-center">{count}</td>
        <td className="text-center">{clusterName}</td>
        <td className="text-center">{reservationItem.nodes}</td>
        <td className="text-center">{fromDate.toLocaleDateString()}</td>
        <td className="text-center">{toDate.toLocaleDateString()}</td>
      </tr>
    </>
  );
};

export default ClusterItem;
