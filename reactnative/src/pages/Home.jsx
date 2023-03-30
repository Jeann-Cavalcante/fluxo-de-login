import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";
import { useContext, useEffect } from "react";
import setupAPIClient from "../services/Api";

const Home = () => {
  const navigation = useNavigation();
  const { logout } = useContext(AuthContext);

  function handleSignOut () {
    logout();
  }

  useEffect(() => {
    async function getUsers() {
      const api = setupAPIClient();
      const response = await api.get("/users");
      console.log(response.data);
    }
  }, []);
  return (
    <View className="flex-1 pt-10 px-5 justify-center">
      <Button title="Sign Out" onPress={handleSignOut} color={"#166534"} />
    </View>
  );
}

export default Home;