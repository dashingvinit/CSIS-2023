import React from 'react';
import { events } from '../constants';

const Events = () => {
  return (
    <div>
      {events.map((event) => {
        <div className="md:flex flex-row " key={event.id}>
          <div className="basis-1/3">
            <h1>{event.name}</h1>
            <p>{event.desc}</p>
          </div>
        </div>;
      })}
    </div>
  );
};

export default Events;
