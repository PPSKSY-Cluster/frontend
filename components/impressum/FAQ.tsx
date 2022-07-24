import { FC } from "react";
import React from "react";
import ConfirmDialog from "components/dialog/ConfirmDialog";
import UserAPI from "api/user";
import Router from "next/router";
import { PageType } from "types/MobileMenu";

const FAQ = () => {
  const goCluster = () => {
    return Router.push("./cluster");
  };

  return (
    <>
      <div className="accordion col-sm-8 py-5 mx-auto">
        <div
          className="card"
          style={{ marginBottom: "10px", marginTop: "40px", display: "flow" }}
        >
          <div className="card-header" id="headingOne">
            <h5 className="mb-0">
              <button
                className="btn btn-link"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{}}
              >
                Wozu kann ich Cluster Thruster benutzen?
              </button>
            </h5>
          </div>

          <div
            id="collapseOne"
            className="collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordion"
          >
            <div className="card card-body">
              Mithilfe von Cluster Thruster können Studenten und
              Universitäts-Mitarbeiter Cluster Ressourcen reservieren und
              nutzen, die von der TU Berlin zur Verfügung gestellt werden.{" "}
            </div>
          </div>
        </div>
        <div className="card" style={{ marginBottom: "10px", width: "auto" }}>
          <div className="card-header" id="headingTwo">
            <h5 className="mb-0">
              <button
                className="btn btn-link collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={{}}
              >
                Wie reserviere ich Cluster Ressourcen?
              </button>
            </h5>
          </div>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordion"
          >
            <div
              className="card card-body"
              style={{ display: "inline-block", border: "none" }}
            >
              Cluster Ressourcen können im{" "}
              <a
                onClick={() => goCluster()}
                style={{ color: "blue", cursor: "pointer" }}
              >
                Cluster
              </a>{" "}
              Tab reserviert werden. Für eine genauere Beschreibung bitte den{" "}
              <a style={{ color: "green" }}>Neu hier?</a> Reiter besuchen.{" "}
            </div>
          </div>
        </div>
        <div
          className="card"
          style={{ marginBottom: "10px", boxSizing: "border-box" }}
        >
          <div className="card-header" id="headingThree">
            <h5 className="mb-0">
              <button
                className="btn btn-link collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={{}}
              >
                Was kann ich tun, wenn ich Probleme mit meiner Reservierung
                habe?
              </button>
            </h5>
          </div>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordion"
          >
            <div className="card card-body">
              Bei dringenden Fragen zu einer Reservierung steht der
              Kundenservice der TU Berlin jederzeit telefonisch oder per E-Mail
              ein Mitarbeiter der TU zur Verfügung.
              <a href="https://www.tu.berlin/kontakt" target="_blank">
                {" "}
                TU Kontakt
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FAQ;
