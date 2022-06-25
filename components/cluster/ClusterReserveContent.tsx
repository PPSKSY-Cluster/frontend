import { FC } from "react";
import { ICluster } from "../../types/Cluster";
import { useSelector } from "react-redux";
import { RootState } from "src/store";

interface Props {
  cluster: ICluster;
}

const SingleCluster: FC<Props> = ({ cluster }) => {
  const jwt: string = useSelector((state: RootState) => state.jwt);
  return (
    <>
      <h2 className="text-center">Cluster {cluster.name}</h2>
      <div>
        Anzahl der Nodes:
        {/*
        TODO only show the maximum availbe number
        onyl
        */}
        <div className="form-group">
          <select className="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <p>Von:</p>
        <input
          className="form-control"
          type="date"
          name="due-date"
          id="due-date"
          v-model="date"
        ></input>
        <p>Bis:</p>
        <input
          className="form-control"
          type="date"
          name="due-date"
          id="due-date"
          v-model="date"
        ></input>
        <button className="btn btn-primary">Reservieren</button>
      </div>
    </>
  );
};

export default SingleCluster;
