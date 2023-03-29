import axios from 'axios';

 function setupAPIClient(){
  const Api =  axios.create({
    baseURL: 'http://192.168.0.104:3333',
  });

  return Api;
};

export default setupAPIClient;