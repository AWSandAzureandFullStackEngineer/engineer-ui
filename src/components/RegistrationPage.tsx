import axios, { AxiosResponse } from 'axios';
import React, {useState} from "react";

interface RegistrationPageProps {
  onSubmit: () => void;
}

const RegistrationPage: React.FC<RegistrationPageProps> = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [typeOfEngineer, setTypeOfEngineer] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response: AxiosResponse = await axios.post('/api/1.0/users/register', {
        firstName,
        lastName,
        typeOfEngineer,
        username,
        email,
        password
      });
      console.log(response.data);
      onSubmit(); // Call onSubmit callback on successful registration
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-red-500 via-violet-500 to-white min-h-screen flex justify-center items-center">
      <div className="bg-rose-200 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-4 text-center">Welcome to Engineers Hub Central</h1>
        <h2 className="text-lg text-white mb-8 text-center">A place for Engineers of All Industries</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" className="block w-full border border-gray-300 rounded-md px-4 py-2" />
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" className="block w-full border border-gray-300 rounded-md px-4 py-2" />
          <input type="text" value={typeOfEngineer} onChange={(e) => setTypeOfEngineer(e.target.value)} placeholder="Type of Engineer" className="block w-full border border-gray-300 rounded-md px-4 py-2" />
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" className="block w-full border border-gray-300 rounded-md px-4 py-2" />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="block w-full border border-gray-300 rounded-md px-4 py-2" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="block w-full border border-gray-300 rounded-md px-4 py-2" />
          <button type="submit" className="bg-gradient-to-r from-red-500 via-violet-500 to-white text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
