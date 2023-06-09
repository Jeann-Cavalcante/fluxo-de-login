import axios from 'axios';

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