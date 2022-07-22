import Router from "next/router";
import { FC } from "react";
import { IUser } from "../../types/User";

interface UserItemProps {
  userItem: IUser;
  count: number;
  setCurrentItem: (item: IUser) => void;
}

const getUserType = (type) => {
  console.log(type);
  if(type == 0){
    return "User"
  }else if(type == 1){
    return "Admin"
  }else if(type == 2){
    return "Superadmin"
  }
  
}

const goOptions = () => {
  Router.push("../options")
}

const getUserName = (userItem) =>{
  if(userItem.username == localStorage.getItem("username")){
  return(
  <td className="text-center">
    <a onClick={() => goOptions()} style={{color:"blue", cursor:"pointer"}}>{userItem.username}</a>
  </td>
  )}else{
    return <td className="text-center">{userItem.username}</td>
  }
}

const UserItem: FC<UserItemProps> = ({userItem, count, setCurrentItem}) => {
  if(localStorage.getItem("userType") == "2"){
  return (
    <tr>
      <td>{count}</td>
      <td className="text-center">{userItem.username}</td>
      <td className="text-center">{getUserType(userItem.type)}</td>
      <td className="text-center">
        <a onClick={() => setCurrentItem(userItem)}>
          <i
            className="bi bi-calendar-check"
            data-bs-toggle="modal"
            data-bs-target="#userUpdate"
          />
        </a>
      </td>
      <td className="text-center">
        <a onClick={() => setCurrentItem(userItem)}>
          <i
            className="bi bi-pencil-square"
            data-bs-toggle="modal"
            data-bs-target="#userUpdate"
          />
        </a>
      </td>
      <td className="text-center">
        <a onClick={() => setCurrentItem(userItem)}>
          <i
            className="bi bi-trash-fill"
            data-bs-toggle="modal"
            data-bs-target="#userDeletion"
          />
        </a>
      </td>
    </tr>
  )}else{
    return(
      <tr>
        <td>{count}</td>
        {getUserName(userItem)}
        <td className="text-center">{getUserType(userItem.type)}</td>
      </tr>
    )
  }
};

export default UserItem;
