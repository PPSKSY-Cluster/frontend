import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { RootState } from "src/store";

const Notification = () => {
  const notificationState = useSelector(
    (state: RootState) => state.notifications
  );
  const [reservations, setReservations] = useState();

  useEffect(() => {}, []);

  const onDeleteClick = async () => {};

  const notifications = {
    position: "fixed",
    bottom: "10px",
    left: "10px",
    maxWidth: "400px",
    width: "400px",
  };

  return (
    <>
      {notificationState != 0 ? (
        <div style={notifications}>
          {notificationState == 1 ? (
            <div className="alert alert-success" role="alert">
              Erfolgreich ausgeführt!
            </div>
          ) : (
            <>
              <p>{notificationState} </p>
              <div className="alert alert-danger" role="alert">
                Fehler, bitte versuche es erneut!
              </div>
            </>
          )}
        </div>
      ) : null}
    </>
  );
};
export default Notification;
