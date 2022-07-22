import { FC, FormEvent, useRef, useState } from "react";
import { signIn } from "api/API";
interface Props {
  handleUserAndRefreshToken: (user: Record<string, any>, token: string) => void;
  showSignUp: () => void;
}

const SignIn: FC<Props> = ({ handleUserAndRefreshToken, showSignUp }) => {
  const nameEl = useRef(null);
  const passwordEl = useRef(null);
  const [wrongUser, setWrongUser] = useState(false);

  const handleSignIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const username = nameEl.current.value;
    const password = passwordEl.current.value;
    signIn(username, password)
      .then((response) => {
        const { user, token } = response.data;
        return handleUserAndRefreshToken(user, token);
      })
      .catch(() => setWrongUser(true));
  };

  return (
    <>
      <h2 className="mb-3">Anmelden bei Cluster Thruster</h2>
      <form onSubmit={handleSignIn}>
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
