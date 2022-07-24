import { FC } from "react";
import { IUser } from "../../types/User";
interface UserItemProps {
  userItem: IUser;
  count: number;
  setCurrentItem: (item: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({ userItem, count, setCurrentItem }) => {
  const userType = parseInt(localStorage.getItem("userType")) || 0;

  const getUserType = (type: number) => {
    if (type == 1) {
      return "Admin";
    } else if (type == 2) {
      return "Superadmin";
    } else {
      return "User";
    }
  };
  return (
    <>
      {userType > 0 ? (
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
      ) : (
        <tr>
          <td className="text-center">{count}</td>
          <td className="text-center">{userItem.username}</td>
          <td className="text-center">{getUserType(userItem.type)}</td>
        </tr>
      )}
    </>
  );
};

export default UserItem;
