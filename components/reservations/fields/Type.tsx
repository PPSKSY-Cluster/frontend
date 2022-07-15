import React, { ChangeEvent, Dispatch, FC, SetStateAction } from "react";

interface TypeSelectProps {
  type: number;
  setType: Dispatch<SetStateAction<number>>;
}

const TypeSelect: FC<TypeSelectProps> = ({ type, setType }) => {
  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setType(parseInt(event.target.value));
  };
  return (
    <div className="form-group col mb-2">
      <label>Typ</label>
      <select
        className="form-select form-select-md"
        value={type}
        onChange={onChangeHandler}
      >
        <option value={1}>Custom</option>
        <option value={2}>None</option>
        <option value={3}>GPU</option>
      </select>
    </div>
  );
};
export default TypeSelect;
