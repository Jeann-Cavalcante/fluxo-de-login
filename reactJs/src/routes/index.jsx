import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import PrivateRouter from "./Private";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRouter>
              <Home />
            </PrivateRouter>
          }
        />

        <Route path="/auth" element={<SignIn />} />
        <Route path="/registration" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
