import React from "react";

const Loading = () => {
  return (
    <>
      <div className="fixed top-0 left-0 flex items-center bg-white dark:bg-gray-900 justify-center h-screen w-full">
        <div className="relative">
          <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200 dark:border-gray-800"></div>
          <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-[#f35a57] animate-spin"></div>
        </div>
      </div>
    </>
  );
};

export default Loading;
