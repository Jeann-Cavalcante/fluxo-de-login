import { Navigate } from "react-router-dom";
import React from "react";

const PrivateRouter = ({children}) => {
  const isAuthenticated = false
  return (
    <>
     { isAuthenticated ? children : <Navigate to="/auth" />}
    </>
  );}

export default PrivateRouter;