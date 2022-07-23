import type { NextPage } from 'next';
import { EventList } from '~/components/Events';
import { getFeaturedEvents } from '~/data';

const HomePage: NextPage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
};

export default HomePage;
