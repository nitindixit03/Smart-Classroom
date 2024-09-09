// src/SplitPage.js
import React from 'react';
import { Button } from "@nextui-org/react";
import { UserIcon } from '../../Icons/Usericon';

function SplitPage() {
  return (
    <div className="flex h-screen">
      {/* Yellow Half */}
      <div className="w-1/2 bg-yellow-500 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96 h-96 flex flex-col items-center justify-center">
          <img
            src="/student.jpg"
            alt="Student"
            className="w-48 h-48 object-cover mb-4"
          />
          <Button color="warning" variant="bordered" startContent={<UserIcon />}>
            Student
          </Button>
        </div>
      </div>
      
      {/* Green Half */}
      <div className="w-1/2 bg-green-500 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96 h-96 flex flex-col items-center justify-center">
          <img
            src="/teacher.jpg"
            alt="Teacher"
            className="w-48 h-48 object-cover mb-4"
          />
          <Button color="success" variant="bordered" startContent={<UserIcon />}>
            Teacher
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SplitPage;
