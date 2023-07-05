import React from 'react';
import styles from '../style';
import { arrowUp } from '../assets';

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient  p-[2px] cursor-pointer`}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
          <span className="text-gradient">Now</span>
        </p>
        <img
          className="w-[23px] h-[23px] object-contain"
          src={arrowUp}
          alt="arrowUp"
        />
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23px]">
        <span className="text-gradient">Register</span>
      </p>
    </div>
  </div>
);
export default GetStarted;
