import axios from 'axios';

const ApiSetup = () => {
    const user = JSON.parse(localStorage.getItem("@user")) || '';

 const api = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + user.token
    }
});

return api;
}

export default ApiSetup;