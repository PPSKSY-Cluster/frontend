import { FC } from "react";
import React from "react";
import ConfirmDialog from "components/dialog/ConfirmDialog";
import UserAPI from "api/user";
import Router from "next/router";

const New = () => {
  const goCluster = () => {
    return Router.push("./cluster");
  };

  const goReserve = () => {
    return Router.push("./reservations");
  };

  return (
    <>
      <div className="accordion col-sm-8 py-5 mx-auto">
        <h3 style={{}}>How to: Reservieren</h3>
        <b>
          <ol className="lead" style={{ fontSize: "130%" }}>
            <li>
              {" "}
              Um eine Reservierung zu erstellen, besuche den{" "}
              <a
                onClick={() => goCluster()}
                style={{
                  color: "blue",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                Cluster
              </a>{" "}
              Tab{" "}
            </li>
            <li>
              {" "}
              Suche deine gewünschte Ressource raus und klicke auf das{" "}
              <span style={{ color: "#c50e1f" }}>Reservierungssymbol</span>{" "}
              <i
                className="bi bi-calendar-plus"
                style={{ marginLeft: "5px" }}
              ></i>
            </li>
            <li>
              {" "}
              Wähle die benötigte Anzahl an{" "}
              <span style={{ color: "#c50e1f" }}>Nodes</span> und den{" "}
              <span style={{ color: "#c50e1f" }}>Zeitraum</span> der
              Reservierung
            </li>
            <li>
              {" "}
              Klicke auf{" "}
              <button type="button" className="btn btn-primary">
                {" "}
                Reservieren{" "}
              </button>{" "}
              und überprüfe im{" "}
              <a
                onClick={() => goReserve()}
                style={{
                  color: "blue",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                Reservierungen
              </a>{" "}
              Tab deine Reservierung
            </li>
          </ol>
        </b>
      </div>
    </>
  );
};
export default New;
