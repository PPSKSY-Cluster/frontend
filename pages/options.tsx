import { useState } from "react";
import Main from "components/main/Main";
import Sidebar from "components/sidebar/Sidebar";
import Options from "components/options/Options";
import { IMobileMenu, PageType } from "types/MobileMenu";
import OptionsForm from "components/options/OptionsForm";

const pages: PageType[] = [
<<<<<<< HEAD
  { caption: "Daten ändern", action: "changeCredentials" },
  { caption: "Account löschen", action: "showTable" },
=======
  { caption: "Account", action: "showTable" },
  { caption: "Daten ändern", action: "changeCredentials" },
>>>>>>> 5267101552e887da215e230a86ffcb8992e0a3a6
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
        {subPage.action === "changeCredentials" && <OptionsForm />}
      </div>
    </Main>
  );
};
export default Option;
