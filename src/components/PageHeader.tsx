import React from "react";
const PageHeader: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-red-500 via-violet-500 to-white py-4">
      <h1 className="text-3xl font-bold text-white mb-2 text-center">Welcome to Engineers Hub Central</h1>
      <h2 className="text-lg text-white text-center">A place for Engineers of All Industries</h2>
    </header>
  );
};

export default PageHeader;
