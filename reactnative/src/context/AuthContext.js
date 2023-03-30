import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import setupAPIClient from "../services/Api";
import { StackActions, useNavigation } from "@react-navigation/native";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isSigned, setIsSigned] = useState(false);
  const [loading, setLoading] = useState(true);

  async function login(email, password){
    try {

      const api = setupAPIClient();

      const response = await api.post("/authentication", {
        email,
        password
      });
      console.log(response.data);
      const { token, userId } = response.data;
  
      await AsyncStorage.setItem("@token", token);
      await AsyncStorage.setItem("@userId", String(userId));
  
      setUser(userId);

      setIsSigned(true);
      
    } catch (error) {
      console.log(error);
      console.log('erro no login');
    }
  };

  async function logout(){
    await AsyncStorage.removeItem("@token");
    await AsyncStorage.removeItem("@userId");
    setUser(null);
    setIsSigned(false);
    console.log('clicou no logout');
  };

  useEffect(() => {
    async function verifyToken(){
      try{
      const token = await AsyncStorage.getItem("@token") || null;
      const userId = await AsyncStorage.getItem("@userId") || null;

      
      if(!token || !userId){
        logout();
        return;
      };
      
      const api = setupAPIClient(token);
      const response = await api.get("/user/"+userId);
      
      console.log(response.data);

      setIsSigned(!!token);
      setLoading(false);
      }catch(error){
        console.log(error);
        logout();
      };
    };
    verifyToken();
  }, [logout]);
    


  return (
    <AuthContext.Provider value={{ loading, login, isSigned, logout }}>
      {children}
    </AuthContext.Provider>
  );
};