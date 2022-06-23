import { useEffect } from "react";
import "styles/scss/global.scss";
import { Provider, useDispatch, useSelector } from "react-redux";
import store, { RootState, Dispatch } from "src/store";
import StaySignedIn from "components/auth/StaySignedIn";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);

  return (
    <Provider store={store}>
      <StaySignedIn />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
