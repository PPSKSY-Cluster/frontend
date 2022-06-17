const BarItem = (props) => {
  const { element, onClickHandler } = props;
  return (
    <li
      className="list-group-item list-group-item-action rounded"
      onClick={() => {
        onClickHandler(element);
      }}
    >
      {element.caption}
    </li>
  );
};
export default BarItem;
