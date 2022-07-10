import React, { ChangeEvent, FC, SetStateAction } from "react";

interface CounterProps {
  counter: number;
  setCounter: React.Dispatch<SetStateAction<number>>;
  min?: number;
  max?: number;
}
const Counter: FC<CounterProps> = ({ counter, setCounter, min, max }) => {
  const increment = () => {
    if (max) {
      if (counter <= max) {
        setCounter(counter + 1);
      }
    } else {
      setCounter(counter + 1);
    }
  };

  const decrement = () => {
    if (min) {
      if (counter >= min) {
        setCounter(counter - 1);
      }
    } else {
      setCounter(counter - 1);
    }
  };

  const manualChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nodes = parseInt(event.target.value);
    if (!isNaN(nodes)) {
      setCounter(nodes);
    }
  };

  return (
    <div className="row">
      <div className="col-sm">
        <div className="input-group">
          <span className="input-group-prepend">
            <button
              type="button"
              className="btn btn-outline-primary btn-number"
              data-type="minus"
              data-field="quant[1]"
              onClick={decrement}
              disabled={min && min === counter}
            >
              <i className="bi bi-dash-lg" />
            </button>
          </span>
          <input
            type="text"
            name="quant[1]"
            className="form-control input-number"
            value={counter}
            min={1}
            style={{ textAlign: "center" }}
            onChange={manualChange}
          />
          <span className="input-group-append">
            <button
              type="button"
              className="btn btn-outline-primary btn-number"
              data-type="plus"
              data-field="quant[1]"
              onClick={increment}
              disabled={max && max === counter}
            >
              <i className="bi bi-plus-lg" />
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Counter;
