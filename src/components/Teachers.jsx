import React from 'react';
import sugandha from '../assets/sugandha.png';
import amit from '../assets/amit.png';

const Teachers = () => {
  return (
    <div className="h-auto md:flex justify-between items-center mb-10 ">
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      <div className="container md:flex justify-between gap-10 ">
        <div className="w-80">
          <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
            <div className="rounded-t-lg bg-yellow-400 flex justify-center">
              <img
                className=" rounded-t-lg bg-yellow-400 "
                src={sugandha}
                alt
              />
            </div>

            <div className="py-6 px-8 rounded-lg bg-white">
              <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">
                Er. Sugandha Sharma
              </h1>
              <p className="text-gray-700 tracking-wide">
                Branch counsellor, IEEE Chandigarh University Student Branch and
                Assistant Dean Co-curricular Activities, Chandigarh University
              </p>
            </div>
            {/* <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
              <span className="text-md">$150</span>
            </div> */}
          </div>
        </div>
        <div className="w-80 ">
          <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
            <div className="rounded-t-lg bg-yellow-400 flex justify-center">
              <img className=" rounded-t-lg bg-yellow-400 " src={amit} alt />
            </div>
            <div className="py-6 px-8 rounded-lg bg-white ">
              <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">
                Dr. Amit Jain
              </h1>
              <p className="text-gray-700 tracking-wide">
                Chapter Advisor, IEEE Computer Society Chandigarh University
                Student Chapter and Associate Dean, Academic Affairs,
                Chandigarh University
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
