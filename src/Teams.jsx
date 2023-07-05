import React from 'react';
import styles from './style';
import { leads } from './constants';
import { Navbar, Footer, TeamCards } from './components';

const Teams = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} z-50`}>
          <Navbar />
        </div>
      </div>

      {/* <video className="w-full fixed " autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video> */}
      <div className={`bg-primary ${styles.flexStart} z-0`}>
        <div className={`${styles.boxWidth}`}></div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <TeamCards Objects={leads} />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Teams;
