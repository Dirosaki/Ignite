import axios from 'axios';

// DEVELOPMENT MODE
// const url = 'http://localhost:3333';
// PRODUCTION MODE
const url = 'https://dynamusdev-ignite.herokuapp.com';

const api = axios.create({
  baseURL: url
});

export default api;