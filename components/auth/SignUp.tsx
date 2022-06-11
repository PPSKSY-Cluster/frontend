import { FC } from "react";
import axios from "axios";

interface Props {
  showSignIn: () => void;
}

interface User {
  email: string;
  password: string;
}

const SignUp: FC<Props> = ({ showSignIn }) => {
  const createUserApiRequest = (event) => {
    event.preventDefault();
    var { email, password } = document.forms[0];
    console.log(email, password);

    /*      axios
        .post('/api/user', payload)
        .then((res) => state.commit('addTodo', res.data))
        .catch((err) => console.log(err));
*/
    axios
      .post("http://localhost:8080/api/users", {
        username: "foo",
        password: "bar",
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="mb-3">Registrieren bei Cluster Thruster</h2>
      <form onSubmit={createUserApiRequest}>
        <div className="form-outline mb-4">
          <input type="email" className="form-control" required />
          <label className="form-label">Email Addresse</label>
        </div>
        <div className="form-outline mb-4">
          <input type="username" className="form-control" required />
          <label className="form-label">Username</label>
        </div>

        <div className="form-outline mb-4">
          <input type="password" className="form-control" />
          <label className="form-label">Passwort</label>
        </div>

        <button type="button" className="btn btn-primary btn-block mb-4">
          Registrieren
        </button>

        <hr></hr>
        <div className="text-center">
          <p>
            Bereits ein Mitglied?{" "}
            <a href="#!" onClick={showSignIn}>
              Einloggen
            </a>
          </p>
        </div>
      </form>
    </>
  );
};

export default SignUp;
