import Sidebar from "components/sidebar/Sidebar";
import { FC } from "react";
import { IUser } from "../../types/User";
import UserItem from "./UserItem";

  interface Props {
    opt:Function
  }

  const User: FC<Props> = ({opt}) => {
    const user1: IUser = { id: 1, name: "Anna", description: "User" };
    const user2: IUser = { id: 2, name: "Bob", description: "Admin" };
    const user: IUser[] = [user1, user2];
  
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
                type = "text"
                className ="form-control"
                placeholder="username"
              ></input>
            </div>
            <div className ="pull-left">
              <button type ="button" >Suchen</button>
            </div>
          </div>
            <tr>
              <th>Nr</th>
              <th>Name</th>
              <th>Rolle</th>
            </tr>
          </thead>
          <tbody>
            {user.map((userItem, index) => {
              return (
                <UserItem
                  key={userItem.id}
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