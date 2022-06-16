import ClusterAPI from "api/cluster";
import { FC } from "react";
import { ICluster } from "../../types/Cluster";

interface ClusterItemProps {
  clusterItem: ICluster;
  count: number;
}

const ClusterItem: FC<ClusterItemProps> = ({ clusterItem, count }) => {
  const onDeleteClick = async () => {
    try {
      const response = await ClusterAPI.delete(clusterItem._id);
      response.status === 204
        ? alert("Cluster successfully deleted!")
        : alert("Uups! Something went wrong!");
    } catch (error) {
      console.log(error);
    }
  };
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
          <a onClick={onDeleteClick}>
            <i className="bi bi-trash-fill"></i>
          </a>
        </td>
      </tr>
    </>
  );
};

export default ClusterItem;
