import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl text-gray-700 mb-4">404 - Not Found</h2>
      <p className="text-center text-xl text-gray-600">
        The page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFoundPage;
