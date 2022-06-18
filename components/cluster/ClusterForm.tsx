import React, { Dispatch, FC, FormEvent, SetStateAction, useRef } from "react";
import { ICluster } from "types/Cluster";
interface ClusterFormProps {
  title: string;
  action: {
    title: string;
    onSubmit: () => void;
  };
  currentItem?: ICluster;
  setCurrentItem?: Dispatch<SetStateAction<ICluster>>;
}
const ClusterForm: FC<ClusterFormProps> = ({
  title,
  action,
  currentItem,
  setCurrentItem,
}) => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    action.onSubmit();
  };
  return (
    <div className="container-fluid p-4">
      <h2 className="mb-3">{title}</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group mb-2">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="text"
            className="form-control"
            value={currentItem?.name}
            onChange={(e) => {
              setCurrentItem({
                ...currentItem,
                name: e.target.value,
              });
            }}
            autoFocus
            required
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="exampleInputPassword1">Beschreibung</label>
          <textarea
            className="form-control"
            value={currentItem?.description}
            onChange={(e) => {
              setCurrentItem({
                ...currentItem,
                description: e.target.value,
              });
            }}
            required
          />
        </div>
        <div className="d-grid gap-2 d-lg-flex justify-content-lg-end">
          <button type="submit" className="btn btn-primary float-right">
            {action.title}
          </button>
        </div>
      </form>
    </div>
  );
};
export default ClusterForm;
