import { FC, useRef, useState } from "react";
import { currentUser } from "../../types/User"
import axios, { AxiosResponse } from "axios";

interface Props {
  saveJWTAndSignIn: (res: AxiosResponse<any, any>) => void;
  showSignUp: () => void;
}

const SignIn: FC<Props> = ({ saveJWTAndSignIn, showSignUp }) => {
  const nameEl = useRef(null);
  const passwordEl = useRef(null);
  const [ wrongUser, setWrongUser ] = useState(false);

  const signIn = (e) => {
    e.preventDefault();

    const data = {
      username: nameEl.current.value,
      password: passwordEl.current.value,
    };

    axios
      .post("http://localhost:8080/api/login", data)
      .then((res) => saveJWTAndSignIn(res))
      .catch((err) => {
        console.log(err);
        setWrongUser(true);
      });
      

    currentUser.username = data.username;
    currentUser.password = data.password;

    //const wrongUser = false;
    
  };

  return (
    <>
      <link rel="stylesheet" href="global.css"></link>
      <h2 className="mb-3">Anmelden bei Cluster Thruster</h2>
      <form onSubmit={signIn}>
        <div className="form-group mb-2">
          <input
            type="username"
            className="form-control"
            ref={nameEl}
            required
          />
          <label className="form-label">Username</label>
        </div>

        <div className="form-outline mb-4">
          <input type="password" className="form-control" ref={passwordEl} />
          <label className="form-label">Passwort</label>
        </div>

        {/*
        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="form2Example31"
                checked
              />
            </div>
            <label className="form-check-label"> Remember me </label>
          </div>
          <div className="col">
            <a href="#!">Passwort vergessen?</a>
          </div>
        </div>
*/}

        <input
          type="submit"
          value="Login"
          className="btn btn-primary btn-block mb-4"
        />
      </form>
      <div>
        {wrongUser &&
        <p>
          <span style={{color : "red"}}>Kontoname oder Passwort ist nicht korrekt.</span>
        </p>}
        </div>
      <hr></hr>
      <div className="text-center">
        <p>
          Noch kein Mitglied? <a onClick={showSignUp}>Registrieren </a>
        </p>
      </div>
    </>
  );
};

export default SignIn;
