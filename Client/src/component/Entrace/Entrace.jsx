import React from "react";
import { Button } from "@nextui-org/react";

function SplitPage() {
  return (
    <div className="flex h-screen">
      {/* Yellow Half */}
      <div className="w-1/2 bg-yellow-500 flex items-center justify-center">
        <Button
          color="danger"
          variant="bordered"
          className="relative text-4xl w-full h-full flex flex-col items-center justify-center border-none"
          css={{ backgroundColor: 'transparent', boxShadow: 'none' }}
        >
          <img
            src="./person.webp"
            alt="Student Icon"
            className="h-2/3 w-auto mb-4"
          />
          <span className="text-4xl font-bold text-black">Student</span>
        </Button>
      </div>

      {/* Green Half */}
      <div className="w-1/2 bg-green-500 flex items-center justify-center">
        <Button
          color="danger"
          variant="bordered"
          className="relative text-4xl w-full h-full flex flex-col items-center justify-center border-none"
          css={{ backgroundColor: 'transparent', boxShadow: 'none' }}
        >
          <img
            src="./person.webp"
            alt="Teacher Icon"
            className="h-2/3 w-auto mb-4"
          />
          <span className="text-4xl font-bold text-black">Teacher</span>
        </Button>
      </div>
    </div>
  );
}

export default SplitPage;
