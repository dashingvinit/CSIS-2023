import { apple, bill, google } from '../assets';
import styles, { layout } from '../style';
import Lottie from 'lottie-react';
import smartphone from '../lottie-files/smartphone.json';

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      {/* <img
        className="w-[100%] h-[100%] relative z-[5]"
        src={bill}
        alt="billing"
      /> */}
      <Lottie animationData={smartphone} className="w-3/4" />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Exploring Boundless Horizons
        <br className="sm:block hidden" /> with CSIS Events
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 font-comfortaa`}>
        CSIS 2023 offers engaging activities: panel discussions, expert talks,
        workshops, and paper presentations. Experience the E-Waste Art
        Extravaganza for sustainability. Join us for a cultural evening.
      </p>

      {/* <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt="app_store"
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
        />
        <img
          src={google}
          alt="play_store"
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
        />
      </div> */}
    </div>
  </section>
);
export default Billing;
