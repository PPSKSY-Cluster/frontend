import UserAPI from "api/user";
import ConfirmDialog from "components/dialog/ConfirmDialog";
import { useEffect, useState } from "react";
import { IUser } from "../../types/User";
import UserItem from "./UserItem";
import UserUpdate from "./UserUpdate";

import { useDispatch } from "react-redux";
import { Dispatch } from "src/store";

const UserTable = () => {
  const dispatch = useDispatch<Dispatch>();
  const userType = parseInt(localStorage.getItem("userType")) || 0;

  const [allUsers, setAllUsers] = useState<IUser[]>([
    { _id: "1", username: "foo" },
    { _id: "2", username: "bar" },
  ]);
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>(allUsers);
  const [searchInput, setSearchInput] = useState("");

  const [currentUser, setCurrentUser] = useState<IUser>({
    username: "",
    _id: "0",
  });

  const getUsers = async () => {
    try {
      const response = await UserAPI.getAll();
      setAllUsers(response.data);
      setFilteredUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const onDeleteClick = async () => {
    try {
      const response = await UserAPI.delete(currentUser._id);
      response.status !== 200
        ? dispatch.notifications.success("")
        : dispatch.notifications.error("");
    } catch (error) {
      console.log(error);
    }
    await getUsers();
  };
  const onUpdateClick = async () => {
    try {
      const response = await UserAPI.update(currentUser);
      response.status === 200
        ? dispatch.notifications.success("")
        : dispatch.notifications.error("");
    } catch (error) {
      console.log(error);
    }
    await getUsers()
  };

  const onSearchClick = (name: string) => {
    if (!name || name === "") {
      setFilteredUsers(allUsers);
    } else {
      setFilteredUsers(allUsers.filter((el) => el.username.includes(name)));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSearchClick(searchInput);
    }
  };

  const Table = () => {
    return (
      <>
        {userType > 0 ? (
          <table className="table table-hover mt-3">
            <thead>
              <tr>
                <th className="text-center col-md-1">Nr</th>
                <th className="text-center col-md-4">Name</th>
                <th className="text-center col-md-4">Rolle</th>
                <th className="text-center col-md-1">Reservierungen</th>
                <th className="text-center col-md-1">Bearbeiten</th>
                <th className="text-center col-md-1">Löschen</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers?.map((userItem, index) => {
                return (
                  <UserItem
                    key={userItem._id}
                    userItem={userItem}
                    count={++index}
                    setCurrentItem={setCurrentUser}
                  ></UserItem>
                );
              })}
            </tbody>
          </table>
        ) : (
          <table className="table table-hover mt-3">
            <thead>
              <tr>
                <th className="text-center col-md-3">Nr</th>
                <th className="text-center col-md-5">Name</th>
                <th className="text-center col-md-4">Rolle</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers?.map((userItem, index) => {
                return (
                  <UserItem
                    key={userItem._id}
                    userItem={userItem}
                    count={++index}
                    setCurrentItem={setCurrentUser}
                  ></UserItem>
                );
              })}
            </tbody>
          </table>
        )}
      </>
    );
  };

  return (
    <div className="form-control m-3 border-0">
      <div className="input-group">
        <input
          placeholder="Benutzername"
          value={searchInput}
          onChange={(evt) => {
            setSearchInput(evt.target.value);
            onSearchClick(searchInput);
          }}
          type="search"
          className="form-control"
          autoComplete="off"
          onKeyDown={handleKeyDown}
        />
        <a
          type="button"
          className="btn btn-primary "
          onClick={() => onSearchClick(searchInput)}
        >
          <i className="bi bi-search" vertical-align="middle" />
        </a>
      </div>
      <Table />

      <ConfirmDialog
        id={"userDeletion"}
        accept={{ caption: "Löschen", onClick: onDeleteClick }}
        title={"User Löschen"}
        text={`Möchten Sie ${currentUser.username} wirklich löschen?`}
      />
      <UserUpdate
        currentItem={currentUser}
        setCurrentItem={setCurrentUser}
        onSubmit={onUpdateClick}
      />
    </div>
  );
};

export default UserTable;
