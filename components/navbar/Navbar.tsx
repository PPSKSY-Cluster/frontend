import { FC } from "react";
import Link from "node_modules/next/link";
import BarItem from "components/sidebar/BarItem";
import { MobileMenu } from "types/MobileMenu";

const pages = [
  {
    id: "cluster",
    title: "Cluster",
    href: "/cluster",
  },
  {
    id: "options",
    title: "Options",
    href: "/options",
  },
];
interface Props {
  mobileMenu?: MobileMenu;
}

const Navbar: FC<Props> = ({ mobileMenu }) => {
  return (
    <>
      <nav className="navbar navbar-expand-md border-bottom border-primary fixed-top bg-white">
        <div className="container-fluid">
          <Link href="/cluster">
            <a className="navbar-brand text-primary fw-bold fs-4" href="#">
              Cluster Thruster
            </a>
          </Link>
          <div className="d-md-none">
            <button
              className="navbar-toggler"
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
              {pages.map((el) => {
                return (
                  <Link href={el.href}>
                    <a
                      className="list-group-item list-group-item-action rounded"
                      href="#"
                    >
                      {el.title}
                    </a>
                  </Link>
                );
              })}
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
          {pages.map((el) => {
            return (
              <>
                <Link href={el.href}>
                  <a
                    className="list-group-item list-group-item-action"
                    href="#"
                  >
                    {el.title}
                  </a>
                </Link>
                {mobileMenu && mobileMenu.id === el.id && (
                  <ul>
                    {mobileMenu.mobileSubPages.map((element) => {
                      return (
                        <BarItem
                          element={element}
                          onClickHandler={mobileMenu.onClickHandler}
                        />
                      );
                    })}
                  </ul>
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
