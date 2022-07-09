import Popup from "components/popup/Popup";
import React, { Dispatch, FC, SetStateAction } from "react";
import { IUser } from "types/User";
import OptionsForm from "./OptionsForm";

interface OptionsDeleteProps {
  currentItem: IUser;
  setCurrentItem: Dispatch<SetStateAction<IUser>>;
  onSubmit: () => {};
}
const OptionsUpdate: FC<OptionsDeleteProps> = ({
  currentItem,
  onSubmit,
  setCurrentItem,
}) => {
  return (
    <Popup id={"userDelete"} title={"User löschen"}>
      <OptionsForm
        title={""}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        action={{ title: "Diesen Account wirklich löschen?", onSubmit }}
      />
    </Popup>
  );
};
export default OptionsUpdate;