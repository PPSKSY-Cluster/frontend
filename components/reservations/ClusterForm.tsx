import axios from "axios";
import cluster from "cluster";
import React, {
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { ICluster } from "types/Cluster";

interface ClusterFormProps {
  title: string;
  action: {
    title: string;
    onSubmit: (updatedItem: ICluster) => {};
  };
  currentItem?: ICluster;
  setCurrentItem?: Dispatch<SetStateAction<ICluster>>;
}

const ClusterForm: FC<ClusterFormProps> = ({
  title,
  action,
  currentItem,
  ...otherProps
}) => {
  const nodes = useRef(null);
  const from = useRef(null);
  const to = useRef(null);

  /* TO DO: get cluster name and node count from id */

  let cluster = {
    name: "Cluster 1",
    nodes: 10,
  };

  const createReservation = (e) => {
    e.preventDefault();

    // TODO?- do i need to fetch the user id first?

    const data = {
      //clusterId: cluster._id,
      nodes: nodes.current.value,
      startTime: Math.floor(new Date(from.current.value).getTime() / 1000),
      endTime: Math.floor(new Date(to.current.value).getTime() / 1000),
    };

    console.log(data);

    axios
      .put("http://localhost:8080/api/reservations", data)
      .then()
      .catch((err) => console.log(err));
  };

  const nodesOptions = [];
  for (let i = 1; i < cluster.nodes; i++) {
    nodesOptions.push(<option>{i}</option>);
  }
  return (
    <div className="container-fluid p-4">
      <h2 className="mb-3">{cluster.name}</h2>

      <form onSubmit={createReservation}>
        <div className="d-none d-lg-block">
          <label className="form-label">Anzahl der Nodes:</label>
          <div className="form-group mb-2">
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              ref={nodes}
            >
              {nodesOptions}
            </select>
          </div>
          <div className="form-group g-3 mb-2">
            <label className="form-label">Von:</label>
            <input
              className="form-control"
              type="date"
              name="due-date"
              id="due-date"
              v-model="date"
              ref={from}
            ></input>
          </div>
          <div className="form-group">
            <label className="form-label">Bis:</label>
            <input
              className="form-control"
              type="date"
              name="due-date"
              id="due-date"
              v-model="date"
              ref={to}
            ></input>
          </div>
          <div className="form-group mb-2"></div>
          <div className="d-grid gap-2 d-lg-flex justify-content-lg-end">
            <button className="btn btn-primary">Reservierung ändern</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default ClusterForm;
