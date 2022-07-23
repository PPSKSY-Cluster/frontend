import Auth from "components/auth/Auth";
import { useEffect, useState } from "react";
import Main from "components/main/Main";
import { validateAccessToken } from "api/API";

export default function Home() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    async function onStart() {
      const accessToken = await validateAccessToken();
      if (accessToken) {
        setAuthenticated(true);
      }
    }
    onStart();
  }, []);

  return authenticated ? <Main /> : <Auth />;
}
