import { FC } from "react";
import { IUser } from "../../types/User";

interface Props {
  userItem: IUser;
  count: number;
  opt: Function;
}

const UserItem: FC<Props> = ({ userItem, count, opt }) => {
    const callOpt = () => {
        return opt;
    }
  return (
    <>
      <tr>
        <td>{count}</td>
        <td>{userItem.name}</td>
        <td>{userItem.description}</td>
        <div className="d-grid gap-2 d-lg-flex justify-content-lg-front">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={callOpt}
              >
                Edit
              </button>
        </div>
      </tr>
    </>
  );
};

export default UserItem;
