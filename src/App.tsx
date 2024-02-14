import RegistrationPage from '../src/components/RegistrationPage'
import React from "react";
const App: React.FC = () => {
  const handleRegistrationSuccess = () => {
    // Logic to handle successful registration (e.g., redirect to another page, show success message)
    console.log('Registration successful!');
  };

  return (
    <div className="App">
      <RegistrationPage onSubmit={handleRegistrationSuccess} />
    </div>
  );
};

export default App;