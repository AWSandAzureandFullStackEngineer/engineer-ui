import React from 'react';
import Button from './Button';
import RegistrationForm from './RegistrationForm';

interface RegistrationPageProps {
  onSubmit: () => void
}

const RegistrationPage: React.FC<RegistrationPageProps> = ({onSubmit}: RegistrationPageProps) => {
  const handleRegistrationSuccess = () => {
    // Logic to handle successful registration (e.g., redirect to another page, show success message)
    console.log('Registration successful!');
  };

  return (
    <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center">
          Welcome to Engineers Hub Central
        </h1>
        <p className="text-xl font-semibold text-center text-violet-500">
          A place for Engineers of All Industries
        </p>
      <div className="mt-8">
        <RegistrationForm onSubmit={handleRegistrationSuccess} />
      </div>
      <div className="mt-4 text-center">
        <Button onClick={() => console.log('Button clicked')}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default RegistrationPage;
