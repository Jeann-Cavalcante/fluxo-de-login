import { TextInput } from "react-native";

const InputDefault = () => {
  return (
    <>
      <TextInput 
        placeholder='Digite seu email'
        keyboardType="email-address"
      />
    </>
  );
}

export default InputDefault;