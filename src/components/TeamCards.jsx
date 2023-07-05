import React from 'react';
import { leads } from '../constants';
import styles from '../style';
import FeedbackCard from './FeedbackCard';

const TeamCards = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY}  ${styles.flexCenter} flex-col relative`}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
      <h1 className="font-bold text-7xl text-white">Leads of CSIS 2023</h1>
      <div className="w-full flex justify-between items-center md:flex-row flex-col content-center sm:mb-16 mb-6 relative z-[1]">
        <div className="grid justify-items-center gap-x-8 gap-y-4 grid-cols-3"></div>
      </div>

      <div className="flex flex-wrap sm:justify-start md:justify-center w-full feedback-container relative z-[1]">
        {leads.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default TeamCards;
