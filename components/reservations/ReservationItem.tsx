import { FC } from "react";
import { ICluster } from "../../types/Cluster";
import { IReservation } from "../../types/Reservation";

interface ClusterItemProps {
  clusterItem: IReservation;
  count: number;
  setCurrentItem: (item: IReservation) => void;
}

const ClusterItem: FC<ClusterItemProps> = ({
  clusterItem,
  count,
  setCurrentItem,
}) => {
  const fromDate = new Date(clusterItem.startTime * 1000);
  const toDate = new Date(clusterItem.endTime * 1000);

  return (
    <>
      <tr>
        <td className="text-center">{count}</td>
        <td className="text-center">{clusterItem._id}</td>
        <td className="text-center">{clusterItem.nodes}</td>
        <td className="text-center">{fromDate.toLocaleDateString()}</td>
        <td className="text-center">{toDate.toLocaleDateString()}</td>
        <td className="text-center">
          <a onClick={() => setCurrentItem(clusterItem)}>
            <i
              className="bi bi-pencil-square"
              data-bs-toggle="modal"
              data-bs-target="#clusterUpdate"
            />
          </a>
        </td>
        <td className="text-center">
          <a onClick={() => setCurrentItem(clusterItem)}>
            <i
              className="bi bi-trash-fill"
              data-bs-toggle="modal"
              data-bs-target="#clusterDeletion"
            />
          </a>
        </td>
      </tr>
    </>
  );
};

export default ClusterItem;
