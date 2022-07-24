import { useEffect, useRef, useState } from "react";
import Main from "components/main/Main";
import { useRouter } from "next/router";
import ReservationAPI from "api/reservation";
import ClusterAPI from "api/cluster";
import { IReservation } from "types/Reservation";
import { setDefaultHeader, validateAccessToken } from "api/API";

import { useDispatch } from "react-redux";
import { Dispatch } from "src/store";

const ReservationSinglePage = () => {
  const dispatch = useDispatch<Dispatch>();

  const [currentRes, setCurrentRes] = useState<IReservation>({
    _id: "",
    clusterID: "",
    userID: "",
    currentNodes: 0,
    startTime: 0,
    endTime: 0,
  });

  const router = useRouter();
  const currentItem = currentRes;

  const nodes = useRef(null);
  const from = useRef(null);
  const to = useRef(null);

  const [clusterName, setClusterName] = useState("...");

  const [rNodes, setRNodes] = useState(1);
  const [rFrom, setRFrom] = useState("");
  const [rTo, setRTo] = useState("");

  useEffect(() => {
    async function onStart() {
      if (router.isReady) {
        let { id } = router.query;
        console.log(id);
        id = Array.isArray(id) ? id[0] : id;
        const token = await validateAccessToken();
        if (!token) {
          return localStorage.setItem("afterSignIn", `reservation:${id}`);
        }
        setDefaultHeader("Authorization", token);
        ReservationAPI.getById(id).then((response) => {
          setCurrentRes(response.data);
        });
      }
    }
    onStart();
  }, [router.isReady]);

  const init = () => {
    setRNodes(currentItem.nodes);
    setRFrom(
      new Date(currentItem.startTime * 1000).toISOString().split("T")[0]
    );
    setRTo(new Date(currentItem.endTime * 1000).toISOString().split("T")[0]);
  };
  useEffect(() => {
    init();

    async function getClusterName() {
      try {
        const response = await ClusterAPI.getById(currentItem.clusterID);
        setClusterName(response.data.name);
      } catch (error) {
        console.log(error);
      }
    }
    getClusterName();
  }, [currentItem]);

  const createReservation = (e) => {
    e.preventDefault();

    const updatedReservation: IReservation = {
      _id: currentItem._id,
      clusterID: currentItem.clusterID,
      userID: currentItem.userID,
      nodes: rNodes,
      startTime: Math.floor(new Date(rFrom).getTime() / 1000),
      endTime: Math.floor(new Date(rTo).getTime() / 1000),
    };

    console.log(updatedReservation);

    try {
      const response = ReservationAPI.update(updatedReservation);
      if (response.status === 200) {
        dispatch.notifications.success("");
      } else {
        dispatch.notifications.error("");
      }
    } catch (error) {}
  };

  const nodesOptions = [];
  for (let i = 1; i <= rNodes; i++) {
    nodesOptions.push(<option key={i.toString()}>{i}</option>);
  }

  const onDeleteClick = async () => {
    try {
      const response = await ReservationAPI.delete(currentRes._id);
      response.status === 204
        ? dispatch.notifications.success("")
        : dispatch.notifications.error("");
    } catch (error) {
      console.log(error);
    }
  };

  const startTime = new Date(currentItem.startTime);

  return (
    <Main>
      <div className="col-sm-8 py-5 mx-auto">
        <h2>{clusterName}</h2>
        <form onSubmit={createReservation}>
          <div className=" d-lg-block">
            <label className="form-label">Anzahl der Nodes:</label>
            <div className="form-group mb-2">
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                ref={nodes}
                defaultValue={rNodes}
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
                value={rFrom}
                onChange={(e) => {
                  setRFrom(e.target.value);
                }}
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
                value={rTo}
                onChange={(e) => {
                  setRTo(e.target.value);
                }}
              ></input>
            </div>
            <div className="form-group mb-2"></div>
            <div className="d-grid gap-2 d-lg-flex justify-content-lg-end">
              <button
                className="btn btn-primary"
                onClick={() => onDeleteClick()}
              >
                Stornieren
              </button>
              <button className="btn btn-secondary">Reservierung ändern</button>
            </div>
          </div>
        </form>
      </div>
    </Main>
  );
};
export default ReservationSinglePage;
