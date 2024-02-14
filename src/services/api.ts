import axios from 'axios';


export const registerUser = async (userData: any) => {
  try {
    const response = await axios
      .post('https://engineershubcentral.net/api/1.0/users/register', userData);
    return response.data;
  } catch (error) {
    throw new Error('Failed to register user');
  }
};

