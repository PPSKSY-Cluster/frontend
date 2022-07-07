import { FC } from "react";
import { ICluster } from "../../types/Cluster";
import { useSelector } from "react-redux";
import { RootState } from "src/store";

interface Props {
  cluster: ICluster;
}

const SingleCluster: FC<Props> = ({ cluster }) => {
  /*
    "_id": "62c0496dd81c6ccc8531d1f1",
    "clusterID": "000000000000000000000000",
    "userID": "000000000000000000000000",
    "nodes": 0,
    "startTime": 0,
    "endTime": 0,
    "isExpired": false

*/
  const nodesOptions = [];
  for (let i = 0; i < cluster.nodes; i++) {
    nodesOptions.push(<option>{i}</option>);
  }

  const jwt: string = useSelector((state: RootState) => state.jwt);
  return (
    <>
      <h2 className="text-center">{cluster.name}</h2>
      <div>
        Anzahl der Nodes:
        {/*
        TODO only show the maximum availbe number
        onyl
        */}
        <div className="form-group">
          <select className="form-control" id="exampleFormControlSelect1">
            {nodesOptions}
          </select>
        </div>
        <div className="form-group g-3">
          <label>Von:</label>
          <input
            className="form-control"
            type="date"
            name="due-date"
            id="due-date"
            v-model="date"
          ></input>
        </div>
        <div className="form-group">
          <label>Bis:</label>
          <input
            className="form-control"
            type="date"
            name="due-date"
            id="due-date"
            v-model="date"
          ></input>
        </div>
        <div className="form-group mb-2"></div>
        <div className="form-group form-outline mb-4">
          <button className="btn btn-primary">Reservieren</button>
        </div>
      </div>
    </>
  );
};

export default SingleCluster;
