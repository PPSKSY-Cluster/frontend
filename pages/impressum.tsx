import { useState } from "react";
import Main from "components/main/Main";
import Sidebar from "components/sidebar/Sidebar";
import Impressum from "components/impressum/Impressum"
import New from "components/impressum/New"
import FAQ from "components/impressum/FAQ"

const pages = [
  { caption: "About ClusterThruster", action: "showAbout" },
  { caption: "Neu hier?", action: "showNew" },
  { caption: "FAQ", action: "showFAQ" },  
];

const ImpressumPage = () => {
  const [subPage, setSubPage] = useState(pages[0]);
  const mobileMenu = {
    id: "impressum",
    mobileSubPages: pages,
    onClickHandler: setSubPage,
  };
  return (
    <Main mobileMenu={mobileMenu}>
      <div className="d-flex flex-row">
        <div className="d-none d-md-block">
          <Sidebar
            title="Impressum"
            elements={pages}
            onClickHandler={setSubPage}
          />
        </div>
        {subPage.action === "showAbout" && <Impressum/>}
        {subPage.action === "showFAQ" && <FAQ/>}
        {subPage.action === "showNew" && <New/>}
      </div>
    </Main>
  );
};
export default ImpressumPage;
