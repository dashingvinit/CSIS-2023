import React from 'react';
import styles from './style';
import { leads } from './constants';
import { video } from './assets';
import {
  Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero,
  Timeline,
  Events,
} from './components';

const About = () => {
  return (
    <div className="bg-primary w-full h-full overflow-hidden ">
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}  z-50`}>
          <Navbar />
        </div>
      </div>
      <div>
        {/* <video
          className="w-full bg-black h-100 w-100 fixed "
          autoPlay
          loop
          muted>
          <source src={video} type="video/mp4" />
        </video> */}

        <div className={`bg-primary ${styles.flexStart} z-0`}>
          <div className={`${styles.boxWidth}`}>
            <Events />
          </div>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Timeline objects={leads} />
            <Events />
            {/* <h1 className="text-white">Events timeline for CSIS 2023</h1>
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA />
             */}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
