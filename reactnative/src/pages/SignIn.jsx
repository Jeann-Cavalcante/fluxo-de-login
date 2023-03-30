import {
  Button,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { useContext, useState } from "react";
import { TextInput } from "react-native";
import Checkbox from "expo-checkbox";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { AuthContext } from "../context/AuthContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  const {login} = useContext(AuthContext);

  function handleSubmit() {
    console.log(email, password);
    login(email, password);
  }

  const navigation = useNavigation();

  return (
    <View className="flex-1 p-4">
      <View className="mt-10 ">
        <Text className="text-2xl font-bold">Bem vindo</Text>
        <Text className="text-gray-500 text-lg">
          Olá, este app foi desenvolvido para aprimorar o funcionamento de login
          com JWT
        </Text>
      </View>

      <View className="mt-10">
        <Text className="p-1 font-semibold">Email</Text>
        <TextInput
          className=" border-2 border-gray-300 rounded-md p-2 placeholder:text-gray-600"
          placeholder="Digite seu email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View className="mt-5">
        <Text className="p-1 font-semibold">Senha</Text>
        <TextInput
          className=" border-2 border-gray-300 rounded-md p-2 placeholder:text-gray-600"
          placeholder="Digite sua senha"
          secureTextEntry={showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          className="absolute right-2 bottom-3"
        >
          {showPassword ? (
            <Feather name="eye-off" size={24} color="black" />
          ) : (
            <Feather name="eye" size={24} color="black" />
          )}
        </TouchableOpacity>
      </View>

      <View className="mt-5 flex-row items-center">
        <Checkbox
          value={checked}
          className="p-1 "
          color={checked ? "#166534" : "#d1d5db"}
          onValueChange={setChecked}
        />

        <Text className="pl-3 font-semibold">Lembrar senha</Text>
      </View>

      <TouchableHighlight
        className="mt-10 bg-green-800 rounded-md"
        onPress={handleSubmit}
      >
        <Text className="text-white font-bold text-center py-3">Entrar</Text>
      </TouchableHighlight>

      <TouchableOpacity
        onPress={() => navigation.navigate("SignUp")}
        className="mt-10 flex-row justify-center"
      >
        <Text className="text-gray-500">Não tem uma conta? </Text>
        <Text className="text-green-800">Cadastre-se agora mesmo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
