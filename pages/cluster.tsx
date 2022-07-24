import { useState } from "react";
import Main from "components/main/Main";
import Sidebar from "components/sidebar/Sidebar";
import ClusterCreation from "components/cluster/ClusterCreation";
import ClusterTable from "components/cluster/ClusterTable";
import { IMobileMenu, PageType } from "types/MobileMenu";

const pages: PageType[] = [
  { caption: "Alle Cluster anzeigen", action: "showTable" },
  { caption: "Neues Cluster erstellen", action: "showCreation", admin:true },
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
        <div className="d-none d-md-block">
          <Sidebar
            title="Cluster"
            elements={pages}
            onClickHandler={setSubPage}
          />
        </div>
        {subPage.action === "showTable" && <ClusterTable />}
        {subPage.action === "showCreation" && <ClusterCreation />}
      </div>
    </Main>
  );
};
export default Cluster;
