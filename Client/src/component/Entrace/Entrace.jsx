import React from "react";
import { Button } from "@nextui-org/react";
import { UserIcon } from '../../Icons/UserIcon';

export default function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex gap-6">
        <Button 
          color="warning" 
          variant="bordered" 
          startContent={<UserIcon />} 
          className="bg-yellow-500 border-yellow-500 hover:bg-yellow-600 text-white text-xl font-bold px-10 py-6 rounded-lg"
        >
          Student
        </Button>
        <Button 
          color="success" 
          variant="bordered" 
          startContent={<UserIcon />} 
          className="bg-green-500 border-green-500 hover:bg-green-600 text-white text-xl font-bold px-10 py-6 rounded-lg"
        >
          Teacher
        </Button>
      </div>
    </div>
  );
}
