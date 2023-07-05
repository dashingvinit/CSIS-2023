import React from 'react';
import CSISlogo from './CSISlogo';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = ({ objects }) => {
  return (
    <>
      <VerticalTimeline lineColor={'#FF6666 '}>
        {objects.map((object) => (
          <VerticalTimelineElement
            key={object.id}
            className="vertical-timeline-element--work  "
            contentStyle={{
              background:
                'linear-gradient(-168.39deg,#ffffff -278.56%,#6d6d6d -78.47%,#1d1d10 91.61%',
              color: '#fff',
            }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date={object.name}
            iconStyle={{
              background:
                'linear-gradient(90deg, rgba(36, 30, 0, 1) 0%, rgb(255, 183, 0) 0%,rgb(255, 221, 0) 100%)',
            }}
            icon={<CSISlogo />}>
            <h3 className="vertical-timeline-element-title font-bold">
              {object.lead}
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-2xl font-bold">
              {object.name}
            </h4>
            <p>{object.email}</p>
            {/* <h4 className="vertical-timeline-element-subtitle">{object.email}</h4> */}
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          // icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};

export default Timeline;
