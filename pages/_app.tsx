import { useEffect } from "react";
import "styles/scss/global.scss";

import { Provider } from "react-redux";
import store from "src/store";

import Notifications from "components/notifications/Notifications";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <Notifications />
    </Provider>
  );
}

export default MyApp;
