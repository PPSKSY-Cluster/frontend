import React, { Dispatch, FC, FormEvent, SetStateAction } from "react";
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

  const handleTypeChange = (event) => {
    let role = 0;
    if (event.target.value == "1") {
      role = 1;
    }
    setCurrentItem({
      ...currentItem,
      type: role,
    })
  }

  return (
    <div className="container-fluid p-4">
      <h2 className="mb-3">{title}</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group mb-2">
          <label>Name</label>
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
          <label>Rolle</label>
          <select className="form-select" onChange={handleTypeChange}>
            <option value={0}>User</option>
            <option value={1}>Admin</option>
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
