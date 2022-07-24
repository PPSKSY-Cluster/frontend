import { FC } from "react";
import React from "react";
import ConfirmDialog from "components/dialog/ConfirmDialog";
import UserAPI from "api/user";
import Router from "next/router";
import Link from "next/link";

const Impressum = () => {

  return (
    <>
        <div style={{marginTop:"25px"}}>
            <text style={{fontWeight:"bold", fontFamily:"sans-serif"}}>Cluster Thruster ist ein internes Clusterressourcen-Verwaltungstool der <a target="_blank" href="https://www.tu.berlin/">TU-Berlin</a>.</text>
            <p></p>
            <text> Entwickelt wurde <text style={{fontWeight:"bold"}}>Cluster Thruster</text> im Rahmen des Programmierpraktikums Skalierbare Systeme unter Beteiligung von</text>
            <ul style={{listStyle:"none"}}>
                <li><text style={{fontWeight:"bold"}}>Backend</text>
                    <ul style={{listStyle:"none"}}>
                        <li>Luis Englaender</li>
                        <li>Veit Ferdinand Laule</li>
                    </ul>
                </li>
                <li><text style={{fontWeight:"bold"}}>Frontend</text>
                    <ul style={{listStyle:"none"}}>
                        <li>Oliver Morthen Fuhrmann</li>
                        <li>Bilguun Gantulga</li>
                        <li>Vladislav Schulmeister</li>
                    </ul>
                </li>
            </ul>
        </div>
    </>
  );
};
export default Impressum;
