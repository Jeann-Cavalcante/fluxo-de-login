import { Button, FlatList, Image, ScrollView, Text, View } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import setupAPIClient from "../services/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {
  const [users, setUsers] = useState([]);
  const { logout } = useContext(AuthContext);

  function handleSignOut () {
    logout();
  }

  useEffect(() => {
    async function getUsers() {
      const token = await AsyncStorage.getItem("@token");
      const api = setupAPIClient(token);
      const response = await api.get("/user");
      setUsers(response.data.users);
      // console.log(response.data);      
    }
    getUsers();
  }, []);

  return (
    <ScrollView className="flex-1 pt-14 px-5 gap-5">
      <View className="w-full items-center justify-center">
      <Button title="Sair" onPress={handleSignOut} color={"#166534"} />

      </View>
      {users?.map((item) => (
        <View key={item.id} className="p-5 bg-gray-200 flex-row items-center justify-start gap-3">
          <Image
            className="w-[80px] h-[80px]"
            source={require("../assets/logo.png")}
          />
          <View className="">
            <Text className="text-gray-700">Nome: {item.name}</Text>
            <Text className="text-gray-700">Email: {item.email}</Text>
          </View>
        </View>
      ))}

    </ScrollView>
  );
}

export default Home;