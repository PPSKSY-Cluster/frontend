import { FC, useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { saveAccessTokenAndSignIn } from "../../api/API";

const Auth: FC = () => {
  const [showSignIn, setShowSignIn] = useState(true);

  const changeSignType = () => {
    setShowSignIn(!showSignIn);
  };

  const handleUserAndRefreshToken = async (
    { username, _id, type },
    refreshToken: string
  ) => {
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("username", username);
    localStorage.setItem("userId", _id);
    localStorage.setItem("userType", type )
    await saveAccessTokenAndSignIn(refreshToken);
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
              handleUserAndRefreshToken={handleUserAndRefreshToken}
              showSignUp={changeSignType}
            />
          ) : (
            <SignUp
              handleUserAndRefreshToken={handleUserAndRefreshToken}
              showSignIn={changeSignType}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
