import { FC } from "react";
import { ICluster } from "../../types/Cluster";

interface ClusterItemProps {
  clusterItem: ICluster;
  count: number;
  setDeleteItem: (item: ICluster) => void;
}

const ClusterItem: FC<ClusterItemProps> = ({
  clusterItem,
  count,
  setDeleteItem,
}) => {
  return (
    <>
      <tr>
        <td>{count}</td>
        <td className="text-center">{clusterItem.name}</td>
        <td className="text-center">{clusterItem.description}</td>
        <td className="text-center">
          <a>
            <i className="bi bi-pencil-square"></i>
          </a>
        </td>
        <td className="text-center">
          <a onClick={() => setDeleteItem(clusterItem)}>
            <i
              className="bi bi-trash-fill"
              data-bs-toggle="modal"
              data-bs-target="#clusterDeletion"
            ></i>
          </a>
        </td>
      </tr>
    </>
  );
};

export default ClusterItem;
