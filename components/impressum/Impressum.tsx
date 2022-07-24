import { FC } from "react";
import React from "react";
import ConfirmDialog from "components/dialog/ConfirmDialog";
import UserAPI from "api/user";
import Router from "next/router";
import Link from "next/link";

const Impressum = () => {
  return (
    <>
      <div className="accordion col-sm-8 py-5 mx-auto">
        <h3>
          Cluster Thruster ist ein internes Clusterressourcen-Verwaltungstool
          der{" "}
          <a target="_blank" href="https://www.tu.berlin/">
            TU-Berlin
          </a>
          .
        </h3>
        <p></p>
        <div className="lead" style={{ fontSize: "130%" }}>
          <p>
            {" "}
            Entwickelt wurde <span style={{}}>Cluster Thruster</span> im Rahmen
            des Programmierpraktikums Skalierbare Systeme unter Beteiligung von
          </p>
          <ul style={{ listStyle: "none" }}>
            <li>
              <span style={{}}>Backend</span>
              <ul style={{ listStyle: "none" }}>
                <li>Luis Englaender</li>
                <li>Veit Ferdinand Laule</li>
              </ul>
            </li>
            <li>
              <span style={{}}>Frontend</span>
              <ul style={{ listStyle: "none" }}>
                <li>Oliver Morthen Fuhrmann</li>
                <li>Bilguun Gantulga</li>
                <li>Vladislav Schulmeister</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Impressum;
