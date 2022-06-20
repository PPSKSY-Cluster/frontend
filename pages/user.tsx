import { useState } from "react";
import Main from "components/main/Main";
import Sidebar from "components/sidebar/Sidebar";
import UserTable from "components/user/UserTable";

const pages = [
  { caption: "Alle User anzeigen", action: "showTable" },
];

const User = () => {
  const [subPage, setSubPage] = useState(pages[0]);
  const mobileMenu = {
    id: "user",
    mobileSubPages: pages,
    onClickHandler: setSubPage,
  };
  return (
    <Main mobileMenu={mobileMenu}>
      <div className="d-flex flex-row">
        <div className="d-none d-md-block">
          <Sidebar
            title="User"
            elements={pages}
            onClickHandler={setSubPage}
          />
        </div>
        {subPage.action === "showTable" && <UserTable />}
      </div>
    </Main>
  );
};
export default User;
