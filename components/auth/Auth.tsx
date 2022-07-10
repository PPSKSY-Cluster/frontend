import { FC, useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { AxiosResponse } from "axios";
import Router from "next/router";
import { setDefaultHeader } from "./API";
import { IUser } from "types/User";
import UserAPI from "api/user";

const Auth: FC = () => {
  const [showSignIn, setShowSignIn] = useState(true);

  const changeSignType = () => {
    setShowSignIn(!showSignIn);
  };

  const saveJWTAndSignIn = (res: AxiosResponse<any, any>) => {
    const jwtToken = res.data.token;
    saveUserCredentials(res.data.user);
    localStorage.setItem("jwt", jwtToken);
    setDefaultHeader("Authorization", `Bearer ${jwtToken}`);
    Router.push("/cluster");
  };

  const saveUserCredentials = (user) => {
      localStorage.setItem("username", user.username);
      localStorage.setItem("id", user._id);
      localStorage.setItem("email", user.email);
      getOtherCreds();
  }

  const getOtherCreds = async () =>{
      try {
        const response = await UserAPI.getById(localStorage.getItem("id"));
        response.status === 200
          ? (localStorage.setItem("email", response.data.email),
            localStorage.setItem("type", response.data.type),
            console.log(response.data.type))
          : alert("Uups! Something went wrong!");
      } catch (error) {
        console.log(error);
      }
  }

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
