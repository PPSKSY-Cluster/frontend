import { FC, useState, useRef} from "react";
import React from "react";
import { IUser } from "../../types/User";
import ConfirmDialog from "components/dialog/ConfirmDialog";
import UserAPI from "api/user";
import { currentUser } from "../../types/User"

  interface Props {}

  const Options: FC<Props> = ({}) => {
    const nameRef = useRef<HTMLInputElement>();
    const pwRef = useRef<HTMLInputElement>();
    const email = "foo@mail.de"
    const [users, setUsers] = useState({username:"foo", password:"12345"});
    const [currentItem, setCurrentItem] = useState<IUser>({
        username: "foo",
        _id:'0',
      });

    const onDeleteClick = async () => {
        try {
          const response = await UserAPI.delete(currentItem._id);
          response.status === 204
            ? alert("User successfully deleted!")
            : alert("Uups! Something went wrong!");
        } catch (error) {
          console.log(error);
        }
      };

    const onEditClick = async () => {
        try {
          const response = await UserAPI.update(currentItem);
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
                                defaultValue={currentUser.username}
                                ref={nameRef}>
                            </input>
                            <div>Email { }</div>
                            <input
                                defaultValue={email}
                                className="form-control"
                            ></input>
                            <div>Passwort { }</div>
                            <input
                                type="password"
                                className="form-control"
                                defaultValue={currentUser.password}
                                ref={pwRef}
                            ></input>
                                <a className="btn btn-lg btn-success" onClick={() => setCurrentItem(currentItem)} data-bs-toggle="modal" data-bs-target="#userEdit">
                                Änderungen speichern</a>
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
                                <a className="btn btn-lg btn-success" onClick={() => setCurrentItem(currentItem)} data-bs-toggle="modal" data-bs-target="#userDeletion">
                                Account löschen</a>
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
                <ConfirmDialog
                id={"userEdit"}
                accept={{ caption: "Speichern", onClick: onEditClick }}
                title={"Daten ändern"}
                text={`Änderungen speichern?`}
            />
        </>
    );
  };
export default Options;
