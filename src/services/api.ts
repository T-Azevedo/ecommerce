import axios from "axios";

const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/T-Azevedo/Backend-gCadastro/produtos'
})

export default api;