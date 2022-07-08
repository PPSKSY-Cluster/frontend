import { useState } from "react";
import Main from "components/main/Main";
import Sidebar from "components/sidebar/Sidebar";
import ClusterTable from "components/reservations/ReservationsTable";
import { IMobileMenu, PageType } from "types/MobileMenu";

const pages: PageType[] = [
  { caption: "Alle Cluster anzeigen", action: "showTable" },
  { caption: "Neues Cluster erstellen", action: "showCreation" },
];

const Cluster = () => {
  const [subPage, setSubPage] = useState(pages[0]);
  const mobileMenu: IMobileMenu = {
    id: "cluster",
    mobileSubPages: pages,
    onClickHandler: setSubPage,
  };
  return (
    <Main mobileMenu={mobileMenu}>
      <div className="d-flex flex-row">
        {subPage.action === "showTable" && <ClusterTable />}
      </div>
    </Main>
  );
};
export default Cluster;
