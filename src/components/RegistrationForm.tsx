import { registerUser } from '../services/api';
import React, {useState} from "react";
interface RegistrationFormProps {
  onSubmit: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [typeOfEngineer, setTypeOfEngineer] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Call registerUser function from api.ts
      await registerUser({
        firstName,
        lastName,
        typeOfEngineer,
        username,
        email,
        password
      });
      onSubmit(); // Call onSubmit callback on successful registration
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" className="block w-full border border-gray-300 rounded-md px-4 py-2" />
      <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" className="block w-full border border-gray-300 rounded-md px-4 py-2" />
      <input type="text" value={typeOfEngineer} onChange={(e) => setTypeOfEngineer(e.target.value)} placeholder="Type of Engineer" className="block w-full border border-gray-300 rounded-md px-4 py-2" />
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" className="block w-full border border-gray-300 rounded-md px-4 py-2" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="block w-full border border-gray-300 rounded-md px-4 py-2" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="block w-full border border-gray-300 rounded-md px-4 py-2" />
      <button type="submit" className="bg-gradient-to-r from-red-500 via-violet-500 to-white text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register</button>
    </form>
  );
};

export default RegistrationForm;
