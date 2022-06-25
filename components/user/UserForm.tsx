import React, { Dispatch, FC, FormEvent, SetStateAction, useRef } from "react";
import { IUser } from "types/User";
interface UserFormProps {
  title: string;
  action: {
    title: string;
    onSubmit: () => void;
  };
  currentItem?: IUser;
  setCurrentItem?: Dispatch<SetStateAction<IUser>>;
}
const UserForm: FC<UserFormProps> = ({
  title,
  action,
  currentItem,
  setCurrentItem,
}) => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    action.onSubmit();
  };
  return (
    <div className="container-fluid p-4">
      <h2 className="mb-3">{title}</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group mb-2">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="text"
            className="form-control"
            value={currentItem?.username}
            onChange={(e) => {
              setCurrentItem({
                ...currentItem,
                username: e.target.value,
              });
            }}
            autoFocus
            required
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="exampleInputEmail1">Rolle</label>
          <select className="form-select" aria-label="Default select example">
            <option selected>User</option>
            <option value="1">Admin</option>
            <option value="2">Tutor</option>
          </select>
        </div>
        <div className="d-grid gap-2 d-lg-flex justify-content-lg-end">
          <button type="submit" className="btn btn-primary float-right">
            {action.title}
          </button>
        </div>
      </form>
    </div>
  );
};
export default UserForm;
