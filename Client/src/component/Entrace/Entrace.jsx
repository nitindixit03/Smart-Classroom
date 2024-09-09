// src/SplitPage.js
import React from "react";
import { Button } from "@nextui-org/react";
import { UserIcon } from "../../Icons/Usericon";
import { Protect, useAuth, useUser} from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function SplitPage() {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();
  if (!isSignedIn) {
    navigate("/login");
  }
  const { user } = useUser();
  const fullname = user.fullName;
  const email = user.primaryEmailAddress.emailAddress;
  

  const Student = () => {
    axios.post("/http:localhost:3000/studentSignUp/", {
      name: fullname,
      email: email,
      role: "student"
    })
  }
  
  const Teacher = () => {
    axios.post("/http:localhost:3000/teacherSignUp/", {
      name: fullname,
      email: email,
      role: "teacher"
    })
  }

  return (
    <Protect>
      <div className="flex h-screen">
        
        {/* Yellow Half */}
        <div className="w-1/2 bg-yellow-500 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 h-96 flex flex-col items-center justify-center">
            <img
              src="/student.jpg"
              alt="Student"
              className="w-48 h-48 object-cover mb-4"
            />
            <Button
              onClick={Student}
              color="warning"
              variant="bordered"
              startContent={<UserIcon />}
            >
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
            <Button
              onClick={Teacher}
              color="success"
              variant="bordered"
              startContent={<UserIcon />}
            >
              Teacher
            </Button>
          </div>
        </div>
      </div>
    </Protect>
  );
}

export default SplitPage;
