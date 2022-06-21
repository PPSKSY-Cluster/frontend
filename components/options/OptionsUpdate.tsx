import Popup from "components/popup/Popup";
import React, { Dispatch, FC, SetStateAction } from "react";
import { IUser } from "types/User";
import OptionsForm from "./OptionsForm";

interface OptionsUpdateProps {
  currentItem: IUser;
  setCurrentItem: Dispatch<SetStateAction<IUser>>;
  onSubmit: () => {};
}
const OptionsUpdate: FC<OptionsUpdateProps> = ({
  currentItem,
  onSubmit,
  setCurrentItem,
}) => {
  return (
    <Popup id={"userUpdate"} title={"User verändern"}>
      <OptionsForm
        title={""}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        action={{ title: "Änderungen speichern", onSubmit }}
      />
    </Popup>
  );
};
export default OptionsUpdate;