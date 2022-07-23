import UserAPI from "api/user";
import ConfirmDialog from "components/dialog/ConfirmDialog";
import Router from "next/router";
import React, { FC, FormEvent, useEffect, useRef, useState } from "react";
import { IUser } from "types/User";

import { useDispatch } from "react-redux";
import { Dispatch } from "src/store";

const OptionsForm: FC = () => {
  const dispatch = useDispatch<Dispatch>();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState<string>(null);
  const pwCheckRef = useRef(null);
  const confirmRef = useRef(null);

  useEffect(() => {
    setUsername(localStorage.getItem("username"));
  }, []);

  const checkSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!username && !password) {
      return;
    }
    if (password && password !== pwCheckRef.current.value) {
      return alert("Passwörter stimmen nicht überein!");
    }
    confirmRef.current.click();
  };

  const onSubmit = async () => {
    let updatedUser: IUser = {
      _id: localStorage.getItem("userId"),
      username,
      password: password !== "" ? password : localStorage.getItem("userPw"),
    };
    try {
      const response = await UserAPI.update(updatedUser);
      if (response.status !== 200) {
        return dispatch.notifications.success("");
      }
      localStorage.setItem("username", response.data.username);
      localStorage.setItem("userPw", response.data.password);
      Router.push("/options");
    } catch (error) {
      console.log(error);
      dispatch.notifications.error("");
    }
  };
  return (
    <div className="container-fluid p-4">
      <h2 className="mb-3">Daten ändern</h2>
      <form onSubmit={checkSubmit}>
        <div className="form-group mb-2">
          <label>Benutzername</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            autoFocus
          />
        </div>
        <div className="form-group mb-2">
          <label>Neues Passwort</label>
          <input
            type="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group mb-2">
          <label>Neues Passwort wiederholen</label>
          <input
            type="password"
            className="form-control"
            ref={pwCheckRef}
            required={!!password}
          />
        </div>
        <div className="form-group mb-4"></div>
        <div className="d-grid gap-2 d-lg-flex justify-content-lg-end">
          <button type="submit" className="btn btn-primary float-right">
            Änderungen speichern
          </button>
        </div>
        <input
          type="hidden"
          data-bs-toggle="modal"
          data-bs-target="#userEdit"
          ref={confirmRef}
        />
        <ConfirmDialog
          id={"userEdit"}
          accept={{ caption: "Speichern", onClick: onSubmit }}
          title={"Daten ändern"}
          text={"Änderungen speichern?"}
        />
      </form>
    </div>
  );
};
export default OptionsForm;
