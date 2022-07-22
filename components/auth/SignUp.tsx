import { FC, FormEvent, useRef } from "react";
import { signIn, signUp } from "api/API";

interface Props {
  handleUserAndRefreshToken: (user: Record<string, any>, token: string) => void;
  showSignIn: () => void;
}

const SignUp: FC<Props> = ({ handleUserAndRefreshToken, showSignIn }) => {
  const mailEl = useRef(null);
  const nameEl = useRef(null);
  const passwordEl = useRef(null);

  const handleSignUp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const username = nameEl.current.value;
    const password = passwordEl.current.value;
    const email = mailEl.current.value;

    signUp(email, username, password)
      .then(async () => {
        const signInResponse = await signIn(username, password);
        if (signInResponse.status === 200) {
          const { user, token } = signInResponse.data;
          handleUserAndRefreshToken(user, token);
        }
      })
      .catch((error) => alert(error));
  };

  return (
    <>
      <h2 className="mb-3">Registrieren bei Cluster Thruster</h2>
      <form onSubmit={handleSignUp}>
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
