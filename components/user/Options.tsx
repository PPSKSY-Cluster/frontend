import Sidebar from "components/sidebar/Sidebar";
import { FC } from "react";
import React from "react";
import { IUser } from "../../types/User";
import UserItem from "./UserItem";

  interface Props {}

  const Options: FC<Props> = ({}) => {
    const username = "Anna";
    const email = "anna@gmail.de"
    const password = "*********"
  
    return (
        <div className="d-flex flex-row">
            <Sidebar
            title={"Optionen"}
            elements={["Account bearbeiten"]}
            />
            <div>
                <h1>Account-Informationen</h1>
                <p>
                    <button className="btn btn-lg btn-primary"  type="button" data-bs-toggle="collapse" data-bs-target="#edit" aria-expanded="false" aria-controls="edit">
                        Daten ändern
                    </button>
                </p>
                <p>
                    <button className="btn btn-lg btn-primary"  type="button" data-bs-toggle="collapse" data-bs-target="#delete" aria-expanded="false" aria-controls="delete">
                        Account löschen
                    </button>
                </p>
                <div className="collapse" id="edit">
                    <div className="card card-body" margin-left="0 auto">
                        <th>Name { }</th>
                        <input
                            text-align="right"
                            defaultValue={username}>
                        </input>
                        <th>Email { }</th>
                        <input
                            defaultValue={email}
                        ></input>
                        <th>Passwort { }</th>
                        <input
                            placeholder={password}
                        ></input>
                        <th>Rolle { }</th>
                        <select>
                            <option disabled selected><del> -- Rolle -- </del> </option>
                            <option>Admin</option>
                            <option>User</option>
                        </select>
                        <div className="btn-group">
                            <button className="btn btn-lg btn-success" type="submit">Änderungen speichern</button>
                        </div>
                    </div>
                </div>
                <div className="collapse" id="delete">
                    <div className="card card-body" margin-left="0 auto">
                        <th>Passwort: { }
                        </th>
                        <input
                            placeholder="Bitte Passwort eingeben"
                        ></input>
                        <div className="btn-group">
                            <button className="btn btn-lg btn-primary" type="submit">Account löschen</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  };
export default Options;