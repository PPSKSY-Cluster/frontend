import { FC } from "react";
import Link from "next/link";
import BarItem from "components/sidebar/BarItem";
import { IMobileMenu } from "types/MobileMenu";
import { ILinks } from "types/Links";
import Router from "next/router";

const links: ILinks[] = [
  {
    id: "cluster",
    caption: "Cluster",
    href: "/cluster",
  },
  {
    id: "reservations",
    caption: "Reservierungen",
    href: "/reservations",
  },
  {
    id: "users",
    caption: "Users",
    href: "/users",
  },
  {
    id: "options",
    caption: "Options",
    href: "/options",
  },
];
interface NavbarProps {
  mobileMenu?: IMobileMenu;
}

const Navbar: FC<NavbarProps> = ({ mobileMenu }) => {
  const abmelden = () => {
    localStorage.setItem("jwt", "");
    Router.push("/");
  };

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
              data-bs-target="#navBarMobile"
              aria-controls="navBarMobile"
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
              {links.map((el, index) => {
                return (
                  <Link href={el.href} key={index}>
                    <a
                      className="list-group-item list-group-item-action rounded"
                      href="#"
                    >
                      {el.caption}
                    </a>
                  </Link>
                );
              })}
            </div>
            <button
              className="btn btn-sm btn-outline-grey"
              type="button"
              onClick={() => abmelden()}
            >
              Abmelden
            </button>
          </div>
        </div>
      </nav>
      <div className="collapse border-bottom border-primary" id="navBarMobile">
        <div className="list-group">
          <button className="btn btn-sm btn-outline-grey m-3" type="button">
            <i className="bi bi-box-arrow-in-right" />
            &nbsp; Abmelden
          </button>
          {links.map((el, index) => {
            return (
              <div key={index}>
                <Link href={el.href}>
                  <a
                    className="list-group-item list-group-item-action"
                    href="#"
                  >
                    {el.caption}
                  </a>
                </Link>
                {mobileMenu && mobileMenu.id === el.id && (
                  <ul>
                    {mobileMenu.mobileSubPages.map((element, index) => {
                      return (
                        <BarItem
                          key={index}
                          element={element}
                          onClickHandler={mobileMenu.onClickHandler}
                          data-bs-toggle="collapse"
                          data-bs-target="#navBarMobile"
                        />
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
