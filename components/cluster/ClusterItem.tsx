import { FC } from "react";
import { ICluster } from "../../types/Cluster";

interface ClusterItemProps {
  clusterItem: ICluster;
  count: number;
  setCurrentItem: (item: ICluster) => void;
}

const ClusterItem: FC<ClusterItemProps> = ({
  clusterItem,
  count,
  setCurrentItem,
}) => {
  if(localStorage.getItem("userType") == "2" || localStorage.getItem("userType") == "1"){//Admin
    return (
      <>
        <tr>
          <td className="text-center">{count}</td>
          <td className="text-center">{clusterItem.name}</td>
          <td className="text-center">{clusterItem.description}</td>
          <td className="text-center">
            <a onClick={() => setCurrentItem(clusterItem)}>
              <i
                className="bi bi-calendar-plus"
                data-bs-toggle="modal"
                data-bs-target="#clusterReserve"
              />
            </a>
          </td>
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
}else{
  return (
    <>
      <tr>
        <td className="text-center">{count}</td>
        <td className="text-center">{clusterItem.name}</td>
        <td className="text-center">{clusterItem.description}</td>
        <td className="text-center">
          <a onClick={() => setCurrentItem(clusterItem)}>
            <i
              className="bi bi-calendar-plus"
              data-bs-toggle="modal"
              data-bs-target="#clusterReserve"
            />
          </a>
        </td>
      </tr>
    </>
  );
}
};
export default ClusterItem;
