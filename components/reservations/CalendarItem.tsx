import ReservationAPI from "api/reservation";
import React, { FC, useEffect, useState } from "react";
import { ICluster } from "types/Cluster";
import { IReservation } from "types/Reservation";

interface IDate {
  time: number;
  day: number;
  month: string;
  year: number;
}
interface CalenderItemProps {
  cluster: ICluster;
  dates: IDate[];
  setCurrentItem: (cluster: ICluster) => void;
  setCurrentDate: (date: number) => void;
}
const CalendarItem: FC<CalenderItemProps> = ({
  cluster,
  dates,
  setCurrentItem,
  setCurrentDate,
}) => {
  const [reservations, setReservations] = useState<IReservation[]>();
  useEffect(() => {
    async function getReservations() {
      try {
        setReservations(
          (await ReservationAPI.getAllByClusterId(cluster._id)).data
        );
      } catch (error) {
        console.log(error);
      }
    }
    getReservations();
  }, []);
  const getAvailableNodes = (date:IDate) => {
    let maxNodes = cluster.nodes;
    const reservedClusters =
      reservations?.filter((reservation) => {
        return (
          date.time >= reservation.startTime * 1000 &&
          date.time <= reservation.endTime * 1000
        );
      }) || [];
    for (const rc of reservedClusters) {
      maxNodes -= rc.nodes;
    }
    return maxNodes;
  };
  const NodeCell = ({ date }) => {
    const nodes = getAvailableNodes(date);
    const color = nodes === 0 ? "bg-danger" : "bg-success";

    const onCellClick = () => {
        if(nodes !== 0){
            setCurrentItem(cluster);
            setCurrentDate(date.time);
        }
    };
    return (
      <td
        className={`text-center ${color}`}
        onClick={onCellClick}
        data-bs-toggle="modal"
        data-bs-target={"#clusterReserve"}
      >
        {nodes}
      </td>
    );
  };
  return (
    <tr>
      <td>{cluster.name}</td>
      {dates.map((date, index) => {
        return <NodeCell key={index} date={date} />;
      })}
    </tr>
  );
};
export default CalendarItem;
