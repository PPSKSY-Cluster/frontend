import UserAPI from "api/user";
import ConfirmDialog from "components/dialog/ConfirmDialog";
import Sidebar from "components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import { IUser } from "../../types/User";
import UserItem from "./UserItem";
import UserUpdate from "./UserUpdate";


  const UserTable =  () => {
    var searchName;
    const testuser: IUser[] = [
      { _id: 1, username: "Alice"},
      { _id: 2, username: "Bob"},
    ];
    const [users, setUser] = useState(testuser);

    /*useEffect(() => {
      async function getUsers(){
        setUsers(await getAllUsers())
      } 
      getUsers();
    },[])

    
    const getAllUsers = async () => {
      const response = await axios.get("http://localhost:8080/api/users", {headers:{'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSwiZXhwIjoxNjU1MTI4MzM2LCJ1c2VybmFtZSI6ImZvbyJ9.RmKj9VTsxjMR1JnMHaE4bO6wbMF8tCoGt7e3EterseU'}
    })
        return response.data
    }

    const getUser = async () => {
      var user: IUser;
      //var searchName = (document.getElementById("searchName") as HTMLInputElement).value;
      const response = await axios.get("http://localhost:8080/api/users" + "/62a5ef5f9b388bcfc925fcdc", {headers:{'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSwiZXhwIjoxNjU1MTI4MzM2LCJ1c2VybmFtZSI6ImZvbyJ9.RmKj9VTsxjMR1JnMHaE4bO6wbMF8tCoGt7e3EterseU'}
    })
    }

    console.log(getAllUsers())
    */

    const [currentItem, setCurrentItem] = useState<IUser>({
      username: "",
      _id:0,
    });

    useEffect(() => {
      async function getUser() {
        try {
          const response = await UserAPI.getAll();
          if (response.data.length > 0) setUser(response.data);
        } catch (error) {
          console.log(error);
        }
      }
      getUser();
    }, [users]);

    const onDeleteClick = async () => {
      try {
        const response = await UserAPI.delete(currentItem._id);
        response.status === 204
          ? alert("User successfully deleted!")
          : alert("Uups! Something went wrong!");
      } catch (error) {
        console.log(error);
      }
    };
    const onUpdateClick = async () => {
      try {
        const response = await UserAPI.update(currentItem);
        response.status === 202
          ? alert("User successfully updated!")
          : alert("Uups! Something went wrong!");
      } catch (error) {
        console.log(error);
      }
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
    /*
    return (
      <div className="d-flex flex-row">
        <Sidebar
          title={"User"}
          elements={["User suchen", "User erstellen"]}
        />
        <table className="table m-3">
          <thead>
          <h2>User suchen  </h2>
          <div>
            <div>
              <input 
                id = "searchName"
                type = "text"
                className ="form-control"
                placeholder="username"
                value = {searchName}
              ></input>
            </div>
            <div className ="pull-left">
              <button type ="button">Suchen</button>
            </div>
          </div>
            <tr>
              <th>Nr</th>
              <th>Name</th>
              <th>Rolle</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((userItem, index) => {
              return (
                <UserItem
                  key={userItem._id}
                  userItem={userItem}
                  count={++index}
                ></UserItem>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };*/
export default UserTable;