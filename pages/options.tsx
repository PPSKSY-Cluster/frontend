import { useState } from "react";
import Main from "components/main/Main";
import Sidebar from "components/sidebar/Sidebar";
import Options from "components/options/Options";
import { IMobileMenu, PageType } from "types/MobileMenu";

const pages: PageType[] = [
  { caption: "Account", action: "showTable" },
];

const Option = () => {
  const [subPage, setSubPage] = useState(pages[0]);
  const mobileMenu: IMobileMenu = {
    id: "options",
    mobileSubPages: pages,
    onClickHandler: setSubPage,
  };
  return (
    <Main mobileMenu={mobileMenu}>
      <div className="d-flex flex-row">
        <div className="d-none d-md-block">
          <Sidebar
            title="Options"
            elements={pages}
            onClickHandler={setSubPage}
          />
        </div>
        {subPage.action === "showTable" && <Options />}
      </div>
    </Main>
  );
};
export default Option;
