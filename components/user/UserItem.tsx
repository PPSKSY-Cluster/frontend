import { FC } from "react";
import { IUser } from "../../types/User";

interface Props {
  userItem: IUser;
  count: number;
  opt: Function;
}

const UserItem: FC<Props> = ({userItem, count}) => {
    /*const callOpt = () => {
        return opt;
    }*/
  return (
    <>
      <tr>
        <td>{count}</td>
        <td>{userItem.username}</td>
        <td>User</td>
        <div className="d-grid gap-2 d-lg-flex justify-content-lg-front">
        <a><i className="bi bi-pencil-square"></i></a>
        </div>
      </tr>
    </>
  );
};

export default UserItem;
