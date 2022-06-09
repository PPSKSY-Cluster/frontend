const Login = ({ authenticate }) => {
  return (
    <div className="min-vh-100 d-flex flex-row">
      <div className="bg-grey bg-gradient d-none d-lg-block">
        <img src="bg_bogen.png" alt="banner" className="mt-5" />
      </div>
      <div className="d-flex justify-content-center w-100">
        <div className="border border-grey rounded p-4 position-absolute mt-5">
          <h2 className="mb-3">Anmelden bei Cluster Thruster</h2>
          <form>
            <div className="form-group mb-2">
              <label htmlFor="exampleInputEmail1">Email Adresse</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email eingeben"
                // required
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="exampleInputPassword1">Passwort</label>
              <input
                type="password"
                className="form-control"
                placeholder="Passwort"
                // required
              />
            </div>
            <div className="d-grid gap-2 d-lg-flex justify-content-lg-end">
              <button
                type="submit"
                className="btn btn-primary float-right"
                onClick={authenticate}
              >
                Anmelden
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
