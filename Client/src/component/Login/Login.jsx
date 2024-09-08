import React from 'react';

function Login() {
  return (
    <section className="bg-">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-[#0B0A0C] lg:col-span-5 lg:h-full xl:col-span-6">
          
          <img 
            src='/sphere1.gif' 
            alt="Sphere Animation"
            className="absolute top-0 left-1/2 lg:w-48 lg:h-48 object-cover -translate-x-1/2 lg:mt-2 z-20 
                      w-12 h-12 mt-0" 
          />

          <img
            alt=""
            src="/login.jpg"
            className="absolute lg:mt-14 sm:mt-0 inset-0 h-full w-full object-contain opacity-80"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold text-center transform -translate-y-1/2">
              Teach, Learn, Anywhere
            </h2>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Login;
