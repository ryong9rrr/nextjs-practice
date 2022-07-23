import React from 'react';
import { EventItem } from '~/types';
import { formatAddress, humanReadableDate } from '~/utils';
import { AddressIcon, ArrowRightIcon, DateIcon } from '~/components/Icons';
import Button from '~/components/ui/Button';
import classes from './EventItem.module.css';

interface Props {
  item: EventItem;
}

const EventItemComponent: React.FC<Props> = ({ item }) => {
  const { id, title, image, date, location } = item;
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={`/${image}`} alt="" />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate(date)}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formatAddress(location)}</address>
          </div>
        </div>

        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItemComponent;
