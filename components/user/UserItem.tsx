import { FC } from "react";
import { IUser } from "../../types/User";

interface UserItemProps {
  userItem: IUser;
  count: number;
  setCurrentItem: (item: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({userItem, count, setCurrentItem}) => {
  return (
    
      <tr>
        <td>{count}</td>
        <td className="text-center">{userItem.username}</td>
        <td className="text-center">User</td>
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
