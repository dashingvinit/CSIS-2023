import React from 'react';
import sugandha from '../assets/sugandha.png';
import amit from '../assets/amit.png';

const Teachers = () => {
  return (
    <div className="h-auto md:flex justify-between items-center mb-10 ">
      <div className="container md:flex justify-between gap-10 ">
        <div className="max-w-sm">
          <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
            <img
              className="rounded-t-lg bg-yellow-400 w-full"
              src={sugandha}
              alt
            />
            <div className="py-6 px-8 rounded-lg bg-white">
              <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">
                Sugandha Sharma
              </h1>
              <p className="text-gray-700 tracking-wide">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum,
                labore. Ea debitis beatae sequi deleniti.
              </p>
            </div>
            {/* <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
              <span className="text-md">$150</span>
            </div> */}
          </div>
        </div>
        <div className="max-w-sm ">
          <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
            <img className="rounded-t-lg bg-yellow-400 w-full" src={amit} alt />
            <div className="py-6 px-8 rounded-lg bg-white">
              <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">
                Amit jain
              </h1>
              <p className="text-gray-700 tracking-wide">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum,
                labore. Ea debitis beatae sequi deleniti.
              </p>
            </div>
            {/* <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
              <span className="text-md">$150</span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
