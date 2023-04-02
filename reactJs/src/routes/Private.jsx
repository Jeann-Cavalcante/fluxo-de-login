import { Navigate } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const PrivateRouter = ({children}) => {
  const user = JSON.parse(localStorage.getItem("@user"));
  const isAuthenticated = user ? user.logado : false;

  console.log(isAuthenticated);
  return (
    <>
     { isAuthenticated ? children : <Navigate to="/auth" />}
    </>
  );}

export default PrivateRouter;