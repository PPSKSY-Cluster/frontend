import React, { ChangeEvent, Dispatch, FC, SetStateAction } from "react";

interface OsSelectProps {
  os: string;
  setOs: Dispatch<SetStateAction<string>>;
}

const OsSelect: FC<OsSelectProps> = ({ os, setOs }) => {
  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setOs(event.target.value);
  };

  return (
    <div className="form-group col mb-2">
      <label>Betriebssystem</label>
      <select
        className="form-select form-select-md"
        onChange={onChangeHandler}
        value={os}
      >
        <option value={"Linux"}>Linux</option>
        <option value={"Windows"}>Windows</option>
        <option value={"MacOS"}>Mac OS</option>
      </select>
    </div>
  );
};
export default OsSelect;
