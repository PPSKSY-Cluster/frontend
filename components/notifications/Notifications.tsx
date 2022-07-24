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

  return (
    <>
      {notificationState != 0 ? (
        <div style={{
          position: "fixed",
          bottom: "10px",
          left: "10px",
          maxWidth: "400px",
          width: "400px",
        }}>
          {notificationState == 1 ? (
            <div className="alert alert-success" role="alert">
              Erfolgreich ausgeführt!
            </div>
          ) : (
            <>
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
