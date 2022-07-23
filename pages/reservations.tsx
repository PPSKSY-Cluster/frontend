import { useState } from "react";
import Main from "components/main/Main";
import Sidebar from "components/sidebar/Sidebar";
import ReservationOwnTable from "components/reservations/ReservationsOwnTable";
import ReservationAllTable from "components/reservations/ReservationsAllTable";
import { IMobileMenu, PageType } from "types/MobileMenu";
import Router from "next/router";

const pages: PageType[] = [
  { caption: "Eigene Reservierungen", action: "showOwnTable" },
  { caption: "Alle Reservierungen", action: "showAllTable" },
  // { caption: "Neues Cluster erstellen", action: "showCreation" },
];

const Cluster = () => {
  const [subPage, setSubPage] = useState(pages[0]);
  const mobileMenu: IMobileMenu = {
    id: "reservations",
    mobileSubPages: pages,
    onClickHandler: setSubPage,
  };
  return (
    <Main mobileMenu={mobileMenu}>
      <div className="d-flex flex-row">
        <div className="d-none d-md-block">
          <Sidebar
            title="Reservierungen"
            elements={pages}
            onClickHandler={setSubPage}
          />
        </div>
        {subPage.action === "showOwnTable" && <ReservationOwnTable />}
        {subPage.action === "showAllTable" && <ReservationAllTable />}
      </div>
        <button className="btn btn-primary m-3" style={{float:'right'}} onClick={()=>Router.push('/reservations/calendar')}>
        + Neue Reservierung
      </button>
    </Main>
  );
};
export default Cluster;
