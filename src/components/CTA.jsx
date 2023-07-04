import styles from '../style';
import Button from './Button';
import Lottie from 'lottie-react';
import ai from '../lottie-files/artificial-intelligence-ai.json';

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={`${styles.heading2}`}>
        CSIS 2023 promises to be an unforgettable experience!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 font-comfortaa`}>
        Where you will connect with like-minded individuals, discover the
        forefront of technology, and be inspired to shape the future. Get ready
        to unleash the power of technology and be a part of this extraordinary
        journey at Chandigarh University!
      </p>
      <Button />
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Lottie
        className={`bg-blue-gradient  rounded-[10px]   `}
        animationData={ai}
      />
    </div>
  </section>
);

export default CTA;
