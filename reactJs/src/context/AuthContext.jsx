import { createContext, useEffect, useState } from "react";
import ApiSetup from "../services/ApiSetup";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const logout = () => {
    localStorage.removeItem("@user");
    setAuthenticated(false);
  };

  useEffect(() => {
    const verifyToken = async () => {
      const user = JSON.parse(localStorage.getItem("@user"));

      if (!user) {
        setLoading(false);
        return;
      }
      if (user.token) {
        try {
          const api = ApiSetup();
          await api.get("/user/" + user.id);
        } catch (error) {
          logout();
          console.log(error);
          console.log("entrou no catch");
        }
      }

      setLoading(false);
    };

    verifyToken();
  }, [authenticated]);

  return (
    <AuthContext.Provider
      value={{ authenticated, setAuthenticated, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
