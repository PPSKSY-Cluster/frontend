import { FC, useState, useRef} from "react";
import React from "react";
import { IUser } from "../../types/User";
import ConfirmDialog from "components/dialog/ConfirmDialog";
import UserAPI from "api/user";
import { currentUser } from "../../types/User"
import Router from "next/router"

  interface Props {}

  const Options: FC<Props> = ({}) => {
    const nameRef = useRef<HTMLInputElement>();
    const pwRef = useRef<HTMLInputElement>();
    const email = "foo@mail.de"
    const [user, setUser] = useState([]);
    const [currentItem, setCurrentItem] = useState<IUser>({
        username: "eg",
        _id:'',
      });

    const onDeleteClick = async () => {
        getCurrentUser();
        try {
          const response = await UserAPI.delete(currentItem._id);
          response.status !== 200
            ? alert("User successfully deleted!")
            : alert("Uups! Something went wrong!");
        } catch (error) {
          console.log(error);
        }
        abmelden();
      };

    const onEditClick = async () => {
        getCurrentUser();
        try {
          const response = await UserAPI.update(currentItem);
          response.status !== 200
            ? alert("User successfully deleted!")
            : alert("Uups! Something went wrong!");
        } catch (error) {
          console.log(error);
        }
      };


    const getCurrentUser = async () => {
        try {
            const response = await UserAPI.getAll();
            if (response.data > 0) setUser(response.data)
        } catch (error) {
            console.log(error);
        }
        setCurrentItem(user.find((user) => {
            user.username == currentUser.username  
        }))
        console.log(user)
    };

    const abmelden = () => {
        localStorage.setItem("jwt", "");
        Router.push("/");
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
                                defaultValue={currentUser.email}
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
                    <a className="btn btn-lg btn-primary" onClick={() => setCurrentItem(currentUser)} data-bs-toggle="modal" data-bs-target="#userDeletion">
                                Account löschen</a>
                    </p>
                </div>
            </div>
            <ConfirmDialog
                id={"userDeletion"}
                accept={{ caption: "Löschen", onClick: onDeleteClick}}
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
