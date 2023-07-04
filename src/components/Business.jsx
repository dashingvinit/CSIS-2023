import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';
import { clients } from './../constants/index';

const FeatureCard = ({ index, title, content, icon }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? 'mb-6' : 'mb-0'
    } feature-card`}>
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-comfortaa font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Empowering Innovators, <br className="sm:block hidden" /> Igniting
          Collaboration
        </h2>
        <p className={`${styles.paragraph} font-comfortaa max-w-[470px] mt-5`}>
          Join us for the prestigious Computer Society India Symposium (CSIS) at
          Chandigarh University. Discover a captivating blend of technical
          expertise, engaging activities, and networking opportunities.
          Experience a vibrant learning ecosystem that fosters innovation,
          collaboration, and growth in the field of computer science.
        </p>
        <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
