import { FC, useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

interface Props {
  authenticate: () => void;
}

const Auth: FC<Props> = ({ authenticate }) => {
  const [showSignIn, setShowSignIn] = useState(true);

  const changeSignType = () => {
    setShowSignIn(!showSignIn);
  };

  return (
    <div className="min-vh-100 d-flex flex-row">
      <div className="bg-grey bg-gradient d-none d-lg-block">
        <img src="bg_bogen.png" alt="banner" className="mt-5" />
      </div>
      <div className="d-flex justify-content-center w-100">
        <div className="border border-grey rounded p-4 position-absolute mt-5">
          {showSignIn ? (
            <SignIn
              authenticate={authenticate}
              showSignUp={changeSignType}
            ></SignIn>
          ) : (
            <SignUp
              authenticate={authenticate}
              showSignIn={changeSignType}
            ></SignUp>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
