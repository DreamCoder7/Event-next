import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "@/components/EventList/event-list";

function HomePage(props) {
  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const filteredEvents = await getFeaturedEvents();

  return {
    props: { events: filteredEvents },
    revalidate: 1800,
  };
}

export default HomePage;
