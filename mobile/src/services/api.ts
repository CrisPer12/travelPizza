import axios from  'axios';

const api = axios.create({
    baseURL: 'http://{{seuIP}}'
})

export { api };