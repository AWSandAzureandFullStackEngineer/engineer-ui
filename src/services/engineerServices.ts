import axios from 'axios';

interface Engineer {
  id?: number;
  firstName: string;
  lastName: string;
  typeOfEngineer: string;
  username: string;
  email: string;
  password: string;
}

const EngineerService = {
  registerEngineer: async (engineer: Engineer): Promise<boolean> => {

    try {
      await axios.post('/api/1.0/users/register', engineer).get;
      return true;
    } catch (error) {
      console.error('Registration failed:', error);
      return false;
    }
  },
};
export default EngineerService;