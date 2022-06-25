import { useEffect, useState } from "react";
import Auth from "./auth/Auth";
import Main from "./main/Main";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const authenticate = () => {
    setAuthenticated(!authenticated);
  };

  return authenticated ? <Main /> : <Auth authenticate={authenticate} />;
};
export default App;
