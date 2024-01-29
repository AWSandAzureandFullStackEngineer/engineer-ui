import axios from 'axios';
import {env} from "use-sidecar/dist/es5/env";

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
      await axios.post('', engineer);
      return true;
    } catch (error) {
      console.error('Registration failed:', error);
      return false;
    }
  },
};
export default EngineerService;