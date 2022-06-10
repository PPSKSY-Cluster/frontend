import { FC } from "react";

//interface Props {}

const Navbar = ({use, clus, opt}) => {
  return (
    <>
      <nav className="navbar navbar-expand-md border-bottom border-primary fixed-top bg-white">
        <div className="container-fluid">
          <a className="navbar-brand text-primary fw-bold fs-4" href="#">
            Cluster Thruster
          </a>
          <div className="d-md-none">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
            >
              <i
                className="bi bi-list border border-dark rounded px-2"
                style={{ fontSize: "2rem" }}
              ></i>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav me-auto mb-lg-0">
              <button className="list-group-item list-group-item-action rounded" onClick ={clus}>
                Cluster
              </button>
              <button className="list-group-item list-group-item-action rounded" onClick ={use}>
                User
              </button>
            </div>
            <div className ="pull-right">
              <button className="list-group-item list-group-item-action rounded" onClick ={opt}>
                  Options
              </button>
            </div>  
            <button className="btn btn-sm btn-outline-grey" type="button">
              Abmelden
            </button>
          </div>
        </div>
      </nav>
      <div
        className="collapse border-bottom border-primary"
        id="navbarToggleExternalContent"
      >
        <div className="list-group">
          <button className="btn btn-sm btn-outline-grey m-3" type="button">
            <i className="bi bi-box-arrow-in-right" />
            &nbsp; Abmelden
          </button>
          <a
            className="list-group-item list-group-item-action"
            aria-current="page"
            href="#"
          >
            Cluster
          </a>
          <a className="list-group-item list-group-item-action" href="#">
            Options
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
