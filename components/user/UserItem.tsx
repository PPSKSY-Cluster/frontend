import { FC } from "react";
import { IUser } from "../../types/User";

interface UserItemProps {
  userItem: IUser;
  count: number;
  setCurrentItem: (item: IUser) => void;
}

const getUserType = (type) => {
  if(type == null){
    return "(User)"
  }else{
    return type
  }
}

const UserItem: FC<UserItemProps> = ({userItem, count, setCurrentItem}) => {
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
  );
};

export default UserItem;
