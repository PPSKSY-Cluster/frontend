import React, { ChangeEvent, Dispatch, FC, SetStateAction } from "react";

interface OsSelectProps {
  os: number;
  setOs: Dispatch<SetStateAction<number>>;
}

const OsSelect: FC<OsSelectProps> = ({ os, setOs }) => {
  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setOs(parseInt(event.target.value));
  };

  return (
    <div className="form-group col mb-2">
      <label>Betriebssystem</label>
      <select
        className="form-select form-select-md"
        onChange={onChangeHandler}
        value={os}
      >
        <option value={1}>Linux</option>
        <option value={2}>Windows</option>
        <option value={3}>Mac OS</option>
      </select>
    </div>
  );
};
export default OsSelect;
