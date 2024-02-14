import axios from 'axios';

const api = axios.create({
  baseURL: '' // Replace 'your-domain.com' with your actual domain
});

export const registerUser = async (userData: any) => {
  try {
    const response = await api.post('https://engineershubcentral.net/api/1.0/users/register', userData);
    return response.data;
  } catch (error) {
    throw new Error('Failed to register user');
  }
};

export default api;
