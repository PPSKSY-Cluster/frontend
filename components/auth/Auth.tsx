import { FC, useState, useEffect } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { AxiosResponse } from "axios";
import { setDefaultHeader } from "./API";
<<<<<<< HEAD
import { IUser } from "types/User";
import UserAPI from "api/user";
=======
import { openCluster } from "jobs/afterSignIn";
>>>>>>> main

const Auth: FC = () => {
  const [showSignIn, setShowSignIn] = useState(true);

  const changeSignType = () => {
    setShowSignIn(!showSignIn);
  };

  const saveJWTAndSignIn = (res: AxiosResponse<any, any>) => {
<<<<<<< HEAD
    const {token, user} = res.data;
    localStorage.setItem("jwt", token);
    localStorage.setItem("username", user.username);
    localStorage.setItem("userId", user._id);
<<<<<<< HEAD
=======
    localStorage.setItem("userPw", user.password);
>>>>>>> 5267101552e887da215e230a86ffcb8992e0a3a6
    setDefaultHeader("Authorization", `Bearer ${token}`);
    Router.push("/cluster");
    //getOtherCreds();
    if(user.username == "superadmin"){
      localStorage.setItem("userType", "2")
    }
=======
    const jwtToken = res.data.token;
    localStorage.setItem("jwt", jwtToken);
    setDefaultHeader("Authorization", `Bearer ${jwtToken}`);
    openCluster();
>>>>>>> main
  };

  const getOtherCreds = async () =>{
      try {
        const response = await UserAPI.getById(localStorage.getItem("userId"));
        response.status === 200
          ? (localStorage.setItem("userEmail", response.data.email),
            localStorage.setItem("userType", response.data.type),
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
