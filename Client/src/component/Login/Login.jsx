import React from 'react';
import { SignIn } from '@clerk/clerk-react'

function Login() {
  return (
    <section className="flex justify-center items-center">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12 w-full">
        <section className="relative flex h-32 items-end bg-[#0B0A0C] lg:col-span-5 lg:h-full xl:col-span-6">
          {/* Sphere gif on top */}
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

          <div className="hidden lg:relative lg:block lg:p-12">
            <a className="block text-white" href="#">
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

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to Squid 🦑
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
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

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl dark:text-white">
                Welcome to Squid 🦑
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>

            {/* Form Centering */}
            <div className="flex justify-center items-center mt-8">
              <SignIn />
            </div>
          </div>
        </main>
      </div>
    </section>

  );
}

export default Login;
