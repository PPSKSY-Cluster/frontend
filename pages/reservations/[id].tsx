import { useEffect, useState } from "react";
import Main from "components/main/Main";
import { useRouter } from "next/router";
import ReservationAPI from "api/reservation";
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
    nodes: 0,
    startTime: 0,
    endTime: 0,
  });
  const router = useRouter();
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

  return (
    <Main>
      <div className="container-fluid p-4">
        <h2 className="mb-3">Reservation</h2>
        <form onSubmit={() => {}}>
          <div className="d-none d-lg-block">
            <div className="form-group col mb-2">
              <label>Reservation Id</label>
              <input
                type="text"
                className="form-control"
                value={currentRes._id}
                readOnly
              />
            </div>
            <div className="row g-3">
              <div className="form-group col mb-2">
                <label>Cluster Id</label>
                <input
                  type="text"
                  className="form-control"
                  value={currentRes.clusterID}
                  readOnly
                />
              </div>
              <div className="form-group col mb-2">
                <label>Anzahl der Nodes</label>
                <input
                  type="text"
                  className="form-control"
                  value={currentRes.nodes}
                  readOnly
                />
              </div>
            </div>
            <div className="row g-3">
              <div className="form-group col mb-2">
                <label>Von</label>
                <input
                  type="text"
                  className="form-control"
                  value={new Date(currentRes.startTime).toUTCString()}
                  readOnly
                />
              </div>
              <div className="form-group col mb-2">
                <label>Bis</label>
                <input
                  type="text"
                  className="form-control"
                  value={new Date(currentRes.endTime).toUTCString()}
                  readOnly
                />
              </div>
            </div>
          </div>
        </form>
        <button className="btn btn-primary" onClick={() => onDeleteClick()}>
          Stornieren
        </button>
        <button className="btn btn-secondary">Bestätigen</button>
      </div>
    </Main>
  );
};
export default ReservationSinglePage;
