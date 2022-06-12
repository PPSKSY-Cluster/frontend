import Sidebar from "components/sidebar/Sidebar";
import { FC, useState, useEffect } from "react";
import React from "react";
import { IUser } from "../../types/User";
import UserItem from "./UserItem";
import axios from "node_modules/axios/index";

  interface Props {}

  const Options: FC<Props> = ({}) => {
    const username = "Anna";
    const email = "anna@gmail.de"
    const password = "*********"
    const [user, setUser] = useState([]);

    useEffect(() => {
      async function getUser(){
        setUser(await getUser())
      } 
      getUser();
    },[])

    const editUser = async () => {
        const response = await axios.put("http://localhost:8080/api/users" + "/62a5ef5f9b388bcfc925fcdc", {headers:{'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSwiZXhwIjoxNjU1MTI4MzM2LCJ1c2VybmFtZSI6ImZvbyJ9.RmKj9VTsxjMR1JnMHaE4bO6wbMF8tCoGt7e3EterseU'}
        })
    }
    
    const getUser = async () => {
        var searchName = (document.getElementById("searchName") as HTMLInputElement).value;
        const response = await axios.get("http://localhost:8080/api/users" + "/62a5ef5f9b388bcfc925fcdc", {headers:{'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSwiZXhwIjoxNjU1MTI4MzM2LCJ1c2VybmFtZSI6ImZvbyJ9.RmKj9VTsxjMR1JnMHaE4bO6wbMF8tCoGt7e3EterseU'}
        })
        return response.data
    }

    console.log(getUser());
  
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