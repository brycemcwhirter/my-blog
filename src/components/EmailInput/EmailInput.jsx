import React from "react";

const EmailInput = () => {
  return (
    <div className="flex items-center border-b border-gray-500 py-2">
      <input
        type="email"
        placeholder="Enter your email"
        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </div>
  );
};

export default EmailInput;
