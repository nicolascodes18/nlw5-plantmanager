import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.40.109:3333'
})

// Conectar na Api : json-server ./src/services/server.json --host[IP] --port [porta]

export default api;