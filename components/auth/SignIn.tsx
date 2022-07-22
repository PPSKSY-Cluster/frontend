import { FC, FormEvent, useRef, useState } from "react";
import axios, { AxiosResponse } from "axios";
import config from "config.json";

interface Props {
  saveJWTAndSignIn: (res: AxiosResponse<any, any>) => void;
  showSignUp: () => void;
}

const SignIn: FC<Props> = ({ saveJWTAndSignIn, showSignUp }) => {
  const nameEl = useRef(null);
  const passwordEl = useRef(null);
  const [wrongUser, setWrongUser] = useState(false);

  const signIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      username: nameEl.current.value,
      password: passwordEl.current.value,
    };

    axios
      .post(`${config.BASE_URL}/login`, data)
      .then((res) => {
        saveJWTAndSignIn(res);
      })
      .catch((err) => {
        console.log(err);
        setWrongUser(true);
      });
  };

  return (
    <>
      <h2 className="mb-3">Anmelden bei Cluster Thruster</h2>
      <form onSubmit={signIn}>
        <div className="form-group mb-2">
          <input
            type="username"
            className="form-control"
            ref={nameEl}
            required
          />
          <label className="form-label mt-1">Username</label>
        </div>

        <div className="form-outline mb-4">
          <input type="password" className="form-control" ref={passwordEl} />
          <label className="form-label mt-1">Passwort</label>
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
      {wrongUser && (
        <div className="text-danger">
          Kontoname oder Passwort ist nicht korrekt.
        </div>
      )}
      <hr />
      <div className="text-center">
        Noch kein Mitglied? <a onClick={showSignUp}>Registrieren </a>
      </div>
    </>
  );
};

export default SignIn;
