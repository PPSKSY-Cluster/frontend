import { FC, useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { saveAccessTokenAndSignIn } from "../../api/API";
import UserAPI from "api/user";

import { useDispatch } from "react-redux";
import { Dispatch } from "src/store";

const Auth: FC = () => {
  const dispatch = useDispatch<Dispatch>();
  const [showSignIn, setShowSignIn] = useState(true);

  const changeSignType = () => {
    setShowSignIn(!showSignIn);
  };

  const handleUserAndRefreshToken = async (
    { username, _id },
    refreshToken: string
  ) => {
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("username", username);
    localStorage.setItem("userId", _id);
    //getOtherCreds();
    if (username == "superadmin") {
      localStorage.setItem("userType", "2");
    }
    await saveAccessTokenAndSignIn(refreshToken);
  };

  const getOtherCreds = async () => {
    try {
      const response = await UserAPI.getById(localStorage.getItem("userId"));
      response.status === 200
        ? (localStorage.setItem("userEmail", response.data.email),
          localStorage.setItem("userType", response.data.type),
          console.log(response.data.type),
          dispatch.notifications.success(""))
        : dispatch.notifications.error("");
    } catch (error) {
      console.log(error);
    }
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
