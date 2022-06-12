import Sidebar from "components/sidebar/Sidebar";
import { FC, useEffect, useState } from "react";
import { IUser } from "../../types/User";
import UserItem from "./UserItem";
import axios from "node_modules/axios/index";

  interface Props {
    opt: () => void;
  }

  const User: FC<Props> =  ({opt}) => {
    var searchName;
    const [users, setUsers] = useState([]);

    useEffect(() => {
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
              <button type ="button" onClick={getUser}>Suchen</button>
            </div>
          </div>
            <tr>
              <th>Nr</th>
              <th>Name</th>
              <th>Rolle</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((userItem, index) => {
              return (
                <UserItem
                  key={userItem._id}
                  userItem={userItem}
                  count={++index}
                  opt ={opt}
                ></UserItem>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };
export default User;