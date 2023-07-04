import React from 'react';

import styles from './style';
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
} from './components';
import { Routes, Router } from 'react-router-dom';

const Home = () => (
  <div className="bg-primary w-full  overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter} `}>
      <div className={`${styles.boxWidth} z-50`}>
        <Navbar />
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart} z-0`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Clients />
        <CTA />
        <Billing />
        <CardDeal />
        <Footer />
      </div>
    </div>
  </div>
);

export default Home;
