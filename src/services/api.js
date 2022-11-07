import axios from 'axios';
// import Constants from 'expo-constants';

// console.log('process.env.TV_MAZE_API', process.env.TV_MAZE_API)

const api = axios.create({
  baseURL: 'https://api.tvmaze.com',
});

export default api;
