import axios from 'axios';

export const getToken = () => {
    return axios.get('http://localhost:8080');
};