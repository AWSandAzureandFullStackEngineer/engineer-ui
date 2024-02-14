import axios from 'axios';

const api = axios.create({
  baseURL: '' // Replace 'your-domain.com' with your actual domain
});

export const registerUser = async (userData: any) => {
  try {
    const response = await api.post('http://localhost:8081', userData);
    return response.data;
  } catch (error) {
    throw new Error('Failed to register user');
  }
};

export default api;
