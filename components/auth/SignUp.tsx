import { FC, useRef } from "react";
import axios, { AxiosResponse } from "axios";
import { userInfo } from "os";

interface Props {
  saveJWTAndSignIn: (res: AxiosResponse<any, any>) => void;
  showSignIn: () => void;
}

interface User {
  email: string;
  password: string;
}

const SignUp: FC<Props> = ({ saveJWTAndSignIn, showSignIn }) => {
  const mailEl = useRef(null);
  const nameEl = useRef(null);
  const passwordEl = useRef(null);

  const followUpSignIn = () => {
    axios
      .post("http://localhost:8080/api/login", {
        username: nameEl.current.value,
        password: passwordEl.current.value,
      })
      .then((res) => {
        saveJWTAndSignIn(res)})
      .catch((err) => console.log(err));

  };

  const signUp = (e) => {
    e.preventDefault();

    const newUserData = {
      username: nameEl.current.value,
      password: passwordEl.current.value,
      email: mailEl.current.value,
      type: "0"
    };

    axios
      .post("http://localhost:8080/api/users", newUserData)
      .then((res) => followUpSignIn())
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="mb-3">Registrieren bei Cluster Thruster</h2>
      <form onSubmit={signUp}>
        <div className="form-outline mb-4">
          <input type="email" className="form-control" ref={mailEl} required />
          <label className="form-label">Email Addresse</label>
        </div>
        <div className="form-outline mb-4">
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

        <input
          type="submit"
          value="Registrieren"
          className="btn btn-primary btn-block mb-4"
        />
      </form>
      <hr></hr>
      <div className="text-center">
        <p>
          Bereits ein Mitglied? <a onClick={showSignIn}>Einloggen</a>
        </p>
      </div>
    </>
  );
};

export default SignUp;
