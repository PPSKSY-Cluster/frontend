import { FC } from "react";

interface Props {
  authenticate: () => void;
  showSignUp: () => void;
}

const SignIn: FC<Props> = ({ authenticate, showSignUp }) => {
  return (
    <>
      <h2 className="mb-3">Anmelden bei Cluster Thruster</h2>
      <form>
        <div className="form-group mb-2">
          <input type="email" id="form2Example1" className="form-control" />
          <label className="form-label">Email Addresse</label>
        </div>

        <div className="form-outline mb-4">
          <input type="password" id="form2Example2" className="form-control" />
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

        <button
          type="button"
          className="btn btn-primary btn-block mb-4"
          onClick={authenticate}
        >
          Einloggen
        </button>

        <hr></hr>
        <div className="text-center">
          <p>
            Noch kein Mitglied?{" "}
            <a href="#!" onClick={showSignUp}>
              Registrieren
            </a>
          </p>
        </div>
      </form>
    </>
  );
};

export default SignIn;
