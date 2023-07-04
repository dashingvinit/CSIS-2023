import React from 'react';
import styles from './style';
import Timeline from './components/Timeline';
import { video } from './assets';
import { leads } from './constants';
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

const Teams = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} z-50`}>
          <Navbar />
        </div>
      </div>
      <video className="w-full absolute " autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className={`bg-primary ${styles.flexStart} z-0`}>
        <div className={`${styles.boxWidth}`}>
          <Timeline objects={leads} />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <h1>About page</h1>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Teams;
