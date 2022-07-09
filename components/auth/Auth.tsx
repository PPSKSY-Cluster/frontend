import { FC, useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { AxiosResponse } from "axios";
import Router from "next/router";
import { setDefaultHeader } from "./API";

const Auth: FC = () => {
  const [showSignIn, setShowSignIn] = useState(true);

  const changeSignType = () => {
    setShowSignIn(!showSignIn);
  };

  const saveJWTAndSignIn = (res: AxiosResponse<any, any>) => {
    const jwtToken = res.data.token;
    localStorage.setItem("jwt", jwtToken);
    setDefaultHeader("Authorization", `Bearer ${jwtToken}`);
    Router.push("/cluster");
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
              saveJWTAndSignIn={saveJWTAndSignIn}
              showSignUp={changeSignType}
            ></SignIn>
          ) : (
            <SignUp
              saveJWTAndSignIn={saveJWTAndSignIn}
              showSignIn={changeSignType}
            ></SignUp>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
