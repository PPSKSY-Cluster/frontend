import { FC } from "react";
import { PageType } from "types/MobileMenu";

interface BarItemProps {
  element: PageType;
  onClickHandler: (page: PageType) => void;
}
const BarItem: FC<BarItemProps> = ({
  element,
  onClickHandler,
  ...otherProps
}) => {
  return (
    <li
      className="list-group-item list-group-item-action rounded"
      onClick={() => {
        onClickHandler(element);
      }}
      {...otherProps}
      style={{cursor:"pointer"}}
    >
      {element.caption}
    </li>
  );
};
export default BarItem;