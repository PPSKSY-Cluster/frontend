import { FC } from "react";
import { ICluster } from "../../types/Cluster";
import { IReservation } from "../../types/Reservation";

interface ClusterItemProps {
  clusterItem: IReservation;
  count: number;
  setCurrentItem: (item: ICluster) => void;
}

const ClusterItem: FC<ClusterItemProps> = ({
  clusterItem,
  count,
  setCurrentItem,
}) => {
  return (
    <>
      <tr>
        <td className="text-center">{count}</td>
        <td className="text-center">{clusterItem.cluster}</td>
        <td className="text-center">{clusterItem.from}</td>
        <td className="text-center">{clusterItem.to}</td>
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
