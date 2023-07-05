import React from 'react';
import { quotes } from '../assets';
import { people01 } from '../assets';
import { FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const FeedbackCard = ({ linkedin, name, lead, icon }) => (
  <>
    <section className="   font-medium  gap-3">
      <section className="flex flex-col w-64 bg-black-gradient-2 rounded-2xl px-3 gap-1 m-5 py-6 shadow-lg">
        <div className="flex items-center justify-between    ">
          <span className="text-gray-400 text-sm">CSIS 2023</span>
          <span className="text-emerald-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </span>
        </div>
        <div className="mt-6 w-fit mx-auto">
          <img
            src={icon}
            className="rounded-full w-28 "
            alt="profile picture"
            srcSet=""
          />
        </div>
        <div className="mt-8 ">
          <h2 className="text-white font-bold text-2xl tracking-wide">
            {name}
          </h2>
        </div>
        <p className="text-red-600 font-semibold mt-2.5">
          Chandigarh University
        </p>
        <div className="h-1 w-full bg-black mt-8 rounded-full">
          <div className="h-1 rounded-full w-2/5 bg-yellow-500 " />
        </div>

        <div className="flex flex-row justify-center items-center mt-3 gap-5 text-white">
          <div>
            <h1 className="self-center text-sm">{lead}</h1>
          </div>
          <div>
            <a
              href={linkedin}
              className="font-bold transition-all text-2xl text-white mt-5 hover:scale-110">
              <FaLinkedin />
            </a>
          </div>
          <div>
            <a
              href={linkedin}
              className="font-bold transition-all text-2xl text-white mt-5 hover:scale-110">
              <SiGmail />
            </a>
          </div>
        </div>
        {/* <span className="text-gray-400 font-semibold">Storage:</span>
        <span>40%</span> */}
      </section>
      {/* <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[360px] w-full md:mr-10 sm:mr-5 mr-0 my-5 bg-black-gradient-2">
      <img
        src={quotes}
        alt="double_quotes"
        className="w-[30px] h-[27px] object-contain"
      />
      <p className="font-comfortaa font-normal text-[18px] leading-[32px] text-white my-10">
        {lead}
      </p>

      <div className="flex flex-row">
        <img
          src={icon}
          alt={name}
          className="w-[100px] h-[100px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
        />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
            {name}
          </h4>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
            {lead}
          </p>
          <div className="flex flex-row justify-start gap-5">
            <a
              href={linkedin}
              className="font-bold transition-all text-3xl text-white mt-5 hover:scale-110">
              <FaLinkedin />
            </a>
            <a
              href={linkedin}
              className="font-bold transition-all text-3xl text-white mt-5 hover:scale-110">
              <SiGmail />
            </a>
          </div>
        </div>
      </div>
    </div> */}
    </section>
  </>
);

export default FeedbackCard;
