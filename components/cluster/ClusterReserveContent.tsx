import { FC, useEffect, useRef, useState } from "react";
import { ICluster } from "../../types/Cluster";
import { IReservation } from "../../types/Reservation";
import ReservationAPI from "api/reservation";

interface Props {
  cluster: ICluster;
}

const ClusterReservation: FC<Props> = ({ cluster }) => {
  const [showAllReservations, setShowAllReservations] = useState(false);
  const nodes = useRef(null);
  const from = useRef(null);
  const to = useRef(null);

  const [ClusterReservations, setClusterReservations] = useState(null);
  const [clusterId, setClusterId] = useState(cluster._id);

  useEffect(() => {
    async function getReservationsOfCluster() {
      try {
        console.log(cluster._id);
        const response = await ReservationAPI.getAllByClusterId(cluster._id);
        if (response.data.length > 0) setClusterReservations(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getReservationsOfCluster();
  }, []);

  async function APIcreateReservation(reservation: IReservation) {
    try {
      const response = await ReservationAPI.create(reservation);
      alert("Erfolgreich reserviert");
    } catch (error) {
      console.log(error);
    }
  }

  const createReservation = (e) => {
    e.preventDefault();

    const newReservation: IReservation = {
      clusterID: cluster._id,
      userID: localStorage.getItem("userId"),
      nodes: parseInt(nodes.current.value),
      startTime: Math.floor(new Date(from.current.value).getTime() / 1000),
      endTime: Math.floor(new Date(to.current.value).getTime() / 1000),
    };

    APIcreateReservation(newReservation);
  };

  const nodesOptions = [];
  for (let i = 1; i <= cluster.nodes; i++) {
    nodesOptions.push(<option key={i.toString()}>{i}</option>);
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
            <button className="btn btn-primary" data-bs-dismiss="modal">
              Reservieren
            </button>
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
        {ClusterReservations?.map((reservationItem: IReservation, index) => {
          const fromDate = new Date(reservationItem.startTime * 1000);
          const toDate = new Date(reservationItem.endTime * 1000);
          return (
            <div key={index.toString()}>
              <p>
                {" "}
                {reservationItem.nodes} Nodes, vom{" "}
                {fromDate.toLocaleDateString()} bis{" "}
                {toDate.toLocaleDateString()}
              </p>
              <hr />
            </div>
          );
        })}
      </div>
    </>
  );

  return showAllReservations ? allReservations : createReservationForm;
};

export default ClusterReservation;
