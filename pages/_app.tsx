import { useEffect } from "react";
import "styles/scss/global.scss";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
