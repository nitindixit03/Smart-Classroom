import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faPersonMilitaryToPerson, faBrain, faLightbulb} from '@fortawesome/free-solid-svg-icons';
import { SignUp } from '@clerk/clerk-react';

function Signup() {
  return (
    <section className="bg-gray-100 min-h-screen">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        {/* Section with the dark background and sphere animation */}
        <section className="relative flex h-32 items-end bg-[#0B0A0C] lg:col-span-5 lg:h-full xl:col-span-6 lg:flex lg:flex-col lg:justify-center lg:items-center lg:space-y-4">
          
          <img 
            src='/sphere1.gif' 
            alt="Sphere Animation"
            className="absolute top-0 left-1/2 lg:w-48 lg:h-48 object-cover -translate-x-1/2 lg:mt-2 z-20 w-12 h-12 mt-0" 
          />

          <img
            alt=""
            src="/login.jpg"
            className="absolute lg:mt-0 sm:mt-0 inset-0 h-full w-full object-contain opacity-80"
          />

          {/* Content for large screens */}
          <div className="absolute inset-0 hidden lg:flex flex-col items-center justify-center text-center space-y-4 lg:space-y-6">
            <h2 className="text-white text-5xl italic font-handjet tracking-wider mb-8 lg:mb-16">
              Teach, Learn, Anywhere
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <p className="text-white text-lg font-fjalla px-4 py-2 rounded shadow-md flex items-center gap-2">
                <FontAwesomeIcon icon={faLaptop} /> Your Digital Classroom Hub
              </p>
              <p className="text-white text-lg font-fjalla px-4 py-2 rounded shadow-md flex items-center gap-2">
                <FontAwesomeIcon icon={faPersonMilitaryToPerson} /> Classrooms Without Limits
              </p>
              <p className="text-white text-lg font-fjalla px-4 py-2 rounded shadow-md">
              <FontAwesomeIcon icon={faBrain} /> Connecting Minds Virtually
              </p>
              <p className="text-white text-lg font-fjalla px-4 py-2 rounded shadow-md">
              <FontAwesomeIcon icon={faLightbulb} /> Beyond Traditional Walls
              </p>
            </div>  
          </div>
        </section>

        {/* White background section for small screens */}
        <section className="lg:hidden bg-white p-8 flex flex-col items-center text-center">
          <h2 className="text-black text-3xl italic font-handjet tracking-wider mb-8">
            Teach, Learn, Anywhere
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <p className="text-black text-lg font-fjalla px-4 py-2 rounded flex items-center gap-2">
              <FontAwesomeIcon icon={faLaptop} /> Your Digital Classroom Hub
            </p>
            <p className="text-black text-lg font-fjalla px-4 py-2 rounded flex items-center gap-2">
              <FontAwesomeIcon icon={faPersonMilitaryToPerson} /> Classrooms Without Limits
            </p>
            <p className="text-black text-lg font-fjalla px-4 py-2 rounded ">
            <FontAwesomeIcon icon={faBrain} /> Connecting Minds Virtually
            </p>
            <p className="text-black text-lg font-fjalla px-4 py-2 rounded ">
            <FontAwesomeIcon icon={faLightbulb} /> Beyond Traditional Walls
            </p>
          </div>
        </section>

        <main
          className="flex flex-col items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 w-full"
        >
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <a
                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20 dark:bg-gray-900"
                href="#"
              >
                <span className="sr-only">Home</span>
                <svg
                  className="h-8 sm:h-10"
                  viewBox="0 0 28 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* SVG Content */}
                </svg>
              </a>
            </div>

            {/* Form Centering */}
            <div>
                <h1 className='font-handjet tracking-wider text-2xl'>
                <svg fill="#000000" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 198 198" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M0,92.905h48.024c-0.821,35-10.748,38.973-23.216,40.107L20,133.608v38.486l5.542-0.297 c16.281-0.916,34.281-3.851,46.29-18.676C82.359,140.125,87,118.893,87,86.3V25.905H0V92.905z"></path> <path d="M111,25.905v67h47.383c-0.821,35-10.427,38.973-22.895,40.107L131,133.608v38.486l5.222-0.297 c16.281-0.916,34.442-3.851,46.451-18.676C193.199,140.125,198,118.893,198,86.3V25.905H111z"></path> </g> </g> </svg>
                If Google Classroom could work, & Zoom was fun!
                <svg className='ml-[26rem]' fill="#000000" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 198 198" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M0,92.905h48.024c-0.821,35-10.748,38.973-23.216,40.107L20,133.608v38.486l5.542-0.297 c16.281-0.916,34.281-3.851,46.29-18.676C82.359,140.125,87,118.893,87,86.3V25.905H0V92.905z"></path> <path d="M111,25.905v67h47.383c-0.821,35-10.427,38.973-22.895,40.107L131,133.608v38.486l5.222-0.297 c16.281-0.916,34.442-3.851,46.451-18.676C193.199,140.125,198,118.893,198,86.3V25.905H111z"></path> </g> </g></svg> 
                
                </h1>
            </div>
            <div className="flex justify-center items-center mt-4">
              <SignUp forceRedirectUrl={"/entrance"}/>
            </div>
          </div>
        </main>
      </div>
    </section>

  );
}

export default Signup;
