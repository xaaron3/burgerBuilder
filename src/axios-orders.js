import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://react-my-burger-1b428.firebaseio.com/'
})

export default instance;