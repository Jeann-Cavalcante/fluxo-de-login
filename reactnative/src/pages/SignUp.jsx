import { useNavigation } from "@react-navigation/native";
import Checkbox from "expo-checkbox";
import { useEffect, useState } from "react";
import { KeyboardAvoidingView, Platform, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import setupAPIClient from "../services/Api";

const SignUp = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const navigation = useNavigation();

  async function handleSubmit() {

    const api = setupAPIClient();

    if (password !== confirmPassword) return alert("As senhas não são iguais");
    if(!checked) return alert("Você precisa aceitar os termos de uso");
    if(nome === "" || email === "" || password === "") return alert("Preencha todos os campos");

    const response = await api.post("/user", {
      name: nome,
      email,
      password,
    });

    console.log(response.data);

    setNome("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setChecked(false);

    navigation.navigate("SignIn");
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className="flex-1 p-4">
      <View className="mt-10 ">
        <Text className="text-2xl font-black">CADASTRE-SE</Text>
        <Text className="text-gray-500 text-lg">
          Olá, Crie sua conta para fazer login
        </Text>
      </View>

      <View className="mt-10">
        <Text className="p-1 font-semibold">Nome</Text>
        <TextInput
          className=" border-2 border-gray-300 rounded-md p-2 placeholder:text-gray-600"
          placeholder="Digite seu email"
          keyboardType="default"
          value={nome}
          onChangeText={setNome}
        />
      </View>

      <View className="mt-5">
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
            <Feather name="eye-off" size={24} color="#6b7280" />
          ) : (
            <Feather name="eye" size={24} color="#6b7280" />
          )}
        </TouchableOpacity>
      </View>

      <View className="mt-5">
        <Text className="p-1 font-semibold">Confirma Senha</Text>
        <TextInput
          className=" border-2 border-gray-300 rounded-md p-2 placeholder:text-gray-600"
          placeholder="Digite sua senha"
          secureTextEntry={showConfirmPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          className="absolute right-2 bottom-3"
        >
          {showConfirmPassword ? (
            <Feather name="eye-off" size={24} color="#6b7280" />
          ) : (
            <Feather name="eye" size={24} color="#6b7280" />
          )}
        </TouchableOpacity>
      </View>

      <View className="mt-10 flex-row items-center">
        <Checkbox
          value={checked}
          className="p-1 "
          color={checked ? "#166534" : "#d1d5db"}
          onValueChange={setChecked}
        />

        <Text className="pl-3 font-semibold">Li e aceito os termos de uso</Text>
      </View>

      <TouchableHighlight
        className="mt-10 bg-green-800 rounded-md"
        onPress={handleSubmit}
      >
        <Text className="text-white font-bold text-center py-3">Entrar</Text>
      </TouchableHighlight>

      <TouchableOpacity
        onPress={() => navigation.navigate("SignIn")}
        className="mt-10 flex-row justify-center"
      >
        <Text className="text-gray-500">Já possui conta? </Text>
        <Text className="text-green-800">Faça seu login agora mesmo</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
