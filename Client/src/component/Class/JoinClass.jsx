import React from 'react'

function JoinClass() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-black">
      
      {/* Join A Class Header */}
      <h1 className=" text-white text-2xl font-bold mb-16">Join A Class</h1>

      {/* Button Group */}
      <div className="w-full max-w-xs space-y-4">
        <button className="w-full py-3 mb-7 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
          Secret Room Code
        </button>
        <button className="w-full py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600">
          Wait for Approval
        </button>
      </div>

      {/* Go back to dashboard link */}
      <a href="#" className="mt-36 text-blue-500 hover:underline">
        Go back to Dashboard
      </a>
    </div>
  );
}

export default JoinClass;


