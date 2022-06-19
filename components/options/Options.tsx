import Sidebar from "components/sidebar/Sidebar";
import { FC, useState, useEffect, useRef, FormEvent } from "react";
import React from "react";
import { IUser } from "../../types/User";
import UserItem from "../user/UserItem";
import axios from "node_modules/axios/index";
import ConfirmDialog from "components/dialog/ConfirmDialog";
import OptionsAPI from "api/options";

  interface Props {}

  const Options: FC<Props> = ({}) => {
    const nameRef = useRef<HTMLInputElement>();
    const pwRef = useRef<HTMLInputElement>();
    const email = "foo@mail.de"
    const [users, setUsers] = useState({username:"foo", password:"12345"});
    const [currentItem, setCurrentItem] = useState<IUser>({
        username: "foo",
        _id:0,
      });

    const onDeleteClick = async () => {
        try {
          const response = await OptionsAPI.delete(currentItem._id);
          response.status === 204
            ? alert("User successfully deleted!")
            : alert("Uups! Something went wrong!");
        } catch (error) {
          console.log(error);
        }
      };
  
    return (
        <>
            <div className="d-flex flex-row">
                <div>
                    <h1></h1>
                    <p>
                        <button className="btn btn-lg btn-primary"  type="button" data-bs-toggle="collapse" data-bs-target="#edit" aria-expanded="false" aria-controls="edit">
                            Daten ändern
                        </button>
                    </p>
                    <div className="collapse" id="edit">
                        <div className="card card-body" margin-left="0 auto">
                            <label>Name { }</label>
                            <input
                                type="text"
                                className="form-control"
                                defaultValue={users.username}
                                ref={nameRef}>
                            </input>
                            <div>Email { }</div>
                            <input
                                defaultValue={email}
                            ></input>
                            <div>Passwort { }</div>
                            <input
                                type="text"
                                className="form-control"
                                placeholder={"*".repeat(users.password.length)}
                                ref={pwRef}
                            ></input>
                            <div>Rolle { }</div>
                            <select defaultValue={"User"}>
                                <option>Admin</option>
                                <option>User</option>
                            </select>
                            <div className="btn-group">
                                <button className="btn btn-lg btn-success" type="submit">Änderungen speichern</button>
                            </div>
                        </div>
                    </div>
                    <p>
                        <button className="btn btn-lg btn-primary"  type="button" data-bs-toggle="collapse" data-bs-target="#delete" aria-expanded="false" aria-controls="delete">
                            Account löschen
                        </button>
                    </p>
                    <div className="collapse" id="delete">
                        <div className="card card-body" margin-left="0 auto">
                            <div>Passwort: { }
                            </div>
                            <input
                                placeholder="Bitte Passwort eingeben"
                            ></input>
                            <div className="btn-group">
                                <p className="btn btn-lg btn-success" onClick={() => setCurrentItem(currentItem)}>
                                Account löschen</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ConfirmDialog
                id={"userDeletion"}
                accept={{ caption: "Löschen", onClick: onDeleteClick }}
                title={"User Löschen"}
                text={`Möchten Sie diesen Account wirklich löschen?`}
            />
        </>
    );
  };
export default Options;
