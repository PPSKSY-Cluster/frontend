import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "src/store";

const StaySignedIn = () => {
  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    const storedJwt = localStorage.getItem("jwt");
    console.log(storedJwt);
    dispatch.jwt.setJWT(storedJwt, storedJwt);
  }, [dispatch.jwt]);
  return <></>;
};

export default StaySignedIn;
