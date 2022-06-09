import { useState } from "react";
import Login from "./main/Login";
import Main from "./main/Main";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const authenticate = () => {
    setAuthenticated(!authenticated);
  };
  return authenticated ? <Main /> : <Login authenticate={authenticate} />;
};
export default App;
