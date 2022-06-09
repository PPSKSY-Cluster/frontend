const Sidebar = (props) => {
  const { title, elements } = props;
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-primary bg-white"
      style={{ width: "260px" }}
    >
      <div className="text-primary fw-bold pb-2">{title}</div>
      <ul className="list-group flex-column mb-auto">
        {elements?.map((element, index) => {
          return (
            <li
              className="list-group-item list-group-item-action rounded"
              key={index}
            >
              {element}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Sidebar;
