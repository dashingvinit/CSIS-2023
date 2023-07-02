import React from 'react';
import Lottie from 'lottie-react';
import background from '../lottie-files/background.json';

import styles from '../style';

import { discount, Yrobot } from '../assets';
import GetStarted from './GetStarted';

const Hero = () => (
  <>
    <section
      id="home"
      className={`flex md:flex-row flex-col md:justify-center ${styles.paddingY}`}>
      <Lottie animationData={background} className=" absolute z-0 w-1/2" />
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 z-10`}>
        {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img className="w-[32px] h-[32px]" src={discount} alt="discount" />
        <p className={`${styles.paragraph} ml-2 font-comfortaa`}>
          <span className="text-white">20%</span> Discount For{' '}
          <span className="text-white">1 Month</span> Account
        </p>
      </div> */}
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="font-poppins font-semibold ss:text-[72px] text-[42px] text-white ss:leading-[90px] leading-[65px] w-full red-text-gradient">
            Chandigarh University
          </h1>

          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[42px] text-white ss:leading-[90px] leading-[65px]">
          welcomes you <br /> to {''}
          <span className="text-gradient">CSIS 2023</span>{' '}
        </h1>

        <h1 className="font-poppins font-semibold ss:text-[40px] text-[38px] text-white ss:leading-[50px] leading-[50px] w-full">
          Unleashing the power of technology
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 font-comfortaa`}>
          "The Computer Society India Symposium 2023, will be hosted by the IEEE
          Computer Society CU Student Chapter at{' '}
          <span className="red-text-gradient">Chandigarh University. </span> "
        </p>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          className="w-[100%] h-[100%] relative z-[5]"
          src={Yrobot}
          alt="robot"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  </>
);

export default Hero;
