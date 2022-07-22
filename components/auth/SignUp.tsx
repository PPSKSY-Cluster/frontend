import { FC, FormEvent, useRef } from "react";
import axios, { AxiosResponse } from "axios";
import config from "config.json";

interface Props {
  saveJWTAndSignIn: (res: AxiosResponse<any, any>) => void;
  showSignIn: () => void;
}

const SignUp: FC<Props> = ({ saveJWTAndSignIn, showSignIn }) => {
  const mailEl = useRef(null);
  const nameEl = useRef(null);
  const passwordEl = useRef(null);

  const followUpSignIn = () => {
    axios
      .post(`${config.BASE_URL}/login`, {
        username: nameEl.current.value,
        password: passwordEl.current.value,
      })
      .then((res) => {
        saveJWTAndSignIn(res);
      })
      .catch((err) => console.log(err));
  };

  const signUp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newUserData = {
      username: nameEl.current.value,
      password: passwordEl.current.value,
      email: mailEl.current.value,
      type: "0",
    };

    axios
      .post(`${config.BASE_URL}/users`, newUserData)
      .then(() => followUpSignIn());
  };

  return (
    <>
      <h2 className="mb-3">Registrieren bei Cluster Thruster</h2>
      <form onSubmit={signUp}>
        <div className="form-outline mb-4">
          <input type="email" className="form-control" ref={mailEl} required />
          <label className="form-label mt-1">Email Addresse</label>
        </div>
        <div className="form-outline mb-4">
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

        <input
          type="submit"
          value="Registrieren"
          className="btn btn-primary btn-block mb-4"
        />
      </form>
      <hr />
      <div className="text-center">
        Bereits ein Mitglied? <a onClick={showSignIn}>Einloggen</a>
      </div>
    </>
  );
};

export default SignUp;
