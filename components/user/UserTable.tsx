import UserAPI from "api/user";
import ConfirmDialog from "components/dialog/ConfirmDialog";
import { useEffect, useState } from "react";
import { IUser } from "../../types/User";
import UserItem from "./UserItem";
import UserUpdate from "./UserUpdate";


  const UserTable =  () => {
    const [users, setUsers] = useState<IUser[]>([    { _id: "1", username: "foo" },
    { _id: "2", username: "bar"},]);
    
    const [currentItem, setCurrentItem] = useState<IUser>({
      username: "",
      _id:'0',
    });

    useEffect(() => {
      async function getUsers() {
        try {
          const response = await UserAPI.getAll();
          if (response.data.length > 0) setUsers(response.data);
        } catch (error) {
          console.log(error);
        }
      }
      getUsers();
    }, []);

    const onDeleteClick = async () => {
      try {
        const response = await UserAPI.delete(currentItem._id);
        response.status === 200
          ? alert("User successfully deleted!")
          : alert("Uups! Something went wrong!");
      } catch (error) {
        console.log(error);
      }
      setUsers(users.filter(el => el._id!= currentItem._id))
    };
    const onUpdateClick = async () => {
      try {
        const response = await UserAPI.update(currentItem);
        response.status === 200
          ? alert("User successfully updated!")
          : alert("Uups! Something went wrong!");
      } catch (error) {
        console.log(error);
      }
      //const updatedUsers = { ...users };
      setUsers(
        users.map((el) => {
          return el._id === currentItem._id ? currentItem : el;
        })
      );
    };

    return (
      <>
        <table className="table table-hover m-3">
          <thead>
            <tr>
              <th>Nr</th>
              <th className="text-center">Name</th>
              <th className="text-center">Rolle</th>
              <th className="text-center">Bearbeiten</th>
              <th className="text-center">Löschen</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((userItem, index) => {
              return (
                <UserItem
                  key={userItem._id}
                  userItem={userItem}
                  count={++index}
                  setCurrentItem={setCurrentItem}
                ></UserItem>
              );
            })}
          </tbody>
        </table>

        <ConfirmDialog
          id={"userDeletion"}
          accept={{ caption: "Löschen", onClick: onDeleteClick }}
          title={"User Löschen"}
          text={`Möchten Sie ${currentItem?.username} wirklich löschen?`}
        />
        <UserUpdate
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
          onSubmit={onUpdateClick}
        />
      </>
    );
  };

export default UserTable;
