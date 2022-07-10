import Auth from "components/auth/Auth";
import { useEffect, useState } from "react";
import Main from "components/main/Main";

export default function Home() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("jwt") !== "") {
      setAuthenticated(true);
    }
  }, []);

  return authenticated ? <Main /> : <Auth/>
}
