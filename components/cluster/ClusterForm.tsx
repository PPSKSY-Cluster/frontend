import React, {
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { ICluster } from "types/Cluster";
import Counter from "./fields/Counter";
import OsSelect from "./fields/OS";
import TypeSelect from "./fields/Type";

interface ClusterFormProps {
  title: string;
  action: {
    title: string;
    onSubmit: (updatedItem: ICluster) => void;
  };
  currentItem?: ICluster;
  setCurrentItem?: Dispatch<SetStateAction<ICluster>>;
}

const ClusterForm: FC<ClusterFormProps> = ({
  title,
  action,
  currentItem,
  ...otherProps
}) => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [nodes, setNodes] = useState<number>(1);
  const [operatingSystem, setOperatingSystem] = useState<string>("");
  const [type, setType] = useState<number>(1);

  const init = () => {
    setName(currentItem.name);
    setDescription(currentItem.description);
    setNodes(currentItem.nodes);
    setOperatingSystem(currentItem.operatingSystem);
    setType(currentItem.type);
  };

  useEffect(() => {
    init();
  }, [currentItem]);

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedItem = {
      _id: currentItem._id,
      name,
      description,
      nodes,
      operatingSystem,
      type,
    };
    action.onSubmit(updatedItem);
    if (!currentItem._id) init();
  };
  return (
    <div className="container-fluid p-4">
      <h2 className="mb-3">{title}</h2>
      <form onSubmit={onSubmitHandler}>
        <div className="d-none d-lg-block">
          <div className="row g-3">
            <div className="form-group col mb-2">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                autoFocus
                required
              />
            </div>
            <div className="form-group col-3">
              <label>Anzahl der Nodes</label>
              <Counter counter={nodes} setCounter={setNodes} min={1} />
            </div>
          </div>
          <div className="row">
            <OsSelect os={operatingSystem} setOs={setOperatingSystem} />
            <TypeSelect type={type} setType={setType} />
          </div>
        </div>

        {
          //mobile version
        }
        <div className="d-lg-none">
          <div className="form-group mb-2">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              autoFocus
              required
            />
          </div>
          <div className="form-group col-sm-4 mb-2">
            <label>Anzahl der Nodes</label>
            <Counter counter={nodes} setCounter={setNodes} min={1} />
          </div>
          <div className="row">
            <OsSelect os={operatingSystem} setOs={setOperatingSystem} />
            <TypeSelect type={type} setType={setType} />
          </div>
        </div>
        <div className="form-group mb-4">
          <label>Beschreibung</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            required
          />
        </div>
        <div className="d-grid gap-2 d-lg-flex justify-content-lg-end">
          <button
            type="submit"
            className="btn btn-primary float-right"
            {...otherProps}
          >
            {action.title}
          </button>
        </div>
      </form>
    </div>
  );
};
export default ClusterForm;
