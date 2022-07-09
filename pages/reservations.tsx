import { useState } from "react";
import Main from "components/main/Main";
import Sidebar from "components/sidebar/Sidebar";
import ReservationTable from "components/reservations/ReservationsTable";
import { IMobileMenu, PageType } from "types/MobileMenu";

const pages: PageType[] = [
  { caption: "Reservierungen", action: "showTable" },
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
            title="Cluster"
            elements={pages}
            onClickHandler={setSubPage}
          />
        </div>
        {subPage.action === "showTable" && <ReservationTable />}
      </div>
    </Main>
  );
};
export default Cluster;
