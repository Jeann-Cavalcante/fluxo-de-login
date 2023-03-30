import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// const token = await AsyncStorage.getItem('@token');
// console.log(token);



 function setupAPIClient(token){

  console.log(token);
  const Api = axios.create({
    baseURL: 'http://192.168.0.104:3333',
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return Api;
};

export default setupAPIClient;