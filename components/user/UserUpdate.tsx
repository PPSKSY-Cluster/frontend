import Popup from "components/popup/Popup";
import React, { Dispatch, FC, SetStateAction } from "react";
import { IUser } from "types/User";
import UserForm from "./UserForm";

interface UserUpdateProps {
  currentItem: IUser;
  setCurrentItem: Dispatch<SetStateAction<IUser>>;
  onSubmit: () => {};
}
const UserUpdate: FC<UserUpdateProps> = ({
  currentItem,
  onSubmit,
  setCurrentItem,
}) => {
  return (
    <Popup id={"userUpdate"} title={"User verändern"}>
      <UserForm
        title={""}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        action={{ title: "Änderungen speichern", onSubmit }}
      />
    </Popup>
  );
};
export default UserUpdate;