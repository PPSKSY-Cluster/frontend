import { FC } from "react";
import React from "react";
import ConfirmDialog from "components/dialog/ConfirmDialog";
import UserAPI from "api/user";
import Router from "next/router";

const New = () => {
  const goCluster = () => {
    return Router.push("./cluster")
  }

  const goReserve = () => {
    return Router.push("./reservations")
  }
  

  return (
    <>
      <div>
        <h1 style={{color:"#ae0000"}}>How to: Reservieren</h1>
        <b>
          <ol style={{font:"bold", fontSize:"125%"}}>
            <li> Um eine Reservierung zu erstellen, besuche den <a onClick={() => goCluster()} style={{color:"blue", cursor:"pointer", textDecoration:"underline"}}>Cluster</a> Tab </li>
            <li> Suche deine gewünschte Ressource raus und klicke auf das <text style={{color:"green"}}>Reservierungssymbol</text> <i className="bi bi-calendar-plus" style={{marginLeft:"5px"}}></i></li>
            <li> Wähle die benötigte Anzahl an <text style={{color:"green"}}>Nodes</text> und den <text style={{color:"green"}}>Zeitraum</text> der Reservierung</li>
            <li> Klicke auf <button type="button" className="btn btn-primary"> Reservieren </button> und überprüfe im <a onClick={() => goReserve()} style={{color:"blue", cursor:"pointer", textDecoration:"underline"}}>Reservierungen</a> Tab deine Reservierung</li>
          </ol>
        </b>
      </div>
    </>
  )
};
export default New;
