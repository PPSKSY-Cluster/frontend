import axios from "node_modules/axios/index";
import { FC } from "react";
import { ICluster } from "../../types/Cluster";

interface Props {
  clusterItem: ICluster;
  count: number;
}

const ClusterItem: FC<Props> = ({ clusterItem, count }) => {
  const onDeleteClick = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/cresources/${clusterItem._id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSwiZXhwIjoxNjU1MTI1NTI3LCJ1c2VybmFtZSI6ImZvbyJ9.ZBDkby7NBxAW5jWtcwmo1BFFPPqHGUYkIxowqPgKMnQ",
          },
        }
      );
      response.status === 204 ? alert("Cluster successfully deleted!") : alert("Uups! Something went wrong!");
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
