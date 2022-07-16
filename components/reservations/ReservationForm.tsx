import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { ICluster } from "types/Cluster";
import { IReservation } from "types/Reservation";

interface ClusterFormProps {
  title: string;
  action: {
    title: string;
    onSubmit: (updatedItem: IReservation) => {};
  };
  currentItem?: IReservation;
  setCurrentItem?: Dispatch<SetStateAction<ICluster>>;
}

const ClusterForm: FC<ClusterFormProps> = ({
  title,
  action,
  currentItem,
  ...otherProps
}) => {
  const nodes = useRef(null);
  const from = useRef(null);
  const to = useRef(null);

  //const [rCurrentItem, setRCurrentItem] = useState(currentItem);

  const [rNodes, setRNodes] = useState(1);
  const [rFrom, setRFrom] = useState("");
  const [rTo, setRTo] = useState("");

  const init = () => {
    setRNodes(currentItem.nodes);
    setRFrom(
      new Date(currentItem.startTime * 1000).toISOString().split("T")[0]
    );
    setRTo(new Date(currentItem.endTime * 1000).toISOString().split("T")[0]);
  };
  useEffect(() => {
    init();
  }, [currentItem]);

  const createReservation = (e) => {
    e.preventDefault();

    const updatedReservation: IReservation = {
      _id: currentItem._id,
      clusterID: currentItem.clusterID,
      userID: currentItem.userID,
      nodes:
        parseInt(nodes.current.value) != NaN
          ? parseInt(nodes.current.value)
          : currentItem.nodes,
      startTime: Math.floor(new Date(from.current.value).getTime() / 1000),
      endTime: Math.floor(new Date(to.current.value).getTime() / 1000),
    };
    action.onSubmit(updatedReservation);
  };

  const nodesOptions = [];
  for (let i = 1; i <= rNodes; i++) {
    nodesOptions.push(<option key={i.toString()}>{i}</option>);
  }

  const startTime = new Date(currentItem.startTime);

  return (
    <div className="container-fluid p-4">
      <form onSubmit={createReservation}>
        <div className="d-none d-lg-block">
          <label className="form-label">Anzahl der Nodes:</label>
          <div className="form-group mb-2">
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              ref={nodes}
              defaultValue={rNodes}
            >
              {nodesOptions}
            </select>
          </div>
          <div className="form-group g-3 mb-2">
            <label className="form-label">Von:</label>
            <input
              className="form-control"
              type="date"
              name="due-date"
              id="due-date"
              v-model="date"
              ref={from}
              value={rFrom}
              onChange={(e) => {
                setRFrom(e.target.value);
              }}
            ></input>
          </div>
          <div className="form-group">
            <label className="form-label">Bis:</label>
            <input
              className="form-control"
              type="date"
              name="due-date"
              id="due-date"
              v-model="date"
              ref={to}
              value={rTo}
              onChange={(e) => {
                setRTo(e.target.value);
              }}
            ></input>
          </div>
          <div className="form-group mb-2"></div>
          <div className="d-grid gap-2 d-lg-flex justify-content-lg-end">
            <button className="btn btn-primary" data-bs-dismiss="modal">
              Reservierung ändern
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default ClusterForm;
