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
    <div className="bg-primary w-full h-full overflow-hidden bg-black">
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}  z-50`}>
          <Navbar />
        </div>
      </div>
      <div>
        <video className="w-full fixed -z-10" autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>

        <div className={`bg-primary ${styles.flexStart} z-0`}>
          <div className={`${styles.boxWidth}`}>
            <Events />
          </div>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Events />
            <Timeline objects={leads} />

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
