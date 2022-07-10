import { FC, useRef, useState } from "react";
import { ICluster } from "../../types/Cluster";
import axios from "axios";

interface Props {
  cluster: ICluster;
}

const SingleCluster: FC<Props> = ({ cluster }) => {
  const [showAllReservations, setShowAllReservations] = useState(false);
  const nodes = useRef(null);
  const from = useRef(null);
  const to = useRef(null);

  const createReservation = (e) => {
    e.preventDefault();

    // TODO?- do i need to fetch the user id first?

    const data = {
      clusterId: cluster._id,
      nodes: parseInt(nodes.current.value),
      startTime: Math.floor(new Date(from.current.value).getTime() / 1000),
      endTime: Math.floor(new Date(to.current.value).getTime() / 1000),
    };

    console.log(data);

    const token =
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSwiZXhwIjoxNjU3NDM4Mjg3LCJ1c2VybmFtZSI6ImZvbyJ9.QgQk8lxRRZCVQAlSnZcfjvDPrBSNIs5F4viLY6IPYiB2_6YVs4RQ4L4ibfr840RjkgIMgfwsfK5O0Rwp_mWGEcVbpOnX8OxyHYI2HYTlkoJLwWsdZk406W4dOWeW7TP_22WzEx5xEmPYGbNU7gymKsBuxQmydEc_8UQJUTbTf_PJeMawzhzrYEfIqD1Tz8CRpbWsY9judYJEVitpgNXiL5MYWgiaqSC_OFnzN-IhoBNGMlGrhoam8UKP6ePk-BKtWHHjhYhuItDGPfWSk2FMKxYT4xS_S2_k4zHlNADI2zYmOdCDEbrWXNGpIf5cKzGg1UJcg-XM1uAsIBiqFvWUMg";
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .post("http://localhost:8080/api/reservations", data, config)
      .then()
      .catch((err) => console.log(err));
  };

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
  for (let i = 1; i < cluster.nodes; i++) {
    nodesOptions.push(<option>{i}</option>);
  }

  const createReservationForm = (
    <>
      <div className="form-group form-outline mb-4">
        <button
          className="btn btn-link"
          onClick={() => setShowAllReservations(!showAllReservations)}
        >
          Bisherige Reservierungen anzeigen
        </button>
      </div>
      <h2 className="text-center">{cluster.name}</h2>
      <div>
        <form onSubmit={createReservation}>
          <label className="form-label">Anzahl der Nodes:</label>
          {/*
        TODO only show the maximum availbe number
        onyl
        */}
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
            <button className="btn btn-primary">Reservieren</button>
          </div>
        </form>
      </div>
    </>
  );

  const allReservations = (
    <>
      <div className="form-group form-outline mb-4">
        <button
          className="btn btn-link"
          onClick={() => setShowAllReservations(!showAllReservations)}
        >
          Reservierung erstellen
        </button>
      </div>
      <div>
        <h5>Reservation 1</h5>
        <p>5 Nodes, vom 1.8.2022 bis 1.9.2022</p>
        <hr />
        <h5>Reservation 2</h5>
        <p>3 Nodes, vom 10.7.2022 bis 1.8.2022</p>
      </div>
    </>
  );

  return showAllReservations ? allReservations : createReservationForm;
};

export default SingleCluster;
