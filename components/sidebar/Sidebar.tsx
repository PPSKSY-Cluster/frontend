import { FC } from "react";
import { PageType } from "types/MobileMenu";
import BarItem from "./BarItem";

interface SidebarProps {
  title: string;
  elements: PageType[];
  onClickHandler: (page: PageType) => void;
}
const Sidebar: FC<SidebarProps> = ({ title, elements, onClickHandler }) => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-primary bg-white"
      style={{ width: "260px" }}
    >
      <div className="text-primary fw-bold pb-2">{title}</div>
      <ul className="list-group flex-column mb-auto">
        {elements.map((element, index) => {
          return (
            <BarItem
              element={element}
              key={index}
              onClickHandler={onClickHandler}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default Sidebar;