import React from 'react';
import { EventItem } from '~/types';
import EventItemComponent from './EventItemComponent';
import classes from './EventList.module.css';

interface Props {
  items: EventItem[];
}

const EventList: React.FC<Props> = ({ items }) => {
  return (
    <ul className={classes.list}>
      {items.map((item) => (
        <EventItemComponent key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default EventList;
